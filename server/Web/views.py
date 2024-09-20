from rest_framework.generics import ListAPIView
from django.http import Http404, JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import BugManageSerializer
from .models import *
from django.utils.timezone import now
from rich.console import Console
from .models import BugManage



console = Console()

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR', 'unknown')
    return ip

class RecordVisitView(APIView):
    def get(self, request, format=None):
        # Retrieve all visit records and serialize them
        visits = VisitRecord.objects.all()
        serializer = VisitRecordSerializer(visits, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
                                                                    
    def post(self, request, format=None):
        # 獲取 rich Console 實例

        # 獲取 IP 地址
        ip_address = get_client_ip(request)
    
        # 檢查是否是本地 IP 地址
        # if ip_address == '127.0.0.1' or ip_address == '::1':
        #     console.print(f"[bold green]IP Address:[/bold green] {ip_address} (Local IP, not recorded)")
        #     return Response({"detail": "Local IP, not recorded"}, status=status.HTTP_200_OK)

        # 如果不是本地 IP，打印出 IP 地址
        console.print(f"[bold blue]IP Address:[/bold blue] {ip_address}")
        visit_record = VisitRecord(ip_address=ip_address)
        visit_record.save()
        return Response({"ip_address": ip_address}, status=status.HTTP_200_OK)


class BugManageIDList(ListAPIView):
    queryset = BugManage.objects.all()  # 获取所有 BugManage 实例
    serializer_class = BugManageSerializer  # 指定序列化器

    def get(self, request, *args, **kwargs):
        bugs = self.get_queryset()  # 获取所有 BugManage 实例
        serializer = self.get_serializer(bugs, many=True)  # 使用序列化器序列化数据
        return Response(serializer.data, status=status.HTTP_200_OK)
    
# 根据 id 返回特定 BugManage 实例的详细信息，包括 Markdown 内容
class BugManageDetail(APIView):
    def get_object(self, bug_id):
        try:
            return BugManage.objects.get(id=bug_id)
        except BugManage.DoesNotExist:
            raise Http404

    def get(self, request, bug_id):
        bug = self.get_object(bug_id)
        data = {
            "id": bug.id,
            "title": bug.title,
            "bug_detail": bug.bug_detail,  
            "blog_type": bug.blog_type.name if bug.blog_type else None
        }
        return Response(data, status=status.HTTP_200_OK)