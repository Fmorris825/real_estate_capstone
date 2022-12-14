from django.db import models
from properties.models import Property
from authentication.models import User

# Create your models here.


class Photo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    photo_url = models.CharField(max_length=255)
    property = models.ForeignKey(Property, on_delete=models.CASCADE)