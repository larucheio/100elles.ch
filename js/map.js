// https://www.gps-coordinates.net/

var womens = [
  {
    slug: 'marcelle-bard',
    name: 'Marcelle BARD',
    description: '1903-1988, Théologienne et pasteure',
    position: { lat: 46.208515, lng: 6.1409275 }
  },
  {
    slug: 'henriette-bonna',
    name: 'Henriette BONNA',
    description: 'dite Baudichon, ~1510-~1537, Militante protestante',
    position: { lat: 46.2114339, lng: 6.1378444 }
  },
  {
    slug: 'yvonne-bovard',
    name: 'Yvonne BOVARD',
    description: '1902-1984, Violoniste',
    position: { lat: 46.2115083, lng: 6.1399824 }
  },
  {
    slug: 'josephine-butler',
    name: 'Josephine BUTLER',
    description: '1828-1906, Militante féministe et réformatrice sociale',
    position: { lat: 46.2102772, lng: 6.1398087 }
  },
  {
    slug: 'helene-gautier-pictet',
    name: 'Hélène GAUTIER-PICTET',
    description: '1888-1973, Fondatrice du Centre de liaison des associations féminines de Genève',
    position: { lat: 46.2111071, lng: 6.1415184 }
  },
  {
    slug: 'marie-louise-mignot',
    name: 'Marie-Louise MIGNOT',
    description: 'dite Madame Denis, 1712-1790, Salonnière',
    position: { lat: 46.207561, lng: 6.1379743 }
  },
  {
    slug: 'paule-minck',
    name: 'Paule MINCK',
    description: '1839-1901, Femme de lettres, communarde et féministe',
    position: { lat: 46.209733, lng: 6.1389966 }
  },
  {
    slug: 'jean-sindab',
    name: 'Jean SINDAB Dr.',
    description: '1944-1996, Internationaliste antiraciste et antisexiste',
    position: { lat: 46.2096652, lng: 6.1403311 }
  },
  {
    slug: 'camille-vidart',
    name: 'Camille VIDART',
    description: '1854-1930, Présidente de l’Union des femmes de Genève',
    position: { lat: 46.2119275, lng: 6.1355424 }
  },
  {
    slug: 'violeta-parra',
    name: 'Violeta PARRA',
    description: '1917-1967, Chanteuse et artiste plasticienne',
    position: { lat: 46.208455934391594 , lng: 6.135307761579043 }
  }
]

function initMap() {
  var map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 14,
        center: { lat: 46.2062588, lng: 6.1409799 },
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]
      }
    );

  var icon = {
    url: '/img/marker.png',
    scaledSize: new google.maps.Size(25, 40.375)
  }

  var infowindow = new google.maps.InfoWindow();

  var markers = womens.map(woman => {
    var marker = new google.maps.Marker({
      position: woman.position,
      map: map,
      icon: icon
    });

    marker.addListener('click', function() {
      // `<a href="/100femmes/${woman.slug}/"><b>${woman.name}</b></a><br>${woman.description}`
      infowindow.setContent(`<b>${woman.name}</b><br>${woman.description}`)
      infowindow.open(map, marker);
    });
    return marker
  })
}
