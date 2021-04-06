from django.contrib.auth import get_user_model
from django.db import models

from portfolio.models import Portfolio

User = get_user_model()


class Transaction(models.Model):

    BUYSELL_CHOICES = [
        ('B', 'Buy'),
        ('S', 'Sell')
    ]

    buy_sell = models.CharField(max_length=1, choices=BUYSELL_CHOICES, default='B')

    symbol = models.CharField(max_length=10)

    cost = models.CharField(max_length=20, blank=True)
    quantity = models.CharField(max_length=20)
    price = models.CharField(max_length=20)

    exec_time = models.DateTimeField(auto_now_add=True)

    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='transactions')
    portfolio = models.ForeignKey(to=Portfolio, on_delete=models.CASCADE, related_name='transactions')

    def __str__(self):
        return f'#{self.id} by {self.user} in portfolio {self.portfolio}'
