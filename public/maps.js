function loadMapScenario() {
  var map = new Microsoft.Maps.Map(document.getElementById('bingMap'), {
    credentials: 'AkM7PubDMHCToyretjxB5jKRdlptIU8LLeaU4dm1AsqZA0jNnrFejiynujGl7J2C'
  });
  Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
    var searchManager = new Microsoft.Maps.Search.SearchManager(map);
    var requestOptions = new Microsoft.Maps.Search.GeocodeRequestOptions();
    requestOptions.bounds = map.getBounds();
    requestOptions.where = 'Uhlandstrasse 175, 10719 Berlin, DE';
    requestOptions.callback = function (answer, userData) {
      console.log("hoho!");
      map.setView({ bounds: answer.results[0].bestView });
      map.entities.push(new Microsoft.Maps.Pushpin(answer.results[0].location));
    };
    searchManager.geocode(requestOptions);
  });


}
