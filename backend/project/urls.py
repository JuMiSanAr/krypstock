"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework_simplejwt import views as jwt_views


urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/user/', include('user.urls')),
    path('api/auth/', include('signup.urls')),
    path('api/transactions/', include('transaction.urls')),
    path('api/portfolios/', include('portfolio.urls')),

    path('api/auth/token/', jwt_views.TokenObtainPairView.as_view()),
    path('api/auth/token/refresh/', jwt_views.TokenRefreshView.as_view()),
    path('api/auth/token/verify/', jwt_views.TokenVerifyView.as_view()),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
