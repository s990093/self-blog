from django.urls import path
from . import views

app_name = "App"

urlpatterns = [
    path("d/<int:id>", views.SolarDeviceAPIView.as_view(), name="SolarDeviceAPIView"),
    path("ipad/", views.IpadAPIView.as_view(), name="IpadAPIView"),
    path("", views.AppAPIView.as_view(), name="AppAPIView"),
    ]
