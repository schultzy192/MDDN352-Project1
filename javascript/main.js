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
              $('.locCaption').text('You appear to be in ' + location.formatted_address); 
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
    
    $(window).scroll(function() {
   $('#headerBanner').show();

   if ($(window).scrollTop() <= 0) {
      $('#headerBanner').hide(); 
   }
});
    
    var now = new Date();
      var hours = now.getHours();
      var msg;
      if (hours < 12) msg = "Good Morning!";
      else if (hours < 18) msg = "Good Afternoon!";
      else msg = "Good Evening!";
      $('.locWeatherHeading').text(msg);
    
    var docWidth = document.documentElement.offsetWidth;

});

