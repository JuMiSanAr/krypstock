import random

from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.core.mail import send_mail
import os

# Create your views here.
from rest_framework import status
from rest_framework.generics import CreateAPIView, UpdateAPIView
from rest_framework.response import Response

from signup.models import SignUp
from signup.serializers.signup_serializer import SignUpSerializer

User = get_user_model()


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class NewRegistrationView(CreateAPIView):
    '''
    POST: Sends email with registration code and creates a new user.

    .
    '''
    serializer_class = SignUpSerializer
    permission_classes = []

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        perform_create = self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)

        if perform_create.status_code == 200:
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

        if perform_create.status_code == 400:
            return Response('A user already exists with this email', status=400, headers=headers)

        if perform_create.status_code == 401:
            return Response('New registration code sent', status=401, headers=headers)


    def perform_create(self, serializer):
        email = self.request.data["email"]
        code = code_generator()

        try:
            existing_user = User.objects.get(email=email)

            if existing_user.signup_profile.used:
                return Response(status=400)

            elif not existing_user.signup_profile.used:
                send_mail(
                    'Krypstock - Registration code',
                    f'Your registration code for Krypstock is : {code}',
                    os.environ.get('DEFAULT_FROM_EMAIL'),
                    [email],
                    fail_silently=False,
                )

                registration = SignUp.objects.get(user=existing_user)
                registration.code = code
                registration.save()

                return Response(status=401)

        except User.DoesNotExist:
            send_mail(
                'Krypstock - Registration code',
                f'Your new registration code for for Krypstock is : {code}',
                os.environ.get('DEFAULT_FROM_EMAIL'),
                [email],
                fail_silently=False,
            )
            new_user = User(email=email, username=code)
            new_user.save()

            serializer.save(code=code, user=new_user)
            return Response(status=200)


class ValidationView(UpdateAPIView):
    '''
    PATCH: Validates the code and completes the user profile.

    .
    '''
    serializer_class = SignUpSerializer
    permission_classes = []

    def patch(self, request, *args, **kwargs):
        passed_code = self.request.data["code"]
        user = User.objects.get(email=self.request.data["email"])
        registration = SignUp.objects.get(user=user)

        password1 = self.request.data["password1"]
        password2 = self.request.data["password2"]

        if passed_code == registration.code:
            if password1 == password2:
                registration.used = True
                registration.save()
                user.username = self.request.data["username"]
                user.password = make_password(self.request.data["password1"])
                user.save()
                return Response("Code matched successfully")
            else:
                return Response("Password1 didn't match password2", status=400)
        else:
            return Response("Code in request didn't match registration code for that email", status=401)


class PasswordResetView(UpdateAPIView):
    '''
    PATCH: Sends email with link to reset password.

    .
    '''
    serializer_class = SignUpSerializer
    permission_classes = []

    def patch(self, request, *args, **kwargs):
        try:
            user = User.objects.get(email=self.request.data['email'])
            data = {
                'code': code_generator(),
                'used': False,
                'action': 'PR',
                'email': request.data['email']
            }
            serializer = self.get_serializer(user.signup_profile, data=data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save(code=data['code'])
            send_mail(
                'Krypstock - Password reset code',
                f"Here is your code for resetting your Krypstock password {data['code']}",
                os.environ.get('DEFAULT_FROM_EMAIL'),
                [user.email],
                fail_silently=False,
            )
            return Response(status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({'error': 'Please enter a valid email'},
                            status=status.HTTP_400_BAD_REQUEST)


class PasswordResetValidationView(UpdateAPIView):
    '''
    PATCH: Validates password-reset code and updates password.

    .
    '''
    serializer_class = SignUpSerializer
    permission_classes = []

    def patch(self, request, *args, **kwargs):
        code_from_request = request.data['code']
        try:
            registration = SignUp.objects.get(code=code_from_request)
            user = registration.user
            is_code_used = registration.used

            if request.data['password1'] == request.data['password2'] and registration and not is_code_used:
                user.password = make_password(request.data['password1'])
                user.save()
                registration.used = True
                registration.save()
                return Response(status=status.HTTP_200_OK)
            elif request.data['password1'] != request.data['password2']:
                return Response({'error': 'The two passwords given must be identical'}, status=status.HTTP_400_BAD_REQUEST)
            elif is_code_used:
                return Response({'error': 'This code is already used'}, status=status.HTTP_400_BAD_REQUEST)
        except SignUp.DoesNotExist:
            return Response({'error': 'This code is invalid. Please, enter a valid code'},
                            status=status.HTTP_400_BAD_REQUEST)
