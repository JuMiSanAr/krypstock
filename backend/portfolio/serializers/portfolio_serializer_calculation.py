from rest_framework import serializers
import numpy as np

from portfolio.models import Portfolio
from transaction.serializers.transaction_serializer_no_portfolio import TransactionSerializerNoPortfolio


class PortfolioSerializerWithCalculation(serializers.ModelSerializer):

    transactions = TransactionSerializerNoPortfolio(read_only=True, many=True)

    calculations = serializers.SerializerMethodField()

    def get_calculations(self, instance):
        transactions = np.array(instance.transactions.all())

        unique_symbols = []

        for transaction in transactions:
            if transaction.symbol not in unique_symbols:
                unique_symbols.append(transaction.symbol)

        results = []

        for symbol in unique_symbols:
            total_paid = 0
            number_bought = 0

            for transaction in transactions:
                if transaction.symbol == symbol and transaction.buy_sell == 'B':
                    total_paid += float(transaction.quantity) * float(transaction.price)
                    number_bought += float(transaction.quantity)
                elif transaction.symbol == symbol and transaction.buy_sell == 'S':
                    total_paid -= float(transaction.quantity) * float(transaction.price)
                    number_bought -= float(transaction.quantity)

            if number_bought > 0:
                this_average = total_paid / number_bought

                results.append({'symbol': symbol,
                                'total_invested': total_paid,
                                'quantity': number_bought,
                                'average_price': this_average})
        return results

    class Meta:
        model = Portfolio
        fields = ['id', 'name', 'description', 'transactions', 'calculations']
