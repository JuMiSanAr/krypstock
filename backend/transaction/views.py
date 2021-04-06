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

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer, portfolio)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer, portfolio):
        amount = int(self.request.data['number_bought']) * int(self.request.data['price_bought'])
        serializer.save(user=self.request.user, total_amount=amount, portfolio=portfolio)


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
