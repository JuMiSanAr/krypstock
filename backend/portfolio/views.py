from rest_framework.generics import CreateAPIView, DestroyAPIView, ListAPIView, RetrieveUpdateDestroyAPIView

from permissions.permissions import IsUserOrAdmin
from portfolio.models import Portfolio
from portfolio.serializers.portfolio_serializer_calculation import PortfolioSerializerWithCalculation
from portfolio.serializers.portfolio_serializer_main import PortfolioSerializer


class NewPortfolio(CreateAPIView):
    '''
    POST: Create a new portfolio.

    .
    '''
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class DeletePortfolio(DestroyAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer
    permission_classes = [IsUserOrAdmin]


class AllUserPortfolios(ListAPIView):
    '''
    GET: List all portfolios from the user.

    .
    '''
    serializer_class = PortfolioSerializerWithCalculation

    def get_queryset(self):
        return Portfolio.objects.filter(user=self.request.user).order_by('-id')


class SinglePortfolio(RetrieveUpdateDestroyAPIView):
    '''
    GET: Get a single portfolio from the user.

    .
    PATCH: Update a single portfolio from the user.

    .
    DELETE: Delete a single portfolio from the user.

    .
    '''
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializerWithCalculation
    permission_classes = [IsUserOrAdmin]
