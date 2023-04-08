from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ListOfFoodSerializer
from .models import ListOfFood

@api_view(["POST"]) 
def addFood(request):
    serializer = ListOfFoodSerializer(data=request.data)  

    if serializer.is_valid():
        food = serializer.save()

        response_data = {
            "id": food.id,
            "name": food.name,
            "protein": food.protein,
            "carbs": food.carbs,
            "fats": food.fats
        }
        return Response(response_data)
    else:
        return Response(serializer.errors)

@api_view(["GET"])   
def get_foods(request):
    foods = ListOfFood.objects.all()
    serializer = ListOfFoodSerializer(foods, many=True)
    return Response(serializer.data)
