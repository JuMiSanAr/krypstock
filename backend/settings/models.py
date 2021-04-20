from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Settings(models.Model):

    light_theme = models.BooleanField(default=True)

    user = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name='settings', null=True)
