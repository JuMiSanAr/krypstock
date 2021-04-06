from rest_framework import serializers
import numpy as np

from portfolio.models import Portfolio
from transaction.serializers.transaction_serializer_no_portfolio import TransactionSerializerNoPortfolio


class PortfolioSerializerWithCalculation(serializers.ModelSerializer):

    transactions = TransactionSerializerNoPortfolio(read_only=True, many=True)

    average_prices = serializers.SerializerMethodField()

    def get_average_prices(self, instance):
        transactions = np.array(instance.transactions.all())
        pass

    class Meta:
        model = Portfolio
        fields = ['id', 'name', 'description', 'transactions', 'average_prices']
