import time
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from django.utils.timezone import now
from rich.console import Console

class RecordVisitView(APIView):
    def get(self, request, format=None):
        # Retrieve all visit records and serialize them
        visits = VisitRecord.objects.all()
        serializer = VisitRecordSerializer(visits, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
                                                                    
    def post(self, request, format=None):
        # 獲取 rich Console 實例
        console = Console()

        # 獲取 IP 地址
        ip_address = request.META.get('REMOTE_ADDR', 'unknown')

        # 檢查是否是本地 IP 地址
        if ip_address == '127.0.0.1' or ip_address == '::1':
            console.print(f"[bold green]IP Address:[/bold green] {ip_address} (Local IP, not recorded)")
            return Response({"detail": "Local IP, not recorded"}, status=status.HTTP_200_OK)

        # 如果不是本地 IP，打印出 IP 地址
        console.print(f"[bold blue]IP Address:[/bold blue] {ip_address}")
        visit_record = VisitRecord(ip_address=ip_address)
        visit_record.save()
        return Response({"ip_address": ip_address}, status=status.HTTP_200_OK)