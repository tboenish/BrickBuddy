from django.shortcuts import render
import requests
from django.http import JsonResponse
from django.conf import settings
from datetime import date

apiKey = '62f73cf71cd1cf8db0e9419c91cd40d0'
#https://rebrickable.com/api/v3/lego/sets/?key=62f73cf71cd1cf8db0e9419c91cd40d0&page_size=25&theme_id=158&min_year=2010&max_year=2015&min_parts=10&ordering=min_year
#https://rebrickable.com/api/v3/lego/sets/?key={apiKey}&page_size=25&theme_id=158&min_year={year-3}&max_year={year}&min_parts=10&ordering=min_year

def fetchSetByTheme(request, theme_name):
    year = date.today().year

    if theme_name == 'starwars':
        url = f'https://rebrickable.com/api/v3/lego/sets/?key={apiKey}&page_size=25&theme_id=158&min_year={year-3}&max_year={year}&min_parts=10&ordering=min_year'
        response = requests.get(url)
        data = response.json()
        return JsonResponse(data)
    else:
        return JsonResponse({"error": "Theme not found"},status=404)
    





