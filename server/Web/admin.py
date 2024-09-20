from django import forms
from django.contrib import admin
from .models import BlogType, VisitRecord
from django.db.models import Count
from mdeditor.fields import MDTextFormField
from .models import BugManage

class VisitRecordAdmin(admin.ModelAdmin):
    list_display = ('ip_address', 'visit_time')  # Add your custom method here
    list_filter = ('visit_time',)  # Add filters
    search_fields = ('ip_address',)  # Add search fields

admin.site.register(VisitRecord, VisitRecordAdmin)



# 自定义表单，用于管理后台
class BugManageAdminForm(forms.ModelForm):
    bug_detail = MDTextFormField()  # 使用 MDTextFormField 作为 Markdown 编辑器字段

    class Meta:
        model = BugManage
        fields = '__all__'

# 自定义 Admin 类
class BugManageAdmin(admin.ModelAdmin):
    form = BugManageAdminForm  # 使用自定义表单

# 注册模型到 admin
admin.site.register(BugManage, BugManageAdmin)


admin.site.register(BlogType)  # 注册部落格类型模型
