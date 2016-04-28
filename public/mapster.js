(function(window, google) {
  var Mapster = (function() {
    function Mapster(element, opts) {
      this.gMap = new google.maps.Map(element, opts);
    }

    Mapster.prototype = {
      addMarker: function(lat, lng, icon) {
        this._createMarker(lat, lng, icon);
      },
      _createMarker: function(lat, lng, icon) {
        var opts = {
          position: {
            lat: lat,
            lng: lng
          },
          map: this.gMap,
          icon: icon
        };
        return new google.maps.Marker(opts);
      }
    };
    return Mapster
  }());

  Mapster.create = function(elements, opts) {
    return new Mapster(elements, opts);
  };

  window.Mapster = Mapster;

}(window, google))
