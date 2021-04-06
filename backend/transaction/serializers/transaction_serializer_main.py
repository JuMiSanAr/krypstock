from django.contrib.auth import get_user_model
from rest_framework import serializers

from portfolio.serializers.portfolio_serializer_no_transaction import PortfolioSerializerNoTransaction
from transaction.models import Transaction
from user.serializers.user_serializer_nested import UserSerializerNested

User = get_user_model()


class TransactionSerializer(serializers.ModelSerializer):

    user = UserSerializerNested(read_only=True)
    portfolio = PortfolioSerializerNoTransaction(read_only=True)

    class Meta:
        model = Transaction
        fields = '__all__'
