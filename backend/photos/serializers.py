from rest_framework import serializers
from .models import Photo

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ['id', 'photo_url', 'property', 'user']
        depth = 1

