from django.contrib.auth import get_user_model
from rest_framework import serializers

from portfolio.models import Portfolio
from transaction.serializers.transaction_serializer_no_portfolio import TransactionSerializerNoPortfolio
from user.serializers.user_serializer_nested import UserSerializerNested

User = get_user_model()


class PortfolioSerializer(serializers.ModelSerializer):

    user = UserSerializerNested(read_only=True)
    transactions = TransactionSerializerNoPortfolio(read_only=True, many=True)

    class Meta:
        model = Portfolio
        fields = '__all__'
