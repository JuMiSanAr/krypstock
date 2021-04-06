from django.contrib import admin

# Register your models here.
from transaction.models import Transaction

admin.site.register(Transaction)