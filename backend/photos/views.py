from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .serializers import PhotoSerializer
from .models import Photo
from properties.models import Property
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def photo_library(request):
    if request.method == 'GET':
        photos = Photo.objects.all()
        serializer = PhotoSerializer(photos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([AllowAny])
def photo_by_property(request,pk):
    property = Property.objects.get(id=pk)
    if request.method == 'GET':
        photos = Photo.objects.filter(property=property)
        serializer = PhotoSerializer(photos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_photo(request, pk):
    property = Property.objects.get(id=pk)
    if request.method == 'POST':
        serializer = PhotoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user, property_id=pk)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def get_photo_by_id(request, pk):
    photo = get_object_or_404(Photo, pk=pk)
    if request.method == 'GET':
        serializer = PhotoSerializer(photo)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    elif request.method == 'PUT':
        serializer = PhotoSerializer(photo, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        photo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)