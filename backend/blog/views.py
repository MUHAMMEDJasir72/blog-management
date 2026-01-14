from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.



def Test(request):
    print("called frontend")
    return HttpResponse("API called successfully")