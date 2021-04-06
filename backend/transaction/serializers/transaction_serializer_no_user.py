from rest_framework import serializers

from portfolio.serializers.portfolio_serializer_no_transaction import PortfolioSerializerNoTransaction
from transaction.models import Transaction


class TransactionSerializerNoUser(serializers.ModelSerializer):

    portfolio = PortfolioSerializerNoTransaction(read_only=True)

    class Meta:
        model = Transaction
        fields = ['id',
                  'portfolio',
                  'buy_sell',
                  'symbol',
                  'total_amount',
                  'number_bought',
                  'price_bought',
                  'exec_time']
