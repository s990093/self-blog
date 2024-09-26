from django.db import models
from mdeditor.fields import MDTextField


class Post(models.Model):
    TYPE_CHOICES = [
        ('algorithm', '演算法'),
        ('blog', 'blog'),
        ('math', '數學'),
        ('other', '其他'),
    ]

    title = models.CharField(max_length=255, verbose_name="標題")
    photo = models.ImageField(upload_to='photos/', verbose_name="封面圖片", blank=True, null=True) 
    md_content = MDTextField(verbose_name="Markdown 內容") 
    type = models.CharField(max_length=20, choices=TYPE_CHOICES, verbose_name="類型")

    created_at = models.DateTimeField(auto_now_add=True, verbose_name="創建時間")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="更新時間")

    def __str__(self):
        return f'{self.title} ({self.type})'




class ImageUpload(models.Model):
    image = models.ImageField(upload_to='calcalgo/')
    description = models.TextField(blank=True)
    updated_at = models.DateTimeField(auto_now=True, verbose_name="更新時間")

    def __str__(self):
        return self.description or "Image Upload"
