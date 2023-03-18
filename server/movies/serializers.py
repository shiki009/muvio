from rest_framework import serializers


class MovieSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=False, allow_blank=True, max_length=255)
    year = serializers.IntegerField(required=False)
    runtime = serializers.IntegerField(required=False)


class ViewerSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    first_name = serializers.CharField(required=False, allow_blank=True, max_length=140)
    last_name = serializers.CharField(required=False, allow_blank=True, max_length=140)
    profession = serializers.CharField(required=False, allow_blank=True, max_length=140)
    email = serializers.EmailField(read_only=True)


class WatchListMovieSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    movie_title = serializers.CharField(source='movie.title')
    requested_by = serializers.CharField(source='requested_by.first_name')
    watch_it_together = serializers.BooleanField(read_only=True)
    # website = serializers.CharField(source='movie.website')


class ActiveSubscriptionsSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    subscription_name = serializers.CharField(source='subscription.name')
    subscription_description = serializers.CharField(source='subscription.description')
    subscription_price = serializers.CharField(source='subscription.price')
