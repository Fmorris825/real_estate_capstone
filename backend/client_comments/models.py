from django.db import models

# Create your models here.
class Client_Comment(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=None, min_length=None, allow_blank=False)
    inquiry = models.CharField(max_length=255)