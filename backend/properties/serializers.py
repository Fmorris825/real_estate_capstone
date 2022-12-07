from rest_framework import serializers
from .models import Property

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ['id', 'address', 'description', 'listing_price', 'photo']
        # depth = 1
