from django.urls import path
from . import views
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', views.index, name='index'),
    path('admin/', admin.site.urls),
    path('', include('chat.urls')),
]
