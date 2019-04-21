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
  },
  {
    slug: 'marie-therese-maurette',
    name: 'Marie-Thérèse MAURETTE',
    description: '1890-1989, Directrice de l’École internationale de Genève',
    position: { lat: 46.219381, lng: 6.134770 }
  },
  {
    slug: 'helvi-sipila',
    name: 'Helvi SIPILÄ',
    description: '1915-2009, Fonctionnaire de l’ONU',
    position: { lat: 46.222569, lng: 6.138753 }
  },
  {
    slug: 'ceza-nabarawi',
    name: 'Ceza NABARAWI',
    description: '1897-1985, Rédactrice en cheffe de l’Égyptienne',
    position: { lat: 46.220956, lng: 6.136695 }
  },
  {
    slug: 'alexandra-kollontai',
    name: 'Alexandra KOLLONTAÏ',
    description: '1872-1952, Ambassadrice de l’URSS',
    position: { lat: 46.222712, lng: 6.139897 }
  },
  {
    slug: 'bertha-lutz',
    name: 'Bertha LUTZ',
    description: '1894-1976, Vice-présidente de la Commission interaméricaine des femmes',
    position: { lat: 46.220934, lng: 6.141336 }
  },
  {
    slug: 'una-marson',
    name: 'Una MARSON',
    description: '1905-1965, Journaliste et poétesse',
    position: { lat: 46.221131, lng: 6.140081 }
  },
  {
    slug: 'mary-mcgeachy',
    name: 'Mary MCGEACHY',
    description: '1901-1991, Fonctionnaire de l’UNRRA',
    position: { lat: 46.220558, lng: 6.138369 }
  },
  {
    slug: 'marguerite-frick-cramer',
    name: 'Marguerite FRICK-CRAMER',
    description: '1887-1963, Déléguée du CICR',
    position: { lat: 46.219759, lng: 6.147618 }
  },
  {
    slug: 'marguerite-thibert',
    name: 'Marguerite THIBERT Dr.',
    description: '1886-1982, Fonctionnaire du BIT',
    position: { lat: 46.220685, lng: 6.140296 }
  },
  {
    slug: 'mary-florence-wilson',
    name: 'Mary-Florence WILSON',
    description: '1884-1977, Bibliothécaire de la Société des Nations',
    position: { lat: 46.222349, lng: 6.138297 }
  },
  {
    slug: 'maggy-breitmayer',
    name: 'Maggy BREITTMAYER',
    description: '1888-1961, Violoniste soliste',
    position: { lat: 46.2009992, lng: 6.1415217 }
  },
  {
    slug: 'clotilde-bressler-gianoli',
    name: 'Clotilde BRESSLER-GIANOLI',
    description: '1875-1912, Cantatrice',
    position: { lat: 46.2007274, lng: 6.1428887 }
  },
  {
    slug: 'genevieve-calame',
    name: 'Geneviève CALAME',
    description: '1946-1993, Musicienne',
    position: { lat: 46.2013889, lng: 6.1422539 }
  },
  {
    slug: 'louise-de-frotte',
    name: 'Louise De FROTTÉ',
    description: '1617-1692, Femme de lettres',
    position: { lat: 46.201976, lng: 6.142144 }
  },
  {
    slug: 'marcelle-de-kenzac',
    name: 'Marcelle De KENZAC',
    description: '1919-2009, Metteuse en scène',
    position: { lat: 46.2022304, lng: 6.1413368 }
  },
  {
    slug: 'la-flore-des-dames',
    name: 'La Flore des Dames',
    description: '1817, Groupe de copistes botanistes',
    position: { lat: 46.1968724, lng: 6.146903 }
  },
  {
    slug: 'marcelle-moynier',
    name: 'Marcelle MOYNIER',
    description: '1888-1980, Fondatrice du Théâtre des marionnettes de Genève',
    position: { lat: 46.2017735, lng: 6.142289 }
  },
  {
    slug: 'michelle-nicod',
    name: 'Michelle NICOD',
    description: '~1519-1618, Libraire-imprimeuse',
    position: { lat: 46.2014622, lng: 6.14289 }
  },
  {
    slug: 'jeanne-henriette-rath',
    name: 'Jeanne-Henriette RATH',
    description: '1773-1856, Peintre',
    position: { lat: 46.201884, lng: 6.143314 }
  },
  {
    slug: 'carole-roussopoulos',
    name: 'Carole ROUSSOPOULOS',
    description: '1945-2009, Vidéaste',
    position: { lat: 46.201906, lng: 6.1434458 }
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
      infowindow.setContent(`<b>${woman.name}</b><br>${woman.description}<br></br><a href="/100femmes/${woman.slug}/"><b>En savoir plus ˃</b></a>`)
      infowindow.open(map, marker);
    });
    return marker
  })
}
