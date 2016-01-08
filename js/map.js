
function initMap() {

var style = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]


  var sydneyLatLng = {lat: -33.867487, lng: 151.206990};

  var chatswoodLatLng = {lat: -33.796076, lng: 151.183102};

  var laneCoveLatLng = {lat: -33.814556, lng: 151.169895};

  var crowsNestLatLng = {lat: -33.825142, lng: 151.203676};

  var neutralBayLatLng = {lat: -33.832253, lng: 151.221855};

  var willoughbyLatLng = {lat: -33.805229, lng: 151.199361};

  
  var map = new google.maps.Map(document.getElementById('map'), {
    center: crowsNestLatLng,
    styles: style,
    zoom: 13
  });


  var markerSydney = new google.maps.Marker({
    position: sydneyLatLng,
    draggable: true,
    animation: google.maps.Animation.DROP,
    map: map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    title: 'Sydney CBD'
  });

  var markerChatswood = new google.maps.Marker({
    position: chatswoodLatLng,
    draggable: true,
    animation: google.maps.Animation.DROP,
    map: map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    title: 'Chatswood'
  });

  var markerLaneCove = new google.maps.Marker({
    position: laneCoveLatLng,
    draggable: true,
    animation: google.maps.Animation.DROP,
    map: map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    title: 'Lane Cove'
  });

  var markerCrowsNest = new google.maps.Marker({
    position: crowsNestLatLng,
    draggable: true,
    animation: google.maps.Animation.DROP,
    map: map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    title: 'Crows Nest'
  });

  var markerNeutralBay = new google.maps.Marker({
    position: neutralBayLatLng,
    draggable: true,
    animation: google.maps.Animation.DROP,
    map: map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    title: 'Neutral Bay'
  });

  var markerWilloughby = new google.maps.Marker({
    position: willoughbyLatLng,
    draggable: true,
    animation: google.maps.Animation.DROP,
    map: map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    title: 'Willoughby'
  });


//----------------------------------

// Add circle overlay and bind to markers

  // sydney cbd

var circleSyd = new google.maps.Circle({
  map: map,
  radius: 200,    // 10 miles in metres
  fillColor: 'orange',
  fillOpacity: 0.5,
  strokeOpacity: 0
});
circleSyd.bindTo('center', markerSydney, 'position');

// chatswood

var circleChats = new google.maps.Circle({
  map: map,
  radius: 200,    // 10 miles in metres
  fillColor: 'orange',
  fillOpacity: 0.5,
  strokeOpacity: 0
});
circleChats.bindTo('center', markerChatswood, 'position');

// lane cove

var circleLane = new google.maps.Circle({
  map: map,
  radius: 200,    // 10 miles in metres
  fillColor: 'orange',
  fillOpacity: 0.5,
  strokeOpacity: 0
});
circleLane.bindTo('center', markerLaneCove, 'position');

// crows nest

var circleCrows = new google.maps.Circle({
  map: map,
  radius: 200,    // 10 miles in metres
  fillColor: 'orange',
  fillOpacity: 0.5,
  strokeOpacity: 0
});
circleCrows.bindTo('center', markerCrowsNest, 'position');

// neutral bay

var circleNeutral = new google.maps.Circle({
  map: map,
  radius: 200,    // 10 miles in metres
  fillColor: 'orange',
  fillOpacity: 0.5,
  strokeOpacity: 0
});
circleNeutral.bindTo('center', markerNeutralBay, 'position');

// willoughby

var circleWilloughby = new google.maps.Circle({
  map: map,
  radius: 200,    // 10 miles in metres
  fillColor: 'orange',
  fillOpacity: 0.5,
  strokeOpacity: 0
});
circleWilloughby.bindTo('center', markerWilloughby, 'position');


//----------------------------------

// pulsing radius:
  
  // sydney cbd

  var direction = 1;
      var rMin = 150, rMax = 400;
      setInterval(function() {
          var radius = circleSyd.getRadius();
          if ((radius > rMax) || (radius < rMin)) {
              direction *= -1;
          }
          circleSyd.setRadius(radius + direction * 10);
      }, 100);


  // chatswood

  var direction = 1;
      var rMin = 150, rMax = 800;
      setInterval(function() {
          var radius = circleChats.getRadius();
          if ((radius > rMax) || (radius < rMin)) {
              direction *= -1;
          }
          circleChats.setRadius(radius + direction * 10);
      }, 100);

  // lane cove

  var direction = 1;
      var rMin = 150, rMax = 800;
      setInterval(function() {
          var radius = circleLane.getRadius();
          if ((radius > rMax) || (radius < rMin)) {
              direction *= -1;
          }
          circleLane.setRadius(radius + direction * 10);
      }, 100);

  // crows nest 

  var direction = 1;
      var rMin = 150, rMax = 800;
      setInterval(function() {
          var radius = circleCrows.getRadius();
          if ((radius > rMax) || (radius < rMin)) {
              direction *= -1;
          }
          circleCrows.setRadius(radius + direction * 10);
      }, 100);

  // neutral bay

  var direction = 1;
      var rMin = 150, rMax = 800;
      setInterval(function() {
          var radius = circleNeutral.getRadius();
          if ((radius > rMax) || (radius < rMin)) {
              direction *= -1;
          }
          circleNeutral.setRadius(radius + direction * 10);
      }, 100);

  // willoughby

  var direction = 1;
      var rMin = 150, rMax = 800;
      setInterval(function() {
          var radius = circleWilloughby.getRadius();
          if ((radius > rMax) || (radius < rMin)) {
              direction *= -1;
          }
          circleWilloughby.setRadius(radius + direction * 10);
      }, 100);

}


