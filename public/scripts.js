console.log(Mapster.MAP_OPTIONS);
console.log("Scripts!");

(function (window, google, mapster) {
  options = window.Mapster.MAP_OPTIONS,
  element = document.getElementById('map'),
  map = new google.maps.Map(element, options);

}(window, google, window.Mapster || (window.Mapster = {})));

