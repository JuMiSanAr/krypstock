from rest_framework import serializers
from signup.models import SignUp


class SignUpSerializer(serializers.ModelSerializer):

    class Meta:
        model = SignUp
        fields = '__all__'
        read_only_fields = ['code']
