from django.db import models
from rest_framework import serializers
# 存储照片的模型
class PostPhoto(models.Model):
    photo = models.ImageField(upload_to='post_photos/')  # 指定照片上传目录

    def __str__(self):
        return f"Photo: {self.photo.name}"

class SolarDeviceData(models.Model):
    # 太阳能设备的ID
    device_id = models.IntegerField(unique=True)  # 如果设备ID与其他模型关联，可改为ForeignKey
    
    # 记录数据的时间戳
    timestamp = models.DateTimeField(auto_now_add=True)  # 自动记录创建时间
    
    # 太阳能设备相关数据
    location = models.CharField(default="建功高科大", max_length=50)
    electricity = models.FloatField(default=0.0)  # 电量，浮点数
    humidity = models.FloatField(default=0)  # 湿度，浮点数
    people_count = models.IntegerField(default=0)  # 人数，整数
    is_sprinkling = models.BooleanField(default=False)  # 是否灑水，布尔值
    
    def __str__(self):
        return f"Device {self.device_id} Data at {self.timestamp}"
# 序列化类
class PostPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostPhoto
        fields = ['photo'] 


class SolarDeviceDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SolarDeviceData
        fields = ['is_sprinkling'] 



class IpadSerializer(serializers.ModelSerializer):
    class Meta:
        model = SolarDeviceData
        fields =  '__all__'



class ArduinoData(models.Model):
    device_id = models.IntegerField(unique=True)  # 如果设备ID与其他模型关联，可改为ForeignKey
    brightness = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)
    


class ArduinoDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArduinoData
        fields = ('device_id', 'brightness', 'timestamp')
