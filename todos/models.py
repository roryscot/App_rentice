from django.db import models
from django.utils import timezone

class GroupList(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    group_list_title = models.CharField(max_length=100)

    def __str__(self):
        return self.group_list_title

class CardGroup(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    card_group_title = models.CharField(max_length=75)

    grouplist = models.ForeignKey(GroupList, related_name="groups", on_delete="cascade")
    def __str__(self):
        return "{}".format(self.card_group_title)

class Card(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    card_title = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    complete = models.BooleanField(default=False)
    due_date = models.DateField(default=timezone.now)

    card_group = models.ForeignKey(CardGroup, related_name="cards", on_delete="cascade")

    story_points = models.IntegerField(null=True, blank=True)
    business_value = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return "Task: {}".format(self.card_title)

# class HomeworkList

# class tests