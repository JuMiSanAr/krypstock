from functools import reduce

from rest_framework import status
from rest_framework.generics import CreateAPIView, RetrieveAPIView, ListAPIView
from rest_framework.response import Response

from permissions.permissions import IsUserOrAdmin
from portfolio.models import Portfolio
from transaction.models import Transaction
from transaction.serializers.transaction_serializer_main import TransactionSerializer


class NewTransaction(CreateAPIView):
    '''
    POST: Create a new transaction.

    .
    '''
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def create(self, request, *args, **kwargs):

        portfolio = Portfolio.objects.get(id=self.request.data['portfolio'])
        if portfolio.user != request.user:
            return Response({'error': 'This portfolio does not belong to this user'},
                            status=status.HTTP_401_UNAUTHORIZED)

        transactions = Transaction.objects.filter(user=self.request.user, symbol=request.data['symbol'])

        previous_total_invested = 0
        previous_quantity = 0

        for transaction in transactions:
            if transaction.buy_sell == 'B':
                previous_total_invested += float(transaction.quantity) * float(transaction.price)
                previous_quantity += float(transaction.quantity)
            else:
                previous_total_invested -= float(transaction.quantity) * float(transaction.price)
                previous_quantity -= float(transaction.quantity)

        if previous_quantity - self.request.data['quantity'] < 0 and self.request.data['buy_sell'] == 'S':
            return Response({'error': 'Cannot sell more items than the user currently owns'},
                            status=status.HTTP_403_FORBIDDEN)

        # transaction_amount = int(self.request.data['quantity']) * int(self.request.data['price'])
        #
        # if previous_total_invested - transaction_amount < 0 and self.request.data['buy_sell'] == 'S':
        #     return Response({'error': 'Cannot sell for a higher amount than the user currently owns'},
        #                     status=status.HTTP_403_FORBIDDEN)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer, portfolio)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer, portfolio):
        transaction_amount = int(self.request.data['quantity']) * int(self.request.data['price'])
        serializer.save(user=self.request.user, cost=transaction_amount, portfolio=portfolio)


class AllUserTransactions(ListAPIView):
    '''
    GET: List all transactions from the user.

    .
    '''
    serializer_class = TransactionSerializer

    def get_queryset(self):
        return Transaction.objects.filter(user=self.request.user)


class SingleTransaction(RetrieveAPIView):
    '''
    GET: Get a single transaction from the user.

    .
    '''
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [IsUserOrAdmin]
