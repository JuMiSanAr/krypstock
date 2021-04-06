from rest_framework import serializers
from transaction.models import Transaction


class TransactionSerializerNoPortfolio(serializers.ModelSerializer):

    class Meta:
        model = Transaction
        fields = ['id',
                  'buy_sell',
                  'symbol',
                  'total_amount',
                  'number_bought',
                  'price_bought',
                  'exec_time']
