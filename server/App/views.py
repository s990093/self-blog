import json
import os
from django.shortcuts import get_object_or_404
import torch
import io
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
# from asgiref.sync import async_to_sync
# from channels.layers import get_channel_layer


from Web.consumers import *
from .models import *

# rich
from rich import pretty
from rich import print,print_json
from rich.console import Console
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

pretty.install()
console = Console()

# # 加载 YOLOv8 模型
# try:
#     model = YOLO('yolov8s.pt')  # 确保路径正确
#     console.log("yolov8s.pt ok")
# except Exception as e:
#     raise Exception(f"Error loading YOLO model: {str(e)}")


class AppAPIView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    
    def get(self, request):

    #     # 调用 YourConsumer 中的 send_person_notification 方法发送通知给订阅者
    #     # 创建 YourConsumer 实例
        
    #     # 调用 send_person_notification 方法，将识别到的人数作为参数传递
    #     number_of_people = 5

    # # 获取通道层对象
    #     channel_layer = get_channel_layer()

    #     # 构建消息
    #     message = {
    #         'type': 'send_person_notification',
    #         'message': {'person': number_of_people}
    #     }

    #     # 向组发送消息
    #     async_to_sync(channel_layer.group_send)('test', message)
        # message = {'person': 10}  # Example message
        # YourConsumer().send_person_notification(message)
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
        "chat",  # 这是一个群组名，用于广播消息给所有连接的WebSocket客户端
        {
            'type': 'chat.message',
            'message': 'Hello, world!'
        }
    )
        return JsonResponse({'message': 'Notification sent successfully.'})
    
    
    def post(self, request, *args, **kwargs):
        people_count = int(request.POST.get('people_count'))
       
        console.print(f"people_count -> {people_count}")
       
            # rules
        if people_count > 0:
            id = 1
            obj = SolarDeviceData.objects.get(id=id)
            obj.people_count = people_count
            
            if people_count > 2:
                obj.is_sprinkling = True
            else:
                if obj.is_sprinkling == True:
                    obj.is_sprinkling = False
                
            obj.save()
            
            
            
            
            
        return JsonResponse({
            'message': 'Latest photo retrieved successfully',
        })
        
         
        
        
        
        
class SolarDeviceAPIView(APIView):
        def get(self, request, id: int, *args, **kwargs):
            # 获取与特定设备 ID 相关的数据
            try:
                # 获取最新的设备数据
                device_data = SolarDeviceData.objects.filter(device_id=id).order_by('-timestamp').first()

                if not device_data:
                    # 如果找不到数据，返回 404 错误
                    return Response({"error": "No data found for this device"}, status=status.HTTP_404_NOT_FOUND)

                # 使用序列化器将数据转换为 JSON
                serializer = SolarDeviceDataSerializer(device_data)
                
                # 返回 JSON 响应
                return Response(serializer.data, status=status.HTTP_200_OK)

            except Exception as e:
                console.log(str(e))
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
            
            
class IpadAPIView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            device_data = SolarDeviceData.objects.all().order_by("timestamp").values()

            if not device_data.exists():
                return Response({"error": "No data found for this device"}, status=status.HTTP_404_NOT_FOUND)

            serializer = IpadSerializer(device_data, many=True)
            return Response(data=serializer.data)

        except Exception as e:
            console.print_exception(e)
            return Response({"error": "Internal server error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            