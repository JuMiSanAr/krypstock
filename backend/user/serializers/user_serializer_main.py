from django.contrib.auth import get_user_model
from rest_framework import serializers

from portfolio.serializers.portfolio_serializer_no_user import PortfolioSerializerNoUser
from transaction.serializers.transaction_serializer_no_user import TransactionSerializerNoUser

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):

    transactions = TransactionSerializerNoUser(read_only=True, many=True)
    portfolios = PortfolioSerializerNoUser(read_only=True, many=True)

    class Meta:
        model = User
        fields = ['id',
                  'username',
                  'first_name',
                  'last_name',
                  'email',
                  'birth_date',
                  'gender',
                  'nationality',
                  'street',
                  'city',
                  'country',
                  'zip',
                  'portfolios',
                  'transactions',
                  'settings',
                  'created',
                  'is_superuser',
                  'is_staff',
                  'is_active',
                  'last_login',
                  'groups',
                  'user_permissions']
