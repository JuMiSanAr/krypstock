from django.urls import path

from portfolio.views import NewPortfolio, DeletePortfolio, AllUserPortfolios, SinglePortfolio

urlpatterns = [
    path('', AllUserPortfolios.as_view()),
    path('<int:pk>/', SinglePortfolio.as_view()),
    path('new/', NewPortfolio.as_view()),
    path('delete/<int:pk>/', DeletePortfolio.as_view()),
]