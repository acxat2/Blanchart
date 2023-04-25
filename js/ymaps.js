ymaps.ready(function (){
  var myMap = new ymaps.Map("myMap1", {
      center: [55.758468, 37.601088],
      zoom: 14.3
  });
  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
  iconLayout: 'default#image',
  iconImageHref: '../img/desktop-1920/map.svg',
  iconImageSize: [20, 20],
  });
  myMap.geoObjects.add(myPlacemark);
});

