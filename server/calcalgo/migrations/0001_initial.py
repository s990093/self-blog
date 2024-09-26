# Generated by Django 5.0.6 on 2024-09-26 01:33

import mdeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='標題')),
                ('photos', models.JSONField(blank=True, null=True, verbose_name='照片列表')),
                ('md_content', mdeditor.fields.MDTextField(verbose_name='Markdown 內容')),
                ('type', models.CharField(choices=[('algorithm', '演算法'), ('math', '數學'), ('other', '其他')], max_length=20, verbose_name='類型')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='創建時間')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='更新時間')),
            ],
        ),
    ]
