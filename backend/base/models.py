from django.db import models

class ListOfFood(models.Model):
    name = models.CharField(max_length=250, default='')
    protein = models.DecimalField(max_digits=99, decimal_places=2, default=0)
    carbs = models.DecimalField(max_digits=99, decimal_places=2, default=0)
    fats = models.DecimalField(max_digits=99, decimal_places=2,default=0)
    
        
    def __str__(self):
        return self.name