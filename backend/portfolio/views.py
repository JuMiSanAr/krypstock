import requests
from rest_framework.generics import CreateAPIView, DestroyAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response

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


class GetCryptoName(ListAPIView):
    '''
    GET: Get the name of a crypto symbol.

    '''

    # Fetch to external API and return response in endpoint

    def get(self, request, *args, **kwargs):
        symbol = kwargs['pk']
        response = requests.get(f"https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol={symbol}&CMC_PRO_API_KEY=4e360fa9-d8b1-4808-878a-68a47651ead2")
        data = response.json()
        name = data['data'][symbol]['name']
        description = data['data'][symbol]['description']
        url = data['data'][symbol]['urls']['website']
        return Response({'name': name, 'description': description, 'url': url})
