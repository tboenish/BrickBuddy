from django.db import models

# Create your models here.

#Model for a Lego set
class LegoSet(models.Model):
    name = models.CharField(max_length=100)
    theme = models.CharField(max_length=100)
    pieces = models.IntegerField()
    year = models.IntegerField()

    def __str__(self):
        return self.name
