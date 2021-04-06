from django.urls import path

from user.views import MyUserView

urlpatterns = [
    path('', MyUserView.as_view()),
]