from django.db import models

# Create your models here.


class Photo(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    photo_url = models.CharField(max_length=255)