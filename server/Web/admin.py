from django.contrib import admin
from .models import VisitRecord
from django.db.models import Count

class VisitRecordAdmin(admin.ModelAdmin):
    list_display = ('ip_address', 'visit_time')  # Add your custom method here
    list_filter = ('visit_time',)  # Add filters
    search_fields = ('ip_address',)  # Add search fields

admin.site.register(VisitRecord, VisitRecordAdmin)
