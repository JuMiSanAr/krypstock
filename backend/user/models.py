from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    # Field used for authentication
    USERNAME_FIELD = 'email'

    # Additional fields required when using createsuperuser (USERNAME_FIELD and passwords are always required)
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)

    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other')
    ]

    birth_date = models.CharField(max_length=50, blank=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default='M', blank=True)
    nationality = models.CharField(max_length=50, blank=True)

    street = models.CharField(max_length=50, blank=True)
    city = models.CharField(max_length=50, blank=True)
    country = models.CharField(max_length=50, blank=True)
    zip = models.CharField(max_length=10, blank=True)

    created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return f'{self.username} - {self.email}'
