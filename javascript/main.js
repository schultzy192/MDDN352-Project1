$(document).ready(function(){
	if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var geocoder = new google.maps.Geocoder;
    var point = new google.maps.LatLng(
        position.coords.latitude, position.coords.longitude);
      var latit = new google.maps.LatLng(
      position.coords.latitude);
      var longit = new google.maps.LatLng(
      position.coords.longitude);
    geocoder.geocode({'latLng': point}, function (locations, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        for (var location of locations) {
          if ($.inArray('locality', location.types) != -1) {
            console.log('Your location is: ' + location.formatted_address);
              $('.locCaption').text('You appear to be in ' + location.formatted_address); $.getScript(src = 'https://api.forecast.io/forecast/0ecea812cd02e54bab9ff5cccbb33cdf/'+ latit+','+ longit);
            break;
          }
        };
      }
    });
  });
}
    $('#headerLocation').click(function() {
        $('#locationWeather').toggle();
        $('#headerLocation').not(this).css('background-image', 'url(/images/locationIcon.png)').removeClass('playing');
        if(!$(this).is('.playing')){
            $(this).css('background-image', 'url(/images/closeIcon.png)').addClass('playing');
    } else {
           $(this).css('background-image', 'url(/images/locationIcon.png)').removeClass('playing');
    }

});
    
    var now = new Date();
      var hours = now.getHours();
      var msg;
      if (hours < 12) msg = "Good Morning!";
      else if (hours < 18) msg = "Good Afternoon!";
      else msg = "Good Evening!";
      $('.locWeatherHeading').text(msg);
    
    function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // At last, if the user has denied notifications, and you 
  // want to be respectful there is no need to bother them any more.
}
});

