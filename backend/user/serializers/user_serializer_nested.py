from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializerNested(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id',
                  'username',
                  'first_name',
                  'last_name',
                  'email',
                  'birth_date',
                  'gender',
                  'nationality',
                  'street',
                  'city',
                  'country',
                  'zip',
                  'settings',
                  'created',
                  'is_superuser',
                  'is_staff',
                  'is_active',
                  'last_login',
                  'groups',
                  'user_permissions']
