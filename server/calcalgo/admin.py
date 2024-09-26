from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import *

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'type', 'created_at', 'photo_preview')  # 顯示的字段
    list_filter = ('type', 'created_at')
    search_fields = ('title', 'md_content')
    ordering = ('-created_at',)

    def photo_preview(self, obj):
        if obj.photo:
            return mark_safe(f'<img src="{obj.photo.url}" style="max-height: 100px;" />')
        return ""
    photo_preview.allow_tags = True
    photo_preview.short_description = '封面圖片預覽'



@admin.register(ImageUpload)
class ImageUploadAdmin(admin.ModelAdmin):
    list_display = ('id', 'description', 'image_display', 'image_url',)
    search_fields = ('description',)

    def image_display(self, obj):
        """显示图像的缩略图"""
        if obj.image:
            return mark_safe(f'<img src="{obj.image.url}" style="max-height: 100px;" />')
        return ""
    
    def image_url(self, obj):
        """显示图像的完整 URL 和复制按钮"""
        if obj.image:
            # 构建完整的 URL
            base_url = f"http://localhost:8000"  # 您可以根据需要更改此值
            full_url = f"{base_url}{obj.image.url}"
            return mark_safe(f'''
                <div>
                    <button onclick="copyToClipboard('{full_url}')">copy</button>
                </div>
                <script>
                    function copyToClipboard(url) {{
                        navigator.clipboard.writeText(url).then(function() {{
                            alert('URL 已复制到剪贴板！');
                        }}, function(err) {{
                            console.error('无法复制 URL:', err);
                        }});
                    }}
                </script>
            ''')
        return "无图像"

    image_display.short_description = '缩略图'
    image_url.short_description = 'full URL'