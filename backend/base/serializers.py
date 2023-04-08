from rest_framework import serializers

from .models import ListOfFood

class ListOfFoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListOfFood
        fields = '__all__'
