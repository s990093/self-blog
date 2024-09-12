from django.urls import path
from . import views

app_name = "Web"

from django.urls import path
from . import views

urlpatterns = [
    path('record_visit/', views.RecordVisitView.as_view(), name='record_visit'),
]
