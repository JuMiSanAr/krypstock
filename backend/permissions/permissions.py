from rest_framework.permissions import BasePermission


class IsUserOrAdmin(BasePermission):
    def has_object_permission(self, request, view, obj):
        if obj.user == request.user or request.user.is_superuser:
            return True
