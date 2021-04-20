from django.urls import path

from transaction.views import NewTransaction, AllUserTransactions, SingleTransaction

urlpatterns = [
    path('', AllUserTransactions.as_view()),
    path('<int:pk>/', SingleTransaction.as_view()),
    path('new/', NewTransaction.as_view()),
]