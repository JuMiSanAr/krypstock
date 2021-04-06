from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveUpdateDestroyAPIView, CreateAPIView
from user.serializers.user_serializer_main import UserSerializer

User = get_user_model()


class MyUserView(RetrieveUpdateDestroyAPIView):
    '''
    GET: Get user profile.

    .
    PATCH/PUT: Update user profile.

    .
    DELETE: Delete user profile.

    .
    '''
    serializer_class = UserSerializer

    def get_object(self):
        return User.objects.get(id=self.request.user.id)
