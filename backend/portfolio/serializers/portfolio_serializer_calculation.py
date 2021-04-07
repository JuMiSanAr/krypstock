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
            this_symbol_transactions = [transaction for transaction in transactions if transaction.symbol == symbol]

            currently_invested = 0
            number_bought = 0
            balance = 0
            previous_balance = 0

            active_transactions = []

            for transaction in this_symbol_transactions:

                if transaction.active:
                    if transaction.buy_sell == 'B':
                        currently_invested += float(transaction.quantity) * float(transaction.price)
                        number_bought += float(transaction.quantity)
                        balance -= float(transaction.quantity) * float(transaction.price)
                    elif transaction.buy_sell == 'S':
                        currently_invested -= float(transaction.quantity) * float(transaction.price)
                        number_bought -= float(transaction.quantity)
                        previous_balance += float(transaction.quantity) * float(transaction.price)
                        balance += float(transaction.quantity) * float(transaction.price)
                    active_transactions.append(transaction)

                elif not transaction.active:
                    if transaction.buy_sell == 'B':
                        previous_balance -= float(transaction.quantity) * float(transaction.price)
                        balance -= float(transaction.quantity) * float(transaction.price)
                    elif transaction.buy_sell == 'S':
                        previous_balance += float(transaction.quantity) * float(transaction.price)
                        balance += float(transaction.quantity) * float(transaction.price)

            if number_bought > 0:
                this_average = currently_invested / number_bought

                results.append({'symbol': symbol,
                                'invested': currently_invested,
                                'quantity': number_bought,
                                'average_price': this_average,
                                'previous_balance': previous_balance})
            else:

                results.append({
                    'symbol': symbol,
                    'invested': 0,
                    'overall_balance': balance
                })

                for active_transaction in active_transactions:
                    active_transaction.active = False
                    active_transaction.save()

        return results

    class Meta:
        model = Portfolio
        fields = ['id', 'name', 'description', 'transactions', 'calculations']
