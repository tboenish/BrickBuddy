from django.shortcuts import render
import requests
from django.http import JsonResponse
from django.conf import settings
from datetime import date


apiKey = '62f73cf71cd1cf8db0e9419c91cd40d0'#This is bad practice but fine for my purposes

#Dict to hold themes and their ID's which get passed in the API url
themeMap={
    'architecture': 252,'batman': 697,'brickheadz': 610,'city': 52,'classic': 621,'creator-3-in-1': 672,'creator-expert': 673,
    'super-heroes-dc': 695,'despicable-me-4': 763,'disney':754,'dots':688,'duplo':504,'friends':216,'harry-potter': 710,'ideas':576,
    'jurassic-world':602,'animal-crossing':752,'lego-art':709,'avatar': 724,'dreamzzz':749,'fortnite':766,'gabbys-dollhouse':748,
    'icons':721,'indiana-jones':264,'super-mario': 690,'the-legend-of-zelda': 754,'the-lord-of-the-rings':566,'marvel':207,
    'minecraft':577,'monkie-kid':693,'ninjago':435,'powered-up':655,'sonic-the-hedgehog':747,
    'speed-champions':601,'spider-man':706,'star-wars':158,'technic':1,

}

#Function for returning sets to the user filtered by theme and date
def fetchSetByTheme(request, theme_name):
    if theme_name not in themeMap:
        return JsonResponse({"Error": "Theme not found"},status =404)
    
    year = date.today().year#Get the current date

    themeID = themeMap[theme_name] #Get the theme ID which is the ID passed in the featch request
    
    #Use the url for Rebrickable API passing the key and the themeID to return the data
    url = f'https://rebrickable.com/api/v3/lego/sets/?key={apiKey}&page_size=40&theme_id={themeID}&min_year={year}&max_year={year}&min_parts=10&ordering=-num_parts'
    try:
        response = requests.get(url)#Get request to the API
        data = response.json()
        return JsonResponse(data)
    except requests.exceptions.RequestException as e:
        return JsonResponse({"Error": f"API Request Failed: {str(e)}" },status = 500)


 
    





