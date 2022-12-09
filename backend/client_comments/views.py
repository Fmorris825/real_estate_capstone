from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import Client_CommentSerializer
from .models import Client_Comment

# Create your views here.


@api_view(['GET', 'POST'])
def client_comment_library(request):
    if request.method == 'GET':
        comments = Client_Comment.objects.all()
        serializer = Client_CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = Client_CommentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.errors, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def get_client_comment_by_id(request, pk):
    comment = get_object_or_404(Client_Comment, pk=pk)
    if request.method == 'GET':
        serializer = Client_CommentSerializer(comment)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    elif request.method == 'PUT':
        serializer = Client_CommentSerializer(comment, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)