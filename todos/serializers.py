from rest_framework import serializers

from .models import GroupList, CardGroup, Card


class CardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Card
        fields = '__all__'


class CardGroupSerializer(serializers.ModelSerializer):
    cards = CardSerializer(read_only=True, many=True)

    class Meta:
        model = CardGroup
        fields = '__all__'


class GroupListSerializer(serializers.ModelSerializer):
    groups = CardGroupSerializer(read_only=True, many=True)
    cards = CardSerializer(read_only=True, many=True)


    class Meta:
        model = GroupList
        fields = '__all__'
