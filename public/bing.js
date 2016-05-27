function loadMapScenario() {
  var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
      credentials: 'Your Bing Maps Key'
  });
  Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
      var searchManager = new Microsoft.Maps.Search.SearchManager(map);
      var requestOptions = new Microsoft.Maps.Search.GeocodeRequestOptions();
      requestOptions.bounds = map.getBounds();
      requestOptions.where = 'Seattle';
      requestOptions.callback = function (answer, userData) {
          map.setView({ bounds: answer.results[0].bestView });
          map.entities.push(new Microsoft.Maps.Pushpin(answer.results[0].location));
      };
      searchManager.geocode(requestOptions);
  });
}
