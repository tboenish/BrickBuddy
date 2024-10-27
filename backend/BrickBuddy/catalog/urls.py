#URLs for the catalog app.
#It defines the routes (URLs) that are mapped to views within the app
from django.urls import path
from .views import fetchSetByTheme

urlpatterns = [
    #This url will pass the 'theme_name' to my function fetchSetByTheme which will make the API call
    path('api/legosets/<str:theme_name>/',fetchSetByTheme,name='setsByTheme')
]