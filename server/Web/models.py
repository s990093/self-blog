# myapp/models.py

from django.db import models
from django.utils.timezone import now
from rest_framework import serializers
from mdeditor.fields import MDTextField

class VisitRecord(models.Model):
    ip_address = models.GenericIPAddressField() 
    visit_time = models.DateTimeField(default=now) 

    def __str__(self):
        return f'Visit from {self.ip_address} at {self.visit_time}'


class BlogType(models.Model):
    """
    该模型用于存储用户自定义的部落格类型
    """
    name = models.CharField(max_length=100, unique=True)  # 部落格类型的名称

    def __str__(self):
        return self.name

class BugManage(models.Model):
    title = models.CharField(max_length=255)  # 部落格的标题
    bug_detail = MDTextField()  # 使用 MDTextField 作为 Markdown 编辑器字段
    blog_type = models.ForeignKey(BlogType, on_delete=models.SET_NULL, null=True, blank=True)  # 关联到自定义部落格类型

    def __str__(self):
        return self.title

class VisitRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitRecord
        fields = ['ip_address', 'visit_time']
        
        

