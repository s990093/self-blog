from django.urls import path
from . import views

app_name = "Web"

from django.urls import path
from . import views

urlpatterns = [
    path('record_visit/', views.RecordVisitView.as_view(), name='record_visit'),
    path('bugs/ids/', views.BugManageIDList.as_view(), name='get_all_bug_ids'),
    
    # 根据 id 获取 BugManage 详细信息
    path('bugs/detail/<int:bug_id>/', views.BugManageDetail.as_view(), name='get_bug_detail_by_id'),
]
