# blog/serializers.py
from rest_framework import serializers
from .models import *

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'photo', 'type', 'created_at']



class UploadPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['title', 'photo', 'md_content', 'type']

class PostDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'photo','md_content', 'type', 'created_at']



class ImageUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageUpload
        fields = ['image', 'description']