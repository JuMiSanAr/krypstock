from django.contrib.auth import get_user_model
from rest_framework import serializers

from portfolio.models import Portfolio
from transaction.serializers.transaction_serializer_no_portfolio import TransactionSerializerNoPortfolio

User = get_user_model()


class PortfolioSerializerNoUser(serializers.ModelSerializer):

    transactions = TransactionSerializerNoPortfolio(read_only=True, many=True)

    class Meta:
        model = Portfolio
        fields = ['id', 'name', 'description', 'transactions']
