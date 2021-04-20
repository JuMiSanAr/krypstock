from rest_framework import serializers
from transaction.models import Transaction


class TransactionSerializerNoPortfolio(serializers.ModelSerializer):

    class Meta:
        model = Transaction
        fields = ['id',
                  'buy_sell',
                  'symbol',
                  'type',
                  'cost',
                  'quantity',
                  'price',
                  'exec_time',
                  'active']
