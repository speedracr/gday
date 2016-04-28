# A Sinatra app to search... Instagram..?

## GOALS
* Show web development with Sinatra
* Search Instagram for a user name and return last 25 pictures
* Throw picture info onto a view
* Add Google Maps (if there is indeed geo information attached to
  Instagram pics) and drop markers on map for each photo
* Additional difficulty: Preview picture thumbnail instead of pin
  marker.

## WIP
**Done**
* Sinatra loads
* We have ENV variables

**Next**
* Get Instagram keys.
* Get an Instagram search going on the tux console.

## API query
Results are returned as Hashie hashes:
`client.user_recent_media.first.images.standard_resolution.url`
`client.user_recent_media.first.location`
