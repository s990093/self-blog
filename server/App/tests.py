import unittest
import requests
import threading
import time
from io import BytesIO

class StressTest(unittest.TestCase):
    def setUp(self):
        # 设置后端 API 的 URL
        self.api_url = "http://127.0.0.1:8000/app/"  # 修改为后端 API 的地址
        self.api_url = "http://49.213.238.75:8000/app/"
        self.headers = {"Content-Type": "multipart/form-data"}

        # 读取测试图像文件的二进制数据
        with open("./App/test.png", "rb") as f:  # 修改为图像文件的路径
            self.image_data = BytesIO(f.read())  # 读取图像数据

    def send_request(self, image_data):
        """发送 POST 请求"""
        files={'file': open('./App/test.png','rb')}

        # files = {"file": ("test.jpg", image_data, "image/jpeg")}  # 包含图像数据
        response = requests.post(self.api_url, files=files)

        return response

    def test_stress(self):
        """压力测试：每 0.1 秒发送一次请求，共计 100 次"""
        # 初始化响应时间列表
        response_times = []

        # 定义一个发送请求的函数
        def send_requests():
            for _ in range(200):
                start_time = time.time()
                response = self.send_request(self.image_data)  # 使用图像数据
                
                print(f"{_} / {response.status_code}")
                end_time = time.time()
                response_times.append(end_time - start_time)
                time.sleep(0.1)  # 等待 0.1 秒

        # 创建并启动线程
        stress_thread = threading.Thread(target=send_requests)
        stress_thread.start()
        stress_thread.join()  # 等待线程完成

        # 分析结果
        total_requests = len(response_times)
        average_response_time = sum(response_times) / total_requests
        max_response_time = max(response_times)

        # 打印结果
        print(f"Total requests: {total_requests}")
        print(f"Average response time: {average_response_time:.2f} seconds")
        print(f"Maximum response time: {max_response_time:.2f} seconds")

        # 确保没有错误
        self.assertEqual(total_requests, 200, "Not all requests were sent.")
