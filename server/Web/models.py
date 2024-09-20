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
    title = models.CharField(max_length=255, verbose_name="部落格的标题")  # Blog title
    bug_detail = MDTextField(verbose_name="部落格详情")  # Markdown field for blog details
    blog_type = models.ForeignKey('BlogType', on_delete=models.CASCADE, verbose_name="部落格类型")  # Make blog_type required
    preview_image = models.ImageField(upload_to='previews/', null=True, blank=True, verbose_name="部落格预览图片")  # Optional blog preview image

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "部落格管理"
        verbose_name_plural = "部落格管理"

class VisitRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitRecord
        fields = ['ip_address', 'visit_time']
        
        

