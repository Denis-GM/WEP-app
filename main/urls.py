from django.urls import path, include
from django.contrib import admin

from . import views

urlpatterns = [
    path('', views.index, name='main'),
    path('login/', views.login, name='login'),
    path('accounts/', include('accounts.urls')),
    path('teacher/', include('teacher.urls')),
    path('student/', include('student.urls')),
    path('rating_table/', views.statistics, name='rating_table'),
]