from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .serializers import PropertySerializer
from .models import Property
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def property_library(request):
    if request.method == 'GET':
        properties = Property.objects.all()
        serializer = PropertySerializer(properties, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_property(request):
    if request.method == 'POST':
        serializer = PropertySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def get_property_by_id(request, pk):
    property = get_object_or_404(Property, pk=pk)
    if request.method == 'GET':
        serializer = PropertySerializer(property)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    elif request.method == 'PUT':
        serializer = PropertySerializer(property, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        property.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)