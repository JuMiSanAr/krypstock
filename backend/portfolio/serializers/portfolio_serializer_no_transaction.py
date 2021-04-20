from django.contrib.auth import get_user_model
from rest_framework import serializers

from portfolio.models import Portfolio

User = get_user_model()


class PortfolioSerializerNoTransaction(serializers.ModelSerializer):

    class Meta:
        model = Portfolio
        fields = ['id', 'name', 'created', 'description']
