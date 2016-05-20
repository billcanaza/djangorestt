from django.shortcuts import render

from rest_framework import permissions, status, views, viewsets, parsers

from .models import Persona, Libro, Articulo

from .serializers import PersonaSerializer, LibroSerializer, ArticuloSerializer
from rest_framework import status
from rest_framework.response import Response



class Persona(viewsets.ModelViewSet):
	lookup_field = 'id'
	queryset = Persona.objects.all()
	serializer_class = PersonaSerializer

class Libro(viewsets.ModelViewSet):
	lookup_field = 'id'
	queryset = Libro.objects.all()
	serializer_class = LibroSerializer
"""
	def create(self, request):
		serialized = self.serializer_class(data=request.DATA)
        if serialized.is_valid():
            serialized.save()
            return Response(status=status.HTTP_202_ACCEPTED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
"""

class Articulo(viewsets.ModelViewSet):
	lookup_field = 'id'
	queryset = Articulo.objects.all()
	serializer_class = ArticuloSerializer