import time
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from django.utils.timezone import now

class RecordVisitView(APIView):
    def get(self, request, format=None):
        # Retrieve all visit records and serialize them
        visits = VisitRecord.objects.all()
        serializer = VisitRecordSerializer(visits, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
                                                                    
    def post(self, request, format=None):
        
        # Create a new visit record
        ip_address = request.META.get('REMOTE_ADDR', 'unknown')
        visit_record = VisitRecord.objects.create(ip_address=ip_address, visit_time=now())
        serializer = VisitRecordSerializer(visit_record)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
