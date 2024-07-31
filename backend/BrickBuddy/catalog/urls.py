from django.urls import path
from .views import fetchSetByTheme

urlpatterns = [
    path('api/legosets/<str:theme_name>/',fetchSetByTheme,name='setsByTheme')
]