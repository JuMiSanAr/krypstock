from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Portfolio(models.Model):

    name = models.CharField(max_length=70)
    description = models.CharField(max_length=255, blank=True)

    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='portfolios')

    def __str__(self):
        return f'#{self.id} owned by {self.user}'
