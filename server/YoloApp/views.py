from django.http import JsonResponse
from django.views import View
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
import os
import json
from ultralytics import YOLO

# 加载 YOLOv8 模型
model = YOLO('yolov8s.pt')  # 你可以选择其他预训练模型或自己的模型

class YOLODetectView(View):
    def post(self, request, *args, **kwargs):
        # 检查是否有文件上传
        if 'file' not in request.FILES:
            return JsonResponse({'error': 'No file uploaded'}, status=400)

        # 获取上传的文件
        uploaded_file = request.FILES['file']

        # 保存文件到临时目录
        file_path = default_storage.save(uploaded_file.name, ContentFile(uploaded_file.read()))

        # 使用 YOLOv8 进行检测
        results = model(file_path)  # 输入文件路径

        # 将检测结果转换为 JSON 格式
        detections = json.loads(results.pandas().xyxy[0].to_json(orient='records'))

        # 删除临时文件
        os.remove(file_path)

        # 返回 JSON 响应
        return JsonResponse({
            'detections': detections
        })
