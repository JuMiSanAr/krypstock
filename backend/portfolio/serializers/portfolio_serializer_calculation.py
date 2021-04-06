from rest_framework import serializers

from portfolio.models import Portfolio
from transaction.serializers.transaction_serializer_no_portfolio import TransactionSerializerNoPortfolio


class PortfolioSerializerWithCalculation(serializers.ModelSerializer):

    transactions = TransactionSerializerNoPortfolio(read_only=True, many=True)

    average_prices = serializers.SerializerMethodField()

    def get_average_prices(self, instance):

        all_transactions = self.data['transactions']
        # return len(instance.posts.all())

    class Meta:
        model = Portfolio
        fields = ['id', 'name', 'description', 'transactions', 'average_prices']
