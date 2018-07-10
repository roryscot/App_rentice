#This will serve the serialized JSON to the frontend

from rest_framework import viewsets, permissions


from .serializers import GroupListSerializer, CardGroupSerializer, CardSerializer
from .models import GroupList, CardGroup, Card

class GroupListViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    queryset = GroupList.objects.all()
    serializer_class = GroupListSerializer

    def get_queryset(self):
        return self.queryset

    def perform_create(self, serializer):
        serializer.save()

class CardGroupViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    queryset = CardGroup.objects.all()
    serializer_class = CardGroupSerializer

    def get_queryset(self):
        return self.queryset

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CardViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    queryset = Card.objects.all()
    serializer_class = CardSerializer

    def get_queryset(self):
        return self.queryset

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    # def perform_update(self, serializer):
    #     serializer.save(owner=self.request.user)


