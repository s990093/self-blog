from rest_framework import serializers
from .models import BugManage

class BugManageSerializer(serializers.ModelSerializer):
    class Meta:
        model = BugManage
        fields = ['id', 'title', 'preview_image']
