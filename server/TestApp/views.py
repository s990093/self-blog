# import json
# import os
# from django.shortcuts import get_object_or_404
# import torch
# import io
# from django.http import JsonResponse
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from django.core.files.storage import default_storage
# from django.core.files.base import ContentFile
# from rest_framework.parsers import MultiPartParser, FormParser
# from rest_framework import status

# from .models import *

# # rich
# from rich import pretty
# from rich import print,print_json
# from rich.console import Console

# pretty.install()
# console = Console()




# # 加载 YOLOv8 模型
# # try:
# #     model = YOLO('yolov8s.pt')  # 确保路径正确
# #     console.log("yolov8s.pt ok")
# # except Exception as e:
# #     raise Exception(f"Error loading YOLO model: {str(e)}")


# class AppAPIView(APIView):
#     # parser_classes = (MultiPartParser, FormParser)
#     def get(self, request):
#         return JsonResponse({
#             'message': 'Latest photo retrieved successfully',
#         })       
         
        
#     def post(self, request, *args, **kwargs):
            
#         return JsonResponse({
#             'message': 'Latest photo retrieved successfully',
#         })
        
         
        
        
        
        
