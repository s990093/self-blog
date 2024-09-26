from django.urls import path
from . import views

app_name = "calcalgo"

from django.urls import path
from . import views

urlpatterns = [
    path('img/upload', views.upload_image, name='upload_image'),

    path('posts/', views.PostList.as_view(), name='post-list'),
    path('posts/<int:pk>/', views.PostDetail.as_view(), name='post-detail'),
]
