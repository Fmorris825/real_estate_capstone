from rest_framework import serializers
from .models import Client_Comment

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Client_CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client_Comment
        fields = ['id', 'first_name', 'last_name', 'email', 'inquiry']

