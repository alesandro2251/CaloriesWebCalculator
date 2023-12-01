from django.urls import path
from . import views

urlpatterns = [
    path('foods-add/', views.addFood, name='addFoods'),
    path('foods/', views.get_foods, name='show-foods'),
    path('',views.index, name='index')
]
