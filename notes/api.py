from rest_framework import viewsets, permissions

from .models import Note
from .serializers import NoteSerializer

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    permission_classes = [permissions.AllowAny, ] # GET, POST, DELETE ...
    serializer_class = NoteSerializer