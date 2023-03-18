from django.contrib import admin

from .models import ActiveSubscription, Movie, Subscription, SubscriptionImage, Viewer, WatchListMovie


@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    title = 'movie'
    parameter_name = 'movie'


@admin.register(Subscription)
class SubscriptionAdmin(admin.ModelAdmin):
    title = 'subscription'
    parameter_name = 'subscription'


@admin.register(SubscriptionImage)
class SubscriptionImageAdmin(admin.ModelAdmin):
    title = 'subscription image'
    parameter_name = 'subscription_image'


@admin.register(ActiveSubscription)
class ActiveSubscriptionAdmin(admin.ModelAdmin):
    title = 'active subscription'
    parameter_name = 'active_subscription'


@admin.register(WatchListMovie)
class WatchListMovieAdmin(admin.ModelAdmin):
    title = 'watch list movie'
    parameter_name = 'watch_list_movie'


@admin.register(Viewer)
class ViewerAdmin(admin.ModelAdmin):
    title = 'viewer'
    parameter_name = 'viewer'

    # resource_class = BookResource
    # fieldsets = (
    #     ("general", {"fields": ("title", "author", "library")}),
    #     ("other", {"fields": ("genre", "summary", "isbn", "published_on")}),
    # )
    # list_filter = ("title",)
    #
    # # Render filtered options only after 5 characters were entered
    # filter_input_length = {
    #     "title": 5,
    # }
