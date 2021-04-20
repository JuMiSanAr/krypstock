from django.urls import path

from signup.views import NewRegistrationView, ValidationView, PasswordResetView, PasswordResetValidationView

urlpatterns = [
    path('registration/', NewRegistrationView.as_view()),
    path('registration/validate/', ValidationView.as_view()),
    path('password-reset/', PasswordResetView.as_view()),
    path('password-reset/validate/', PasswordResetValidationView.as_view()),
]
