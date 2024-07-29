from rest_framework import serializers
from .models import LegoSet

#Make a serializer to handle the LegoSet model for the catalog
class SetSerialzer(serializers.ModelSerializer):
    class Meta:
        model = LegoSet
        fields ='__all__'