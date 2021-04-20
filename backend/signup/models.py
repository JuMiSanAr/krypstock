from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class SignUp(models.Model):

    user = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name='signup_profile', null=True)

    code = models.CharField(
        help_text='random code used for registration and for password reset',
        max_length=15
    )

    used = models.BooleanField(default=False, blank=False)

    action = models.CharField(choices=[('R', 'registration'), ('PR', 'password reset')], max_length=2, default='R')

    def __str__(self):
        return f'Signup profile {self.pk}: {self.user.email}'
