# Generated by Django 5.0.6 on 2024-09-26 03:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calcalgo', '0004_imageupload_updated_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='imageupload',
            name='image',
            field=models.ImageField(upload_to='calcalgo/'),
        ),
    ]