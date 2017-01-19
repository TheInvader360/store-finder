// Store locator with customisations
// - custom marker
// - custom info window (using Info Bubble)
// - custom info window content

var ICON = new google.maps.MarkerImage('location.png', null, null, new google.maps.Point(16, 16));

google.maps.event.addDomListener(window, 'load', function() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: new google.maps.LatLng(54.003644, -2.547859),
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var panelDiv = document.getElementById('panel');

  var data = new LocationDataSource;

  var view = new storeLocator.View(map, data, {
    geolocation: false
  });

  view.createMarker = function(store) {
    var markerOptions = {
      position: store.getLocation(),
      icon: ICON,
      title: store.getDetails().title
    };
    return new google.maps.Marker(markerOptions);
  }

  var infoBubble = new InfoBubble;

  view.getInfoWindow = function(store) {
    if (!store) {
      return infoBubble;
    }
    var details = store.getDetails();
    var html = ['<div class="store"><div class="title">', details.title, '</div><div class="address">', details.address, '</div></div>'].join('');
    infoBubble.setContent($(html)[0]);
    return infoBubble;
  };

  new storeLocator.Panel(panelDiv, {
    view: view
  });
});
