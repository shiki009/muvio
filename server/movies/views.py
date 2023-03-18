from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import ActiveSubscription, Movie, Viewer, WatchListMovie
from .serializers import ActiveSubscriptionsSerializer, MovieSerializer, ViewerSerializer, WatchListMovieSerializer


@csrf_exempt
def movies_list(request):
    """
    List all movies, or create a new movie.
    """
    if request.method == 'GET':
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def viewers_list(request):
    """
    List all viewers, or create a new viewer.
    """
    if request.method == 'GET':
        viewers = Viewer.objects.all()
        serializer = ViewerSerializer(viewers, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def watch_list_movies_list(request):
    """
    List all watch list movies, or create a new watch list movie.
    """
    if request.method == 'GET':
        watch_list_movies = WatchListMovie.objects.all()
        serializer = WatchListMovieSerializer(watch_list_movies, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def active_subscriptions_list(request):
    """
    List all active subscriptions, or create a new active subscription.
    """
    if request.method == 'GET':
        active_subscriptions = ActiveSubscription.objects.all()
        serializer = ActiveSubscriptionsSerializer(active_subscriptions, many=True)
        return JsonResponse(serializer.data, safe=False)
