# myapp/models.py

from django.db import models
from django.utils.timezone import now
from rest_framework import serializers

class VisitRecord(models.Model):
    ip_address = models.GenericIPAddressField() 
    visit_time = models.DateTimeField(default=now) 

    def __str__(self):
        return f'Visit from {self.ip_address} at {self.visit_time}'



class VisitRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitRecord
        fields = ['ip_address', 'visit_time']
