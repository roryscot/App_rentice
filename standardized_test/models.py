from django.db import models
from django.contrib.auth.models import User

class ACT_Section(models.Model):
    ANSWER_CHOICES = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
    questions=models.IntegerField()
    answers=models.CharField(
        max_length=1,
        choices=ANSWER_CHOICES,
    )



class ACT(models.Model):
    sections = models.ForeignKey(ACT_Section)
    owner = models.ForeignKey(User, related_name="test", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text
