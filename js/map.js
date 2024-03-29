// https://www.gps-coordinates.net/

var womens = [
  {
    slug: 'marcelle-bard',
    name: 'Marcelle BARD',
    description: '1903-1988, théologienne et pasteure',
    position: { lat: 46.208515, lng: 6.1409275 }
  },
  {
    slug: 'henriette-bonna',
    name: 'Henriette BONNA',
    description: 'dite Baudichon, ~1500-~1537, militante protestante',
    position: { lat: 46.2114339, lng: 6.1378444 }
  },
  {
    slug: 'yvonne-bovard',
    name: 'Yvonne BOVARD',
    description: '1902-1984, violoniste',
    position: { lat: 46.2115083, lng: 6.1399824 }
  },
  {
    slug: 'josephine-butler',
    name: 'Josephine BUTLER',
    description: '1828-1906, militante féministe et réformatrice sociale',
    position: { lat: 46.2102772, lng: 6.1398087 }
  },
  {
    slug: 'helene-gautier-pictet',
    name: 'Hélène GAUTIER-PICTET',
    description: '1888-1973, fondatrice du Centre de liaison des associations féministes de Genève',
    position: { lat: 46.2111071, lng: 6.1415184 }
  },
  {
    slug: 'marie-louise-mignot',
    name: 'Marie-Louise MIGNOT',
    description: 'dite Madame Denis, 1712-1790, salonnière',
    position: { lat: 46.207561, lng: 6.1379743 }
  },
  {
    slug: 'paule-minck',
    name: 'Paule MINCK',
    description: 'ou Mink, 1839-1901, femme de lettres, communarde et féministe',
    position: { lat: 46.209733, lng: 6.1389966 }
  },
  {
    slug: 'jean-sindab',
    name: 'Jean SINDAB',
    description: '1944-1996, internationaliste antiraciste et antisexiste',
    position: { lat: 46.2096652, lng: 6.1403311 }
  },
  {
    slug: 'camille-vidart',
    name: 'Camille VIDART',
    description: '1854-1930, présidente de l’Union des femmes de Genève',
    position: { lat: 46.2119275, lng: 6.1355424 },
    perpetuated: "a remplacé le Chemin Louis Dunant"
  },
  {
    slug: 'violeta-parra',
    name: 'Violeta PARRA',
    description: '1917-1967, chanteuse et artiste plasticienne',
    position: { lat: 46.208455934391594 , lng: 6.135307761579043 }
  },
  {
    slug: 'marie-therese-maurette',
    name: 'Marie-Thérèse MAURETTE',
    description: '1890-1989, directrice de l’École internationale de Genève',
    position: { lat: 46.219381, lng: 6.134770 }
  },
  {
    slug: 'helvi-sipila',
    name: 'Helvi SIPILÄ',
    description: '1915-2009, fonctionnaire de l’ONU',
    position: { lat: 46.222569, lng: 6.138753 }
  },
  {
    slug: 'ceza-nabarawi',
    name: 'Ceza NABARAWI',
    description: '1897-1985, rédactrice en cheffe de <i>L’Égyptienne</i>',
    position: { lat: 46.220956, lng: 6.136695 }
  },
  {
    slug: 'alexandra-kollontai',
    name: 'Alexandra KOLLONTAÏ',
    description: '1872-1952, ambassadrice de l’URSS',
    position: { lat: 46.222712, lng: 6.139897 }
  },
  {
    slug: 'bertha-lutz',
    name: 'Bertha LUTZ',
    description: '1894-1976, vice-présidente de la Commission interaméricaine des femmes',
    position: { lat: 46.220934, lng: 6.141336 }
  },
  {
    slug: 'una-marson',
    name: 'Una MARSON',
    description: '1905-1965, journaliste, poétesse et dramaturge',
    position: { lat: 46.221131, lng: 6.140081 }
  },
  {
    slug: 'mary-mcgeachy',
    name: 'Mary McGEACHY',
    description: '1901-1991, fonctionnaire de l’UNRRA',
    position: { lat: 46.220558, lng: 6.138369 }
  },
  {
    slug: 'renee-marguerite-frick-cramer',
    name: 'Renée-Marguerite FRICK-CRAMER',
    description: '1887-1963, déléguée du CICR',
    position: { lat: 46.219759, lng: 6.147618 }
  },
  {
    slug: 'marguerite-thibert',
    name: 'Marguerite THIBERT',
    description: '1886-1982, fonctionnaire du BIT',
    position: { lat: 46.220685, lng: 6.140296 }
  },
  {
    slug: 'florence-wilson',
    name: 'Florence WILSON',
    description: '1884-1977, bibliothécaire de la Société des Nations',
    position: { lat: 46.222349, lng: 6.138297 }
  },
  {
    slug: 'maggy-breitmayer',
    name: 'Maggy BREITTMAYER',
    description: '1888-1961, violoniste soliste',
    position: { lat: 46.2009992, lng: 6.1415217 }
  },
  {
    slug: 'clotilde-bressler-gianoli',
    name: 'Clotilde BRESSLER-GIANOLI',
    description: '1872-1912, cantatrice',
    position: { lat: 46.2007274, lng: 6.1428887 }
  },
  {
    slug: 'genevieve-calame',
    name: 'Geneviève CALAME',
    description: '1946-1993, musicienne',
    position: { lat: 46.2013889, lng: 6.1422539 }
  },
  {
    slug: 'louise-de-frotte',
    name: 'Louise de FROTTÉ',
    description: '1617-1692, femme de lettres',
    position: { lat: 46.201976, lng: 6.142144 }
  },
  {
    slug: 'marcelle-de-kenzac',
    name: 'Marcelle de KENZAC',
    description: '1919-2009, metteuse en scène',
    position: { lat: 46.2022304, lng: 6.1413368 }
  },
  {
    slug: 'flore-des-dames',
    name: 'Flore des Dames',
    description: '1817, groupe de copistes botanistes',
    position: { lat: 46.1968724, lng: 6.146903 }
  },
  {
    slug: 'marcelle-moynier',
    name: 'Marcelle MOYNIER',
    description: '1888-1980, fondatrice du Théâtre des marionnettes de Genève',
    position: { lat: 46.2017735, lng: 6.142289 }
  },
  {
    slug: 'michelle-nicod',
    name: 'Michelle NICOD',
    description: '~1519-1618, libraire-imprimeuse',
    position: { lat: 46.2014622, lng: 6.14289 }
  },
  {
    slug: 'jeanne-henriette-rath',
    name: 'Jeanne Henriette RATH',
    description: '1773-1856, peintre',
    position: { lat: 46.201884, lng: 6.143314 }
  },
  {
    slug: 'carole-roussopoulos',
    name: 'Carole ROUSSOPOULOS',
    description: '1945-2009, vidéaste',
    position: { lat: 46.201906, lng: 6.1434458 }
  },
  {
    slug: 'louise-boulaz',
    name: 'Louise BOULAZ',
    description: 'dite Loulou, 1908-1991, alpiniste',
    position: { lat: 46.2097076, lng: 6.1457829 }
  },
  {
    slug: 'monique-bauer-lagier',
    name: 'Monique BAUER-LAGIER',
    description: '1922-2006, conseillère nationale et conseillère aux États',
    position: { lat: 46.2097338, lng: 6.1454063 }
  },
  {
    slug: 'beatrice-de-portugal',
    name: 'Béatrice de PORTUGAL',
    description: '1504-1538, duchesse de Savoie',
    position: { lat: 46.2112358, lng: 6.1464372 }
  },
  {
    slug: 'yolande-de-france',
    name: 'Yolande de FRANCE',
    description: '1434-1478, duchesse et régente du duché de Savoie',
    position: { lat: 46.211454, lng: 6.1479556 }
  },
  {
    slug: 'rachel-crowdy',
    name: 'Rachel CROWDY',
    description: '1884-1964, fonctionnaire de la Société des Nations',
    position: { lat: 46.2113763, lng: 6.1493629 }
  },
  {
    slug: 'pearl-grobet-secretan',
    name: 'Pearl GROBET-SECRÉTAN',
    description: '1904-1988, suffragiste',
    position: { lat: 46.21155520151464, lng: 6.149425025797655 }
  },
  {
    slug: 'victoire-tinayre',
    name: 'Victoire TINAYRE',
    description: '1831-1895, institutrice et pédagogue',
    position: { lat: 46.2145138, lng: 6.1497591 }
  },
  {
    slug: 'dora-distria',
    name: 'Dora d\'ISTRIA',
    description: '1828-1888, écrivaine',
    position: { lat: 46.2161894, lng: 6.1479539 }
  },
  {
    slug: 'elisabeth-de-wittelsbach',
    name: 'Élisabeth de WITTELSBACH',
    description: 'dite Sissi, 1837-1898, impératrice d’Autriche et reine de Hongrie',
    position: { lat: 46.20994495125272, lng: 6.151240974274515 }
  },
  {
    slug: 'julienne-piachaud',
    name: 'Julienne PIACHAUD',
    description: '1894-1978, fonctionnaire de la Société des Nations',
    position: { lat: 46.21190236999755, lng: 6.152796947290767 },
    perpetuated: "a remplacé la Rue René-Louis Piachaud"
  },
  {
    slug: 'marie-paula-lecompte',
    name: 'Marie Paula LECOMPTE',
    description: 'dite Minnie, vers 1850- ?, journaliste',
    position: { lat: 46.2068733, lng: 6.1469835 }
  },
  {
    slug: 'virgine-barbet',
    name: 'Virginie BARBET',
    description: 'vers 1824- ?, militante anarchiste et kiosquière',
    position: { lat: 46.2038937, lng: 6.1436196 }
  },
  {
    slug: 'ouvrieres-horlogeres-de-geneve',
    name: 'Ouvrières horlogères de Genève',
    description: 'XVIIIe-XIXe siècles',
    position: { lat: 46.204829700959536, lng: 6.145178220901471 }
  },
  {
    slug: 'ekaterina-kouskova',
    name: 'Ekaterina KOUSKOVA',
    description: '1869-1958, militante et journaliste',
    position: { lat: 46.2051929, lng: 6.1433848 }
  },
  {
    slug: 'marjorie-duvillard',
    name: 'Marjorie DUVILLARD',
    description: '1911-2004, infirmière et directrice de l’école d’infirmières de Genève',
    position: { lat: 46.20390669438613, lng: 6.1437671214957845 }
  },
  {
    slug: 'elisabeth-baulacre',
    name: 'Élisabeth BAULACRE',
    description: '1613-1693, cheffe d’entreprise',
    position: { lat: 46.2038443, lng: 6.1458456 },
    perpetuated: "a remplacé la Rue Léonard Baulacre"
  },
  {
    slug: 'trente-immortelles-de-geneve',
    name: 'Trente immortelles de Genève',
    description: '1778-1798, garantes de rentes viagères',
    position: { lat: 46.2051291, lng: 6.1432261 }
  },
  {
    slug: 'nelly-schreiber-favre',
    name: 'Nelly SCHREIBER-FAVRE',
    description: '1879-1972, avocate',
    position: { lat: 46.2027488, lng: 6.1465055 }
  },
  {
    slug: 'anna-s',
    name: 'Anna S.',
    description: '?-1888, prostituée',
    position: { lat: 46.20277674014949, lng: 6.1487288076865525 }
  },
  {
    slug: 'pauline-chaponniere-chaix',
    name: 'Pauline CHAPONNIÈRE-CHAIX',
    description: '1850-1934, infirmière et présidente du Conseil international des femmes',
    position: { lat: 46.2038607, lng: 6.1480029 }
  },
  {
    slug: 'therese-pittard',
    name: 'Thérèse PITTARD',
    description: '1872-1969, pédagogue et historienne',
    position: { lat: 46.1936991, lng: 6.1417813 }
  },
  {
    slug: 'marie-huber',
    name: 'Marie HUBER',
    description: '1695-1753, philosophe et théologienne',
    position: { lat: 46.19659230006787, lng: 6.146635069594104 }
  },
  {
    slug: 'germaine-duparc',
    name: 'Germaine DUPARC',
    description: '1916-2008, anthropologue',
    position: { lat: 46.1940027, lng: 6.1434479 }
  },
  {
    slug: 'lina-stern',
    name: 'Lina STERN',
    description: '1878-1968, médecin et biochimiste',
    position: { lat: 46.1950256, lng: 6.143598 }
  },
  {
    slug: 'jane-marcet',
    name: 'Jane MARCET',
    description: '1769-1858, écrivaine et vulgarisatrice scientifique',
    position: { lat: 46.1964285, lng: 6.1421093 }
  },
  {
    slug: 'mina-audemars',
    name: 'Mina AUDEMARS',
    description: '1883-1971, pédagogue',
    position: { lat: 46.1955233, lng: 6.1411337 },
    perpetuated: "a remplacé la Rue de la Vallée"
  },
  {
    slug: 'marguerite-dellenbach',
    name: 'Marguerite DELLENBACH',
    description: '1905-1993, directrice de musée et ethnologue',
    position: { lat: 46.19879425253609, lng: 6.137236581545267 },
    perpetuated: "a remplacé la Rue François Bergalone"
  },
  {
    slug: 'jeanne-hersch',
    name: 'Jeanne HERSCH',
    description: '1910-2000, philosophe',
    position: { lat: 46.1957239, lng: 6.1401974 }
  },
  {
    slug: 'henriette-saloz-joudra',
    name: 'Henriette SALOZ-JOUDRA',
    description: '1855-1928, médecin',
    position: { lat: 46.1962039, lng: 6.1372663 }
  },
  {
    slug: 'kitty-ponse',
    name: 'Kitty PONSE',
    description: '1897-1982, biologiste',
    position: { lat: 46.198066, lng: 6.1435296 }
  },
  {
    slug: 'caroline-boissier-butini',
    name: 'Caroline BOISSIER-BUTINI',
    description: '1786-1836, pianiste et compositrice',
    position: { lat: 46.1998592, lng: 6.1289801 }
  },
  {
    slug: 'ruth-bosiger',
    name: 'Ruth BÖSIGER',
    description: 'dite Coucou, 1907-1990, vendeuse et militante anarchiste',
    position: { lat: 46.2035412, lng: 6.1389273 },
    perpetuated: "a remplacé la Place du Chevelu"
  },
  {
    slug: 'elise-cabossel',
    name: 'Élise CABOSSEL',
    description: '1900-1982, syndicaliste',
    position: { lat: 46.2025, lng: 6.137809999999945 }
  },
  {
    slug: 'yvonne-elles',
    name: 'Yvonne ELLES',
    description: '1903-?, ménagère et candidate au Grand Conseil de Genève',
    position: { lat: 46.2019533, lng: 6.1310801 }
  },
  {
    slug: 'lucette-leuba',
    name: 'Lucette LEUBA',
    description: 'novembre 1961, ouvrière, syndicaliste et candidate au Grand Conseil de Genève',
    position: { lat: 46.2027, lng: 6.128770000000031 }
  },
  {
    slug: 'elna-palme-dutt',
    name: 'Elna PALME DUTT',
    description: '1891-1982, statisticienne et traductrice',
    position: { lat: 46.2011365, lng: 6.1295206 }
  },
  {
    slug: 'griselidis-real',
    name: 'Grisélidis RÉAL',
    description: '1929-2005, écrivaine et prostituée',
    position: { lat: 46.2011884, lng: 6.1375706 }
  },
  {
    slug: 'noelle-roger',
    name: 'Noëlle ROGER',
    description: '1874-1953, journaliste et écrivaine',
    position: { lat: 46.2040795, lng: 6.1388633 }
  },
  {
    slug: 'trois-blanchisseuses',
    name: 'Trois blanchisseuses',
    description: 'décédées le 1er aout 1913',
    position: { lat: 46.204161, lng: 6.138896 },
    perpetuated: "ont remplacé la Rue de la Pisciculture"
  },
  {
    slug: 'louisa-vuille',
    name: 'Louisa VUILLE',
    description: '1901-1994, ouvrière horlogère et syndicaliste',
    position: { lat: 46.20406, lng: 6.136363 }
  },
  {
    slug: 'louise-sarrasin',
    name: 'Louise SARRASIN',
    description: '1551-1623, femme de lettres',
    position: { lat: 46.199716122213246, lng: 6.1513747313202884 }
  },
  {
    slug: 'lise-girardin',
    name: 'Lise GIRARDIN',
    description: '1921-2010, maire de Genève',
    position: { lat: 46.2008373, lng: 6.1466125 },
    perpetuated: "a remplacé la Place des 22 Cantons"
  },
  {
    slug: 'anna-eynard-lullin',
    name: 'Anna EYNARD-LULLIN',
    description: '1793-1868, diplomate et philanthrope',
    position: { lat: 46.2011, lng: 6.144999999999982 }
  },
  {
    slug: 'renee-burlamacchi',
    name: 'Renée BURLAMACCHI',
    description: '1568-1641, mémorialiste',
    position: { lat: 46.2014, lng: 6.149260000000027 }
  },
  {
    slug: 'idelette-de-bure',
    name: 'Idelette De BURE',
    description: '~1505-1549, gestionnaire du ménage Calvin',
    position: { lat: 46.20221162276705, lng: 6.146077955225337 }
  },
  {
    slug: 'george-eliot',
    name: 'George ELIOT',
    description: '1819-1880, écrivaine',
    position: { lat: 46.20219491518313, lng: 6.145943844774592 }
  },
  {
    slug: 'madeleine-barot',
    name: 'Madeleine BAROT',
    description: '1909-1995, archiviste-bibliothécaire et résistante',
    position: { lat: 46.201577, lng: 6.1452174 }
  },
  {
    slug: 'claudine-levet',
    name: 'Claudine LEVET',
    description: 'aout 1535, prédicatrice protestante',
    position: { lat: 46.200771, lng: 6.1484938 }
  },
  {
    slug: 'annie-jiagge',
    name: 'Annie JIAGGE',
    description: '1918-1996, magistrate et défenseuse des droits des femmes ainsi que des personnes racisées',
    position: { lat: 46.2022545, lng: 6.1509015 }
  },
  {
    slug: 'theodelinde',
    name: 'THÉODELINDE',
    description: '?-~500, reine burgonde',
    position: { lat: 46.2012612, lng: 6.1468905 }
  },
  {
    slug: 'julia-chamorel',
    name: 'Julia CHAMOREL',
    description: '1916-2009, écrivaine',
    position: { lat: 46.2045233, lng: 6.1595419 }
  },
  {
    slug: 'ekaterina-dachkova',
    name: 'Ekaterina DACHKOVA',
    description: '1743-1810, princesse, diplomate et académicienne',
    position: { lat: 46.203035, lng: 6.1570022 }
  },
  {
    slug: 'anne-de-lusignan',
    name: 'Anne de LUSIGNAN',
    description: '1418-1462, duchesse de Savoie et fondatrice d’une chapelle au couvent de Rive',
    position: { lat: 46.2019, lng: 6.15337999999997 }
  },
  {
    slug: 'maria-edgeworth',
    name: 'Maria EDGEWORTH',
    description: '1767-1849, écrivaine',
    position: { lat: 46.2011322, lng: 6.1524539 }
  },
  {
    slug: 'alice-favre',
    name: 'Alice FAVRE',
    description: '1851-1929, présidente de la Croix-Rouge genevoise',
    position: { lat: 46.2015, lng: 6.159509999999955 },
    perpetuated: "complète l'Avenue William Favre"
  },
  {
    slug: 'lee-ya-ching',
    name: 'LEE Ya-Ching',
    description: '1912-1998, actrice et aviatrice',
    position: { lat: 46.2005307, lng: 6.1583773 }
  },
  {
    slug: 'marie-sidonia-de-lenoncourt',
    name: 'Marie-Sidonia de LENONCOURT',
    description: '1650-1685, aventurière et mémorialiste',
    position: { lat: 46.2022545, lng: 6.1509015 }
  },
  {
    slug: 'albertine-necker-de-saussure',
    name: 'Albertine NECKER de SAUSSURE',
    description: '1766-1841, écrivaine et pédagogue',
    position: { lat: 46.2049745, lng: 6.1579936 }
  },
  {
    slug: 'alice-emilie-noerbel-bertrand',
    name: 'Alice Émilie NOERBEL BERTRAND',
    description: '1872-1941, missionnaire et philanthrope',
    position: { lat: 46.2009, lng: 6.159819999999968 }
  },
  {
    slug: 'mary-wollstonecraft-godwin',
    name: 'Mary WOLLSTONECRAFT GODWIN (Mary Shelley)',
    description: '1797-1851, écrivaine',
    position: { lat: 46.2076006, lng: 6.1634618 }
  },
  {
    slug: 'jeanne-baud',
    name: 'Jeanne BAUD',
    description: 'dite Dame Piaget, ~1570-1630, héroïne de l’Escalade',
    position: { lat: 46.206584777892125, lng: 6.140509111641904 }
  },
  {
    slug: 'cecile-bieler-butticaz',
    name: 'Cécile BIÉLER-BUTTICAZ',
    description: '1884-1966, ingénieure',
    position: { lat: 46.2066518, lng: 6.1441058 }
  },
  {
    slug: 'barbara-borsinger',
    name: 'Barbara BORSINGER',
    description: '1892-1973, infirmière et fondatrice de la clinique des Grangettes',
    position: { lat: 46.208053360353475, lng: 6.146712245368917 }
  },
  {
    slug: 'eva-evdokimova',
    name: 'Eva EVDOKIMOVA',
    description: '1948-2009, danseuse',
    position: { lat: 46.20759608551177, lng: 6.143344213491787 }
  },
  {
    slug: 'marie-goegg-pouchoulin',
    name: 'Marie GOEGG-POUCHOULIN',
    description: '1826-1899, militante féministe et fondatrice du <i>Journal des femmes</i>',
    position: { lat: 46.20870580227565, lng: 6.147412098217046 }
  },
  {
    slug: 'eglantyne-jebb',
    name: 'Eglantyne JEBB',
    description: '1876-1928, philanthrope',
    position: { lat: 46.20677468205677, lng: 6.141233622404343 },
    perpetuated: "a remplacé le nom du Parc des Acacias"
  },
  {
    slug: 'audre-lorde',
    name: 'Audre LORDE',
    description: '1934-1992, écrivaine, poétesse et militante lesbienne',
    position: { lat: 46.207481, lng: 6.1433764 }
  },
  {
    slug: 'helene-de-mandrot',
    name: 'Hélène de MANDROT',
    description: '1867-1948, artiste et mécène',
    position: { lat: 46.2066376, lng: 6.13931 }
  },
  {
    slug: 'simone-rapin',
    name: 'Simone RAPIN',
    description: '1901-1988, écrivaine',
    position: { lat: 46.2071013, lng: 6.1410763 }
  },
  {
    slug: 'elisabeth-de-stoutz',
    name: 'Élisabeth de STOUTZ',
    description: '1854-1917, peintre et écrivaine',
    position: { lat: 46.2070628, lng: 6.1439522 }
  }
]

function initMap() {

  var isBioPage = window.location.href.includes('biographies')
  var womanSlug = null
  if (isBioPage) {
    var x = window.location.href.split('/')
    womanSlug = x[x.length-2]
  }

  var filteredWomens = womens
  var center = { lat: 46.2062588, lng: 6.1409799 }
  var zoom = 14
  if (isBioPage) {
    filteredWomens = womens.filter(woman => woman.slug === womanSlug)
    center = filteredWomens[0].position
    zoom = 18
  }


  var map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: zoom,
        center: center,
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

  var markers = filteredWomens.map(woman => {
    if (woman.perpetuated) {
      icon.url = '/img/marker-perpetuated.png'
    } else {
      icon.url = '/img/marker.png'
    }

    var marker = new google.maps.Marker({
      position: woman.position,
      map: map,
      icon: icon
    });

    marker.addListener('click', function() {
      infowindow.setContent(`<b>${woman.name}</b><br>${woman.description}${woman.perpetuated ? '<br>' + woman.perpetuated : ''}<br></br><a href="/biographies/${woman.slug}/"><b>En savoir plus ˃</b></a>`)
      infowindow.open(map, marker);
    });
    return marker
  })
}
