from django.db import models

# Create your models here.

class Property(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    listing_price = models.IntegerField()
