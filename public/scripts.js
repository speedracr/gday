console.log(Mapster.MAP_OPTIONS);
console.log("Scripts!");
console.log(pics.length);

(function (window, google, Mapster) {
  options = window.Mapster.MAP_OPTIONS,
  element = document.getElementById('map'),
  map = Mapster.create(element, options);
  pics.forEach(function(pic){
    map.addMarker(pic.lat, pic.lng, pic.icon);
  });
  //map.addMarker(37.791350, -122.435883, 'http://i.imgur.com/TaSF0Yk.png');
  //map = new google.maps.Map(element, options);

}(window, google, window.Mapster || (window.Mapster = {})));

