const vocabDB = {
    days_months_seasons: [
        { question: "Monday", answers: ["Montag"] },
        { question: "Tuesday", answers: ["Dienstag"] },
        { question: "Wednesday", answers: ["Mittwoch"] },
        { question: "Thursday", answers: ["Donnerstag"] },
        { question: "Friday", answers: ["Freitag"] },
        { question: "Saturday", answers: ["Samstag", "Sonnabend"] },
        { question: "Sunday", answers: ["Sonntag"] },

        { question: "January", answers: ["Januar"] },
        { question: "February", answers: ["Februar"] },
        { question: "March", answers: ["März", "Maerz"] },
        { question: "April", answers: ["April"] },
        { question: "May", answers: ["Mai"] },
        { question: "June", answers: ["Juni"] },
        { question: "July", answers: ["Juli"] },
        { question: "August", answers: ["August"] },
        { question: "September", answers: ["September"] },
        { question: "October", answers: ["Oktober"] },
        { question: "November", answers: ["November"] },
        { question: "December", answers: ["Dezember"] },

        { question: "Spring", answers: ["Frühling", "Fruehling"] },
        { question: "Summer", answers: ["Sommer"] },
        { question: "Autumn", answers: ["Herbst"] },
        { question: "Winter", answers: ["Winter"] },
    ],
    countries_nationalities: [
        // GERMAN-SPEAKING
        { question: "Germany", answers: ["Deutschland"] },
        { question: "German (male)", answers: ["Deutscher"] },
        { question: "German (female)", answers: ["Deutsche"] },

        { question: "Austria", answers: ["Österreich", "Oesterreich"] },
        { question: "Austrian (male)", answers: ["Österreicher", "Oesterreicher"] },
        { question: "Austrian (female)", answers: ["Österreicherin", "Oesterreicherin"] },

        { question: "Switzerland", answers: ["Schweiz"] },
        { question: "Swiss (male)", answers: ["Schweizer"] },
        { question: "Swiss (female)", answers: ["Schweizerin"] },

        // WESTERN EUROPE
        { question: "France", answers: ["Frankreich"] },
        { question: "French (male)", answers: ["Franzose"] },
        { question: "French (female)", answers: ["Französin", "Frauen Franzosin"] },

        { question: "Belgium", answers: ["Belgien"] },
        { question: "Belgian (male)", answers: ["Belgier"] },
        { question: "Belgian (female)", answers: ["Belgierin"] },

        { question: "Netherlands", answers: ["Niederlande"] },
        { question: "Dutch (male)", answers: ["Niederländer"] },
        { question: "Dutch (female)", answers: ["Niederländerin"] },

        { question: "Luxembourg", answers: ["Luxemburg"] },
        { question: "Luxembourgish (male)", answers: ["Luxemburger"] },
        { question: "Luxembourgish (female)", answers: ["Luxemburgerin"] },

        { question: "United Kingdom", answers: ["Vereinigtes Königreich", "Grossbritannien", "Großbritannien"] },
        { question: "British (male)", answers: ["Brite"] },
        { question: "British (female)", answers: ["Britin"] },

        { question: "Ireland", answers: ["Irland"] },
        { question: "Irish (male)", answers: ["Ire"] },
        { question: "Irish (female)", answers: ["Ir(in)", "Irische Frau"] },

        // SOUTHERN EUROPE
        { question: "Spain", answers: ["Spanien"] },
        { question: "Spanish (male)", answers: ["Spanier"] },
        { question: "Spanish (female)", answers: ["Spanierin"] },

        { question: "Portugal", answers: ["Portugal"] },
        { question: "Portuguese (male)", answers: ["Portugiese"] },
        { question: "Portuguese (female)", answers: ["Portugiesin"] },

        { question: "Italy", answers: ["Italien"] },
        { question: "Italian (male)", answers: ["Italiener"] },
        { question: "Italian (female)", answers: ["Italienerin"] },

        { question: "Malta", answers: ["Malta"] },
        { question: "Maltese (male)", answers: ["Maltese"] },
        { question: "Maltese (female)", answers: ["Malteserin"] },

        { question: "Greece", answers: ["Griechenland"] },
        { question: "Greek (male)", answers: ["Grieche"] },
        { question: "Greek (female)", answers: ["Griechin"] },

        { question: "Cyprus", answers: ["Zypern"] },
        { question: "Cypriot (male)", answers: ["Zyprer"] },
        { question: "Cypriot (female)", answers: ["Zyprerin"] },

        // NORDIC COUNTRIES
        { question: "Denmark", answers: ["Dänemark", "Daenemark"] },
        { question: "Danish (male)", answers: ["Däne", "Daene"] },
        { question: "Danish (female)", answers: ["Dänin", "Daenin"] },

        { question: "Sweden", answers: ["Schweden"] },
        { question: "Swedish (male)", answers: ["Schwede"] },
        { question: "Swedish (female)", answers: ["Schwedin"] },

        { question: "Norway", answers: ["Norwegen"] },
        { question: "Norwegian (male)", answers: ["Norweger"] },
        { question: "Norwegian (female)", answers: ["Norwegerin"] },

        { question: "Finland", answers: ["Finnland"] },
        { question: "Finnish (male)", answers: ["Finne"] },
        { question: "Finnish (female)", answers: ["Finnin"] },

        { question: "Iceland", answers: ["Island"] },
        { question: "Icelandic (male)", answers: ["Isländer"] },
        { question: "Icelandic (female)", answers: ["Isländerin"] },

        // EASTERN EUROPE
        { question: "Poland", answers: ["Polen"] },
        { question: "Polish (male)", answers: ["Pole"] },
        { question: "Polish (female)", answers: ["Polin"] },

        { question: "Czech Republic", answers: ["Tschechien"] },
        { question: "Czech (male)", answers: ["Tscheche"] },
        { question: "Czech (female)", answers: ["Tschechin"] },

        { question: "Slovakia", answers: ["Slowakei"] },
        { question: "Slovak (male)", answers: ["Slowake"] },
        { question: "Slovak (female)", answers: ["Slowakin"] },

        { question: "Hungary", answers: ["Ungarn"] },
        { question: "Hungarian (male)", answers: ["Ungar"] },
        { question: "Hungarian (female)", answers: ["Ungarin"] },

        { question: "Romania", answers: ["Rumänien", "Rumaenien"] },
        { question: "Romanian (male)", answers: ["Rumäne", "Rumaene"] },
        { question: "Romanian (female)", answers: ["Rumänin", "Rumaenin"] },

        { question: "Bulgaria", answers: ["Bulgarien"] },
        { question: "Bulgarian (male)", answers: ["Bulgare"] },
        { question: "Bulgarian (female)", answers: ["Bulgarin"] },

        // BALTICS
        { question: "Estonia", answers: ["Estland"] },
        { question: "Estonian (male)", answers: ["Este"] },
        { question: "Estonian (female)", answers: ["Estin"] },

        { question: "Latvia", answers: ["Lettland"] },
        { question: "Latvian (male)", answers: ["Lette"] },
        { question: "Latvian (female)", answers: ["Lettin"] },

        { question: "Lithuania", answers: ["Litauen"] },
        { question: "Lithuanian (male)", answers: ["Litauer"] },
        { question: "Lithuanian (female)", answers: ["Litauerin"] },

        // BALKANS
        { question: "Slovenia", answers: ["Slowenien"] },
        { question: "Slovenian (male)", answers: ["Slowene"] },
        { question: "Slovenian (female)", answers: ["Slowenin"] },

        { question: "Croatia", answers: ["Kroatien"] },
        { question: "Croatian (male)", answers: ["Kroate"] },
        { question: "Croatian (female)", answers: ["Kroatin"] },

        { question: "Bosnia and Herzegovina", answers: ["Bosnien und Herzegowina"] },
        { question: "Bosnian (male)", answers: ["Bosnier"] },
        { question: "Bosnian (female)", answers: ["Bosnierin"] },

        { question: "Serbia", answers: ["Serbien"] },
        { question: "Serbian (male)", answers: ["Serbe"] },
        { question: "Serbian (female)", answers: ["Serbin"] },

        { question: "Montenegro", answers: ["Montenegro"] },
        { question: "Montenegrin (male)", answers: ["Montenegriner"] },
        { question: "Montenegrin (female)", answers: ["Montenegrinerin"] },

        { question: "North Macedonia", answers: ["Nordmazedonien"] },
        { question: "Macedonian (male)", answers: ["Mazedonier"] },
        { question: "Macedonian (female)", answers: ["Mazedonierin"] },

        { question: "Albania", answers: ["Albanien"] },
        { question: "Albanian (male)", answers: ["Albaner"] },
        { question: "Albanian (female)", answers: ["Albanerin"] },

        { question: "Kosovo", answers: ["Kosovo"] },
        { question: "Kosovar (male)", answers: ["Kosovar"] },
        { question: "Kosovar (female)", answers: ["Kosovarin"] },

        // EAST / OTHER
        { question: "Russia", answers: ["Russland"] },
        { question: "Russian (male)", answers: ["Russe"] },
        { question: "Russian (female)", answers: ["Russin"] },

        { question: "Belarus", answers: ["Weißrussland", "Weissrussland", "Belarus"] },
        { question: "Belarusian (male)", answers: ["Weißrusse", "Weissrusse", "Belarusse"] },
        { question: "Belarusian (female)", answers: ["Weißrussin", "Weissrussin", "Belarussin"] },

        { question: "Ukraine", answers: ["Ukraine"] },
        { question: "Ukrainian (male)", answers: ["Ukrainer"] },
        { question: "Ukrainian (female)", answers: ["Ukrainerin"] },

        { question: "Moldova", answers: ["Moldau", "Moldawien"] },
        { question: "Moldovan (male)", answers: ["Moldauer"] },
        { question: "Moldovan (female)", answers: ["Moldauerin"] },

        { question: "Georgia (sometimes considered Europe)", answers: ["Georgien"] },
        { question: "Georgian (male)", answers: ["Georgier"] },
        { question: "Georgian (female)", answers: ["Georgierin"] },

        { question: "Armenia (sometimes considered Europe)", answers: ["Armenien"] },
        { question: "Armenian (male)", answers: ["Armenier"] },
        { question: "Armenian (female)", answers: ["Armenierin"] },
    ],
    family_vocab: [
        
      { question: "Father", answers: ["der Vater"] },
      { question: "Mother", answers: ["die Mutter"] },
      { question: "Parents", answers: ["die Eltern"] },
      { question: "Son", answers: ["der Sohn"] },
      { question: "Daughter", answers: ["die Tochter"] },
      { question: "Child", answers: ["das Kind"] },
      { question: "Children", answers: ["die Kinder"] },
      { question: "Brother", answers: ["der Bruder"] },
      { question: "Sister", answers: ["die Schwester"] },
      { question: "Siblings", answers: ["die Geschwister"] },
      { question: "Grandfather", answers: ["der Großvater", "der Grossvater", "der Opa"] },
      { question: "Grandmother", answers: ["die Großmutter", "die Grossmutter", "die Oma"] },
      { question: "Grandparents", answers: ["die Großeltern", "die Grosseltern"] },
      { question: "Uncle", answers: ["der Onkel"] },
      { question: "Aunt", answers: ["die Tante"] },
      { question: "Cousin (male)", answers: ["der Cousin", "der Vetter"] },
      { question: "Cousin (female)", answers: ["die Cousine", "die Base"] },
      { question: "Nephew", answers: ["der Neffe"] },
      { question: "Niece", answers: ["die Nichte"] },
      { question: "Husband", answers: ["der Ehemann", "der Mann"] },
      { question: "Wife", answers: ["die Ehefrau", "die Frau"] },
    ],
    
colors_clothes: [
  // COLORS
  { question: "Red", answers: ["rot"] },
  { question: "Blue", answers: ["blau"] },
  { question: "Green", answers: ["grün", "gruen"] },
  { question: "Yellow", answers: ["gelb"] },
  { question: "Black", answers: ["schwarz"] },
  { question: "White", answers: ["weiß", "weiss"] },
  { question: "Gray", answers: ["grau"] },
  { question: "Brown", answers: ["braun"] },
  { question: "Orange", answers: ["orange"] },
  { question: "Pink", answers: ["rosa", "pink"] },
  { question: "Purple", answers: ["lila", "violett"] },

  // CLOTHES
  { question: "Shirt", answers: ["das Hemd"] },
  { question: "T-shirt", answers: ["das T-Shirt"] },
  { question: "Pants", answers: ["die Hose"] },
  { question: "Jeans", answers: ["die Jeans"] },
  { question: "Skirt", answers: ["der Rock"] },
  { question: "Dress", answers: ["das Kleid"] },
  { question: "Shoes", answers: ["die Schuhe"] },
  { question: "Socks", answers: ["die Socken"] },
  { question: "Jacket", answers: ["die Jacke"] },
  { question: "Coat", answers: ["der Mantel"] },
  { question: "Hat/Cap", answers: ["der Hut", "die Mütze", "die Muetze"] },
  { question: "Scarf", answers: ["der Schal"] },
  { question: "Gloves", answers: ["die Handschuhe"] },
  { question: "Sweater", answers: ["der Pullover"] },
  { question: "Suit", answers: ["der Anzug"] },
],
    
   home_rooms: [
  { question: "House", answers: ["das Haus"] },
  { question: "Apartment", answers: ["die Wohnung"] },
  { question: "Room", answers: ["das Zimmer"] },
  { question: "Living room", answers: ["das Wohnzimmer"] },
  { question: "Bedroom", answers: ["das Schlafzimmer"] },
  { question: "Kitchen", answers: ["die Küche", "die Kueche"] },
  { question: "Bathroom", answers: ["das Badezimmer"] },
  { question: "Toilet", answers: ["die Toilette", "das WC"] },
  { question: "Hallway", answers: ["der Flur"] },
  { question: "Garden", answers: ["der Garten"] },
  { question: "Balcony", answers: ["der Balkon"] },
  { question: "Door", answers: ["die Tür", "die Tuer"] },
  { question: "Window", answers: ["das Fenster"] },
  { question: "Table", answers: ["der Tisch"] },
  { question: "Chair", answers: ["der Stuhl"] },
  { question: "Bed", answers: ["das Bett"] },
  { question: "Sofa", answers: ["das Sofa", "die Couch"] },
  { question: "Lamp", answers: ["die Lampe"] },
  { question: "Fridge", answers: ["der Kühlschrank", "der Kuehlschrank"] },
  { question: "Oven", answers: ["der Ofen"] },
],

        
    daily_routines: [
    { question: "to wake up", answers: ["aufwachen"] },
    { question: "to get up", answers: ["aufstehen"] },
    { question: "to wash", answers: ["sich waschen"] },
    { question: "to shower", answers: ["duschen"] },
    { question: "to brush teeth", answers: ["Zähne putzen", "Zaehne putzen"] },
    { question: "to get dressed", answers: ["sich anziehen"] },
    { question: "to have breakfast", answers: ["frühstücken", "fruehstuecken"] },
    { question: "to eat lunch", answers: ["zu Mittag essen"] },
    { question: "to eat dinner", answers: ["zu Abend essen"] },
    { question: "to go to work", answers: ["zur Arbeit gehen"] },
    { question: "to study", answers: ["lernen", "studieren"] },
    { question: "to work", answers: ["arbeiten"] },
    { question: "to cook", answers: ["kochen"] },
    { question: "to clean", answers: ["putzen", "reinigen"] },
    { question: "to relax", answers: ["sich entspannen"] },
    { question: "to watch TV", answers: ["fernsehen"] },
    { question: "to go shopping", answers: ["einkaufen gehen"] },
    { question: "to go to bed", answers: ["ins Bett gehen"] },
    { question: "to sleep", answers: ["schlafen"] },
],
    transport_travel: [
    { question: "car", answers: ["Auto"] },
    { question: "bus", answers: ["Bus"] },
    { question: "train", answers: ["Zug"] },
    { question: "tram", answers: ["Straßenbahn", "Strassenbahn"] },
    { question: "subway, metro", answers: ["U-Bahn", "Ubahn"] },
    { question: "bicycle", answers: ["Fahrrad", "Rad"] },
    { question: "motorcycle", answers: ["Motorrad"] },
    { question: "airplane", answers: ["Flugzeug"] },
    { question: "airport", answers: ["Flughafen"] },
    { question: "ticket", answers: ["Fahrkarte", "Ticket"] },
    { question: "station", answers: ["Bahnhof"] },
    { question: "stop (bus/tram)", answers: ["Haltestelle"] },
    { question: "luggage", answers: ["Gepäck", "Koffer"] },
    { question: "passport", answers: ["Pass", "Reisepass"] },
    { question: "map", answers: ["Karte", "Landkarte"] },
    { question: "journey / trip", answers: ["Reise"] },
    { question: "vacation / holiday", answers: ["Urlaub", "Ferien"] },
    { question: "to travel", answers: ["reisen"] },
    { question: "to drive", answers: ["fahren"] },
    { question: "to fly", answers: ["fliegen"] },
],
    nature_weather: [
    { question: "the sun", answers: ["die Sonne"] },
    { question: "the moon", answers: ["der Mond"] },
    { question: "the star", answers: ["der Stern"] },
    { question: "the sky", answers: ["der Himmel"] },
    { question: "the cloud", answers: ["die Wolke"] },
    { question: "the rain", answers: ["der Regen"] },
    { question: "the snow", answers: ["der Schnee"] },
    { question: "the wind", answers: ["der Wind"] },
    { question: "the storm", answers: ["das Gewitter", "der Sturm"] },
    { question: "the fog", answers: ["der Nebel"] },
    { question: "the tree", answers: ["der Baum"] },
    { question: "the flower", answers: ["die Blume"] },
    { question: "the grass", answers: ["das Gras"] },
    { question: "the forest", answers: ["der Wald"] },
    { question: "the mountain", answers: ["der Berg"] },
    { question: "the river", answers: ["der Fluss", "der Fluss"] },
    { question: "the sea", answers: ["das Meer"] },
    { question: "the lake", answers: ["der See"] },
    { question: "the earth / soil", answers: ["die Erde"] },
    { question: "the weather", answers: ["das Wetter"] },
],
    body_health: [
    // BODY
    { question: "the head", answers: ["der Kopf"] },
    { question: "the face", answers: ["das Gesicht"] },
    { question: "the eye", answers: ["das Auge"] },
    { question: "the nose", answers: ["die Nase"] },
    { question: "the mouth", answers: ["der Mund"] },
    { question: "the ear", answers: ["das Ohr"] },
    { question: "the tooth", answers: ["der Zahn"] },
    { question: "the hand", answers: ["die Hand"] },
    { question: "the arm", answers: ["der Arm"] },
    { question: "the leg", answers: ["das Bein"] },
    { question: "the foot", answers: ["der Fuß", "der Fuss"] },
    { question: "the heart", answers: ["das Herz"] },
    { question: "the stomach/belly", answers: ["der Bauch"] },
    { question: "the back", answers: ["der Rücken", "der Ruecken"] },
    { question: "the body", answers: ["der Körper", "der Koerper"] },

    // HEALTH
    { question: "the doctor (male)", answers: ["der Arzt"] },
    { question: "the doctor (female)", answers: ["die Ärztin", "die Aerztin"] },
    { question: "the hospital", answers: ["das Krankenhaus"] },
    { question: "the medicine", answers: ["die Medizin"] },
    { question: "the pain", answers: ["der Schmerz"] },
],
    jobs_workplaces: [
    // JOBS
    { question: "teacher (male)", answers: ["der Lehrer"] },
    { question: "teacher (female)", answers: ["die Lehrerin"] },
    { question: "student (university) (male)", answers: ["der Student"] },
    { question: "student (university) (female)", answers: ["die Studentin"] },
    { question: "doctor (male)", answers: ["der Arzt"] },
    { question: "doctor (female)", answers: ["die Ärztin", "die Aerztin"] },
    { question: "nurse (male)", answers: ["der Krankenpfleger"] },
    { question: "nurse (female)", answers: ["die Krankenschwester"] },
    { question: "engineer (male)", answers: ["der Ingenieur"] },
    { question: "engineer (female)", answers: ["die Ingenieurin"] },
    { question: "cook/chef (male)", answers: ["der Koch"] },
    { question: "cook/chef (female)", answers: ["die Köchin", "die Koechin"] },
    { question: "waiter (male)", answers: ["der Kellner"] },
    { question: "waitress (female)", answers: ["die Kellnerin"] },
    { question: "salesperson (male)", answers: ["der Verkäufer", "der Verkaeufer"] },
    { question: "salesperson (female)", answers: ["die Verkäuferin", "die Verkaeuferin"] },
    { question: "driver (male)", answers: ["der Fahrer"] },
    { question: "driver (female)", answers: ["die Fahrerin"] },
    { question: "farmer (male)", answers: ["der Landwirt"] },
    { question: "farmer (female)", answers: ["die Landwirtin"] },
    { question: "artist (male)", answers: ["der Künstler", "der Kuenstler"] },
    { question: "artist (female)", answers: ["die Künstlerin", "die Kuenstlerin"] },
    { question: "musician (male)", answers: ["der Musiker"] },
    { question: "musician (female)", answers: ["die Musikerin"] },
    { question: "programmer (male)", answers: ["der Programmierer"] },
    { question: "programmer (female)", answers: ["die Programmiererin"] },
    { question: "hairdresser (male)", answers: ["der Friseur"] },
    { question: "hairdresser (female)", answers: ["die Friseurin"] },
    { question: "mechanic (male)", answers: ["der Mechaniker"] },
    { question: "mechanic (female)", answers: ["die Mechanikerin"] },
    { question: "police officer (male)", answers: ["der Polizist"] },
    { question: "police officer (female)", answers: ["die Polizistin"] },
    { question: "firefighter (male)", answers: ["der Feuerwehrmann"] },
    { question: "firefighter (female)", answers: ["die Feuerwehrfrau"] },

    // WORKPLACES
    { question: "the office", answers: ["das Büro", "das Buero"] },
    { question: "the company", answers: ["die Firma"] },
    { question: "the shop / store", answers: ["das Geschäft", "der Laden", "das Geschaeft"] },
    { question: "the factory", answers: ["die Fabrik"] },
    { question: "the hospital", answers: ["das Krankenhaus"] },
    { question: "the school", answers: ["die Schule"] },
    { question: "the restaurant", answers: ["das Restaurant"] },
    { question: "the construction site", answers: ["die Baustelle"] },
    { question: "the farm", answers: ["der Bauernhof"] },
    { question: "the meeting", answers: ["die Besprechung", "das Meeting"] },
    { question: "the colleague (male)", answers: ["der Kollege"] },
    { question: "the colleague (female)", answers: ["die Kollegin"] },
],
    hobbies_free_time: [
    { question: "to read", answers: ["lesen"] },
    { question: "to listen to music", answers: ["Musik hören", "Musik hoeren"] },
    { question: "to sing", answers: ["singen"] },
    { question: "to dance", answers: ["tanzen"] },
    { question: "to play guitar", answers: ["Gitarre spielen"] },
    { question: "to play piano", answers: ["Klavier spielen"] },
    { question: "to cook", answers: ["kochen"] },
    { question: "to bake", answers: ["backen"] },
    { question: "to draw", answers: ["zeichnen"] },
    { question: "to paint", answers: ["malen"] },
    { question: "photography / to take photos", answers: ["Fotografie", "fotografieren"] },
    { question: "to hike", answers: ["wandern"] },
    { question: "to swim", answers: ["schwimmen"] },
    { question: "to run / jog", answers: ["joggen", "laufen"] },
    { question: "to cycle", answers: ["Rad fahren", "Fahrrad fahren"] },
    { question: "to travel", answers: ["reisen"] },
    { question: "to camp", answers: ["zelten"] },
    { question: "to play video games", answers: ["Videospiele spielen"] },
    { question: "to watch movies", answers: ["Filme schauen", "Filme sehen"] },
    { question: "to go to the cinema", answers: ["ins Kino gehen"] },
    { question: "to play board games", answers: ["Brettspiele spielen"] },
    { question: "to do yoga", answers: ["Yoga machen"] },
    { question: "gardening", answers: ["Gartenarbeit", "gärtnern", "gaertnern"] },
    { question: "to fish", answers: ["angeln"] },
    { question: "to read comics", answers: ["Comics lesen"] },
],
    
    
};

const grammarDB = {
articles_der_die_das: [
    // DEFINITE ARTICLES
    { question: "(The) ___ Tisch (table)", answers: ["der"] },
    { question: "(The) ___ Lampe (lamp)", answers: ["die"] },
    { question: "(The) ___ Buch (book)", answers: ["das"] },
    { question: "(The) ___ Fenster (window)", answers: ["das"] },
    { question: "(The) ___ Stühle (chairs)", answers: ["die"] },
    { question: "(The) ___ Apfel (apple)", answers: ["der"] },
    { question: "(The) ___ Banane (banana)", answers: ["die"] },
    { question: "(The) ___ Wasser (water)", answers: ["das"] },
    { question: "(The) ___ Lehrer (teacher, male)", answers: ["der"] },
    { question: "(The) ___ Lehrerin (teacher, female)", answers: ["die"] },

    // INDEFINITE ARTICLES
    { question: "Ich habe ___ Hund (dog).", answers: ["einen"] },
    { question: "Sie hat ___ Katze (cat).", answers: ["eine"] },
    { question: "Er kauft ___ Auto (car).", answers: ["ein"] },
    { question: "Wir brauchen ___ Tisch (table).", answers: ["einen"] },
    { question: "Das ist ___ Problem (problem).", answers: ["ein"] },
    { question: "Er schreibt ___ Brief (letter).", answers: ["einen"] },
    { question: "Sie liest ___ Zeitung (newspaper).", answers: ["eine"] },
    { question: "Ich trinke ___ Kaffee (coffee).", answers: ["einen"] },
    { question: "Das ist ___ Idee (idea).", answers: ["eine"] },
    { question: "Ich habe ___ Handy (mobile phone).", answers: ["ein"] },

    // NEGATION WITH KEIN
    { question: "(Article) Ich habe ___ Geld (money).", answers: ["kein"] },
    { question: "(Article) Sie hat ___ Freunde (friends).", answers: ["keine"] },
    { question: "(Article) Wir kaufen ___ Wasser (water).", answers: ["kein"] },
    { question: "(Article) Das ist ___ Auto (car).", answers: ["kein"] },
    { question: "(Article) Das sind ___ Bücher (books).", answers: ["keine"] },
],



};

const conjugationsDB = {
    core_verbs_pack1: [
    { question: "I am", answers: ["ich bin"] },
    { question: "You are (singular, informal)", answers: ["du bist"] },
    { question: "He is", answers: ["er ist"] },
    { question: "She is", answers: ["sie ist"] },
    { question: "It is", answers: ["es ist"] },
    { question: "We are", answers: ["wir sind"] },
    { question: "You are (plural, informal)", answers: ["ihr seid"] },
    { question: "They are", answers: ["sie sind"] },
    { question: "You are (formal)", answers: ["Sie sind"] },
    { question: "I have", answers: ["ich habe"] },
    { question: "You have (singular, informal)", answers: ["du hast"] },
    { question: "He has", answers: ["er hat"] },
    { question: "She has", answers: ["sie hat"] },
    { question: "It has", answers: ["es hat"] },
    { question: "We have", answers: ["wir haben"] },
    { question: "You have (plural, informal)", answers: ["ihr habt"] },
    { question: "They have", answers: ["sie haben"] },
    { question: "You have (formal)", answers: ["Sie haben"] },
    { question: "I go", answers: ["ich gehe"] },
    { question: "You go (singular, informal)", answers: ["du gehst"] },
    { question: "He goes", answers: ["er geht"] },
    { question: "She goes", answers: ["sie geht"] },
    { question: "It goes", answers: ["es geht"] },
    { question: "We go", answers: ["wir gehen"] },
    { question: "You go (plural, informal)", answers: ["ihr geht"] },
    { question: "They go", answers: ["sie gehen"] },
    { question: "You go (formal)", answers: ["Sie gehen"] },
    { question: "I do / make", answers: ["ich mache"] },
    { question: "You do / make (singular, informal)", answers: ["du machst"] },
    { question: "He does / makes", answers: ["er macht"] },
    { question: "She does / makes", answers: ["sie macht"] },
    { question: "It does / makes", answers: ["es macht"] },
    { question: "We do / make", answers: ["wir machen"] },
    { question: "You do / make (plural, informal)", answers: ["ihr macht"] },
    { question: "They do / make", answers: ["sie machen"] },
    { question: "You do / make (formal)", answers: ["Sie machen"] },
    { question: "I come", answers: ["ich komme"] },
    { question: "You come (singular, informal)", answers: ["du kommst"] },
    { question: "He comes", answers: ["er kommt"] },
    { question: "She comes", answers: ["sie kommt"] },
    { question: "It comes", answers: ["es kommt"] },
    { question: "We come", answers: ["wir kommen"] },
    { question: "You come (plural, informal)", answers: ["ihr kommt"] },
    { question: "They come", answers: ["sie kommen"] },
    { question: "You come (formal)", answers: ["Sie kommen"] },
],

};

// Spanish translations for the drill prompts.
// The original database keeps German as the expected answer; these translations
// make the exercise Spanish -> German instead of English -> German.
const spanishTranslations = {
  "Monday": "lunes",
  "Tuesday": "martes",
  "Wednesday": "miércoles",
  "Thursday": "jueves",
  "Friday": "viernes",
  "Saturday": "sábado",
  "Sunday": "domingo",
  "January": "enero",
  "February": "febrero",
  "March": "marzo",
  "April": "abril",
  "May": "mayo",
  "June": "junio",
  "July": "julio",
  "August": "agosto",
  "September": "septiembre",
  "October": "octubre",
  "November": "noviembre",
  "December": "diciembre",
  "Spring": "primavera",
  "Summer": "verano",
  "Autumn": "otoño",
  "Winter": "invierno",
  "Apartment": "apartamento",
  "Balcony": "balcón",
  "Bathroom": "baño",
  "Bed": "cama",
  "Bedroom": "dormitorio",
  "Door": "puerta",
  "Garden": "jardín",
  "Hallway": "pasillo",
  "House": "casa",
  "Kitchen": "cocina",
  "Living room": "salón",
  "Room": "habitación",
  "Fridge": "frigorífico",
  "Oven": "horno",
  "Lamp": "lámpara",
  "Table": "mesa",
  "Chair": "silla",
  "Window": "ventana",
  "Sofa": "sofá",
  "Toilet": "aseo",
  "Black": "negro",
  "Blue": "azul",
  "Brown": "marrón",
  "Gray": "gris",
  "Green": "verde",
  "Orange": "naranja",
  "Pink": "rosa",
  "Purple": "morado",
  "Red": "rojo",
  "White": "blanco",
  "Yellow": "amarillo",
  "Brother": "hermano",
  "Sister": "hermana",
  "Mother": "madre",
  "Father": "padre",
  "Grandfather": "abuelo",
  "Grandmother": "abuela",
  "Grandparents": "abuelos",
  "Parents": "padres",
  "Aunt": "tía",
  "Uncle": "tío",
  "Cousin (female)": "prima",
  "Cousin (male)": "primo",
  "Daughter": "hija",
  "Son": "hijo",
  "Child": "niño/a",
  "Children": "niños/as",
  "Nephew": "sobrino",
  "Niece": "sobrina",
  "Husband": "marido",
  "Wife": "esposa",
  "Siblings": "hermanos/as",
  "Coat": "abrigo",
  "Dress": "vestido",
  "Gloves": "guantes",
  "Hat/Cap": "sombrero/gorra",
  "Jacket": "chaqueta",
  "Jeans": "vaqueros",
  "Pants": "pantalones",
  "Scarf": "bufanda",
  "Shirt": "camisa",
  "Shoes": "zapatos",
  "Skirt": "falda",
  "Socks": "calcetines",
  "Suit": "traje",
  "Sweater": "jersey",
  "T-shirt": "camiseta",
  "airplane": "avión",
  "airport": "aeropuerto",
  "bicycle": "bicicleta",
  "bus": "autobús",
  "car": "coche",
  "journey / trip": "viaje",
  "luggage": "equipaje",
  "map": "mapa",
  "motorcycle": "moto",
  "passport": "pasaporte",
  "station": "estación",
  "stop (bus/tram)": "parada (autobús/tranvía)",
  "subway, metro": "metro",
  "ticket": "billete",
  "train": "tren",
  "tram": "tranvía",
  "vacation / holiday": "vacaciones",
  "the arm": "el brazo",
  "the back": "la espalda",
  "the body": "el cuerpo",
  "the cloud": "la nube",
  "the ear": "la oreja",
  "the earth / soil": "la tierra",
  "the eye": "el ojo",
  "the face": "la cara",
  "the flower": "la flor",
  "the fog": "la niebla",
  "the foot": "el pie",
  "the forest": "el bosque",
  "the grass": "la hierba",
  "the hand": "la mano",
  "the head": "la cabeza",
  "the heart": "el corazón",
  "the lake": "el lago",
  "the leg": "la pierna",
  "the medicine": "el medicamento",
  "the moon": "la luna",
  "the mountain": "la montaña",
  "the mouth": "la boca",
  "the nose": "la nariz",
  "the pain": "el dolor",
  "the rain": "la lluvia",
  "the river": "el río",
  "the sea": "el mar",
  "the sky": "el cielo",
  "the snow": "la nieve",
  "the star": "la estrella",
  "the stomach/belly": "el estómago/la barriga",
  "the storm": "la tormenta",
  "the sun": "el sol",
  "the tooth": "el diente",
  "the tree": "el árbol",
  "the weather": "el tiempo",
  "the wind": "el viento",
  "the company": "la empresa",
  "the construction site": "la obra",
  "the factory": "la fábrica",
  "the farm": "la granja",
  "the hospital": "el hospital",
  "the meeting": "la reunión",
  "the office": "la oficina",
  "the restaurant": "el restaurante",
  "the school": "la escuela",
  "the shop / store": "la tienda",
  "photography / to take photos": "fotografía / hacer fotos",
  "gardening": "jardinería",
  "to bake": "hornear",
  "to brush teeth": "cepillarse los dientes",
  "to camp": "acampar",
  "to clean": "limpiar",
  "to cook": "cocinar",
  "to cycle": "montar en bicicleta",
  "to dance": "bailar",
  "to do yoga": "hacer yoga",
  "to draw": "dibujar",
  "to drive": "conducir",
  "to eat dinner": "cenar",
  "to eat lunch": "comer",
  "to fish": "pescar",
  "to fly": "volar",
  "to get dressed": "vestirse",
  "to get up": "levantarse",
  "to go shopping": "ir de compras",
  "to go to bed": "irse a la cama",
  "to go to the cinema": "ir al cine",
  "to go to work": "ir a trabajar",
  "to have breakfast": "desayunar",
  "to hike": "hacer senderismo",
  "to listen to music": "escuchar música",
  "to paint": "pintar",
  "to play board games": "jugar a juegos de mesa",
  "to play guitar": "tocar la guitarra",
  "to play piano": "tocar el piano",
  "to play video games": "jugar a videojuegos",
  "to read": "leer",
  "to read comics": "leer cómics",
  "to relax": "relajarse",
  "to run / jog": "correr / hacer footing",
  "to shower": "ducharse",
  "to sing": "cantar",
  "to sleep": "dormir",
  "to study": "estudiar",
  "to swim": "nadar",
  "to travel": "viajar",
  "to wake up": "despertarse",
  "to wash": "lavarse",
  "to watch TV": "ver la televisión",
  "to watch movies": "ver películas",
  "to work": "trabajar",
  "artist (female)": "artista (mujer)",
  "artist (male)": "artista (hombre)",
  "cook/chef (female)": "cocinera",
  "cook/chef (male)": "cocinero",
  "doctor (female)": "médica",
  "doctor (male)": "médico",
  "driver (female)": "conductora",
  "driver (male)": "conductor",
  "engineer (female)": "ingeniera",
  "engineer (male)": "ingeniero",
  "farmer (female)": "agricultora",
  "farmer (male)": "agricultor",
  "firefighter (female)": "bombera",
  "firefighter (male)": "bombero",
  "hairdresser (female)": "peluquera",
  "hairdresser (male)": "peluquero",
  "mechanic (female)": "mecánica",
  "mechanic (male)": "mecánico",
  "musician (female)": "música",
  "musician (male)": "músico",
  "nurse (female)": "enfermera",
  "nurse (male)": "enfermero",
  "police officer (female)": "policía (mujer)",
  "police officer (male)": "policía (hombre)",
  "programmer (female)": "programadora",
  "programmer (male)": "programador",
  "salesperson (female)": "vendedora",
  "salesperson (male)": "vendedor",
  "student (university) (female)": "estudiante universitaria",
  "student (university) (male)": "estudiante universitario",
  "teacher (female)": "profesora",
  "teacher (male)": "profesor",
  "waiter (male)": "camarero",
  "waitress (female)": "camarera",
  "Albania": "Albania",
  "Armenia (sometimes considered Europe)": "Armenia",
  "Austria": "Austria",
  "Belarus": "Bielorrusia",
  "Belgium": "Bélgica",
  "Bosnia and Herzegovina": "Bosnia y Herzegovina",
  "Bulgaria": "Bulgaria",
  "Croatia": "Croacia",
  "Cyprus": "Chipre",
  "Czech Republic": "República Checa",
  "Denmark": "Dinamarca",
  "Estonia": "Estonia",
  "Finland": "Finlandia",
  "France": "Francia",
  "Georgia (sometimes considered Europe)": "Georgia",
  "Germany": "Alemania",
  "Greece": "Grecia",
  "Hungary": "Hungría",
  "Iceland": "Islandia",
  "Ireland": "Irlanda",
  "Italy": "Italia",
  "Kosovo": "Kosovo",
  "Latvia": "Letonia",
  "Lithuania": "Lituania",
  "Luxembourg": "Luxemburgo",
  "Malta": "Malta",
  "Moldova": "Moldavia",
  "Montenegro": "Montenegro",
  "Netherlands": "Países Bajos",
  "North Macedonia": "Macedonia del Norte",
  "Norway": "Noruega",
  "Poland": "Polonia",
  "Portugal": "Portugal",
  "Romania": "Rumanía",
  "Russia": "Rusia",
  "Serbia": "Serbia",
  "Slovakia": "Eslovaquia",
  "Slovenia": "Eslovenia",
  "Spain": "España",
  "Sweden": "Suecia",
  "Switzerland": "Suiza",
  "Ukraine": "Ucrania",
  "United Kingdom": "Reino Unido",
  "Albanian (female)": "albanesa",
  "Albanian (male)": "albanés",
  "Armenian (female)": "armenia",
  "Armenian (male)": "armenio",
  "Austrian (female)": "austriaca",
  "Austrian (male)": "austriaco",
  "Belarusian (female)": "bielorrusa",
  "Belarusian (male)": "bielorruso",
  "Belgian (female)": "belga",
  "Belgian (male)": "belga",
  "Bosnian (female)": "bosnia",
  "Bosnian (male)": "bosnio",
  "British (female)": "británica",
  "British (male)": "británico",
  "Bulgarian (female)": "búlgara",
  "Bulgarian (male)": "búlgaro",
  "Croatian (female)": "croata",
  "Croatian (male)": "croata",
  "Cypriot (female)": "chipriota",
  "Cypriot (male)": "chipriota",
  "Czech (female)": "checa",
  "Czech (male)": "checo",
  "Danish (female)": "danesa",
  "Danish (male)": "danés",
  "Dutch (female)": "neerlandesa",
  "Dutch (male)": "neerlandés",
  "Estonian (female)": "estonia",
  "Estonian (male)": "estonio",
  "Finnish (female)": "finlandesa",
  "Finnish (male)": "finlandés",
  "French (female)": "francesa",
  "French (male)": "francés",
  "Georgian (female)": "georgiana",
  "Georgian (male)": "georgiano",
  "German (female)": "alemana",
  "German (male)": "alemán",
  "Greek (female)": "griega",
  "Greek (male)": "griego",
  "Hungarian (female)": "húngara",
  "Hungarian (male)": "húngaro",
  "Icelandic (female)": "islandesa",
  "Icelandic (male)": "islandés",
  "Irish (female)": "irlandesa",
  "Irish (male)": "irlandés",
  "Italian (female)": "italiana",
  "Italian (male)": "italiano",
  "Kosovar (female)": "kosovar",
  "Kosovar (male)": "kosovar",
  "Latvian (female)": "letona",
  "Latvian (male)": "letón",
  "Lithuanian (female)": "lituana",
  "Lithuanian (male)": "lituano",
  "Luxembourgish (female)": "luxemburguesa",
  "Luxembourgish (male)": "luxemburgués",
  "Macedonian (female)": "macedonia",
  "Macedonian (male)": "macedonio",
  "Maltese (female)": "maltesa",
  "Maltese (male)": "maltés",
  "Moldovan (female)": "moldava",
  "Moldovan (male)": "moldavo",
  "Montenegrin (female)": "montenegrina",
  "Montenegrin (male)": "montenegrino",
  "Norwegian (female)": "noruega",
  "Norwegian (male)": "noruego",
  "Polish (female)": "polaca",
  "Polish (male)": "polaco",
  "Portuguese (female)": "portuguesa",
  "Portuguese (male)": "portugués",
  "Romanian (female)": "rumana",
  "Romanian (male)": "rumano",
  "Russian (female)": "rusa",
  "Russian (male)": "ruso",
  "Serbian (female)": "serbia",
  "Serbian (male)": "serbio",
  "Slovak (female)": "eslovaca",
  "Slovak (male)": "eslovaco",
  "Slovenian (female)": "eslovena",
  "Slovenian (male)": "esloveno",
  "Spanish (female)": "española",
  "Spanish (male)": "español",
  "Swedish (female)": "sueca",
  "Swedish (male)": "sueco",
  "Swiss (female)": "suiza",
  "Swiss (male)": "suizo",
  "Ukrainian (female)": "ucraniana",
  "Ukrainian (male)": "ucraniano",
  "I am": "soy",
  "You are (singular, informal)": "eres/estás",
  "He is": "es",
  "She is": "es",
  "It is": "es",
  "We are": "somos/estamos",
  "You are (plural, informal)": "sois/estáis",
  "They are": "son/están",
  "You are (formal)": "es/está",
  "I have": "tengo",
  "You have (singular, informal)": "tienes",
  "He has": "tiene",
  "She has": "tiene",
  "It has": "tiene",
  "We have": "tenemos",
  "You have (plural, informal)": "tenéis",
  "They have": "tienen",
  "You have (formal)": "tiene",
  "I go": "voy",
  "You go (singular, informal)": "vas",
  "He goes": "va",
  "She goes": "va",
  "It goes": "va",
  "We go": "vamos",
  "You go (plural, informal)": "vais",
  "They go": "van",
  "You go (formal)": "va",
  "I do / make": "hago",
  "You do / make (singular, informal)": "haces",
  "He does / makes": "hace",
  "She does / makes": "hace",
  "It does / makes": "hace",
  "We do / make": "hacemos",
  "You do / make (plural, informal)": "hacéis",
  "They do / make": "hacen",
  "You do / make (formal)": "hace",
  "I come": "vengo",
  "You come (singular, informal)": "vienes",
  "He comes": "viene",
  "She comes": "viene",
  "It comes": "viene",
  "We come": "venimos",
  "You come (plural, informal)": "venís",
  "They come": "vienen",
  "You come (formal)": "viene",
  "(The) ___ Tisch (table)": "___ mesa (mesa)",
  "(The) ___ Lampe (lamp)": "___ lámpara (lámpara)",
  "(The) ___ Buch (book)": "___ libro (libro)",
  "(The) ___ Fenster (window)": "___ ventana (ventana)",
  "(The) ___ Stühle (chairs)": "___ sillas (sillas)",
  "(The) ___ Apfel (apple)": "___ manzana (manzana)",
  "(The) ___ Banane (banana)": "___ plátano (plátano)",
  "(The) ___ Wasser (water)": "___ agua (agua)",
  "(The) ___ Lehrer (teacher, male)": "___ profesor (profesor)",
  "(The) ___ Lehrerin (teacher, female)": "___ profesora (profesora)",
  "Ich habe ___ Hund (dog).": "Tengo ___ perro (perro).",
  "Sie hat ___ Katze (cat).": "Ella tiene ___ gato (gato).",
  "Er kauft ___ Auto (car).": "Él compra ___ coche (coche).",
  "Wir brauchen ___ Tisch (table).": "Necesitamos ___ mesa (mesa).",
  "Das ist ___ Problem (problem).": "Este es ___ problema (problema).",
  "Er schreibt ___ Brief (letter).": "Él escribe ___ carta (carta).",
  "Sie liest ___ Zeitung (newspaper).": "Ella lee ___ periódico (periódico).",
  "Ich trinke ___ Kaffee (coffee).": "Bebo ___ café (café).",
  "Das ist ___ Idee (idea).": "Esta es ___ idea (idea).",
  "Ich habe ___ Handy (mobile phone).": "Tengo ___ móvil (móvil).",
  "(Article) Ich habe ___ Geld (money).": "(Artículo) Tengo ___ dinero (dinero).",
  "(Article) Sie hat ___ Freunde (friends).": "(Artículo) Ella tiene ___ amigos (amigos).",
  "(Article) Wir kaufen ___ Wasser (water).": "(Artículo) Compramos ___ agua (agua).",
  "(Article) Das ist ___ Auto (car).": "(Artículo) Este es ___ coche (coche).",
  "(Article) Das sind ___ Bücher (books).": "(Artículo) Estos son ___ libros (libros).",
  "the colleague (female)": "la compañera",
  "the colleague (male)": "el compañero",
  "the doctor (female)": "la médica",
  "the doctor (male)": "el médico"
};

function getSpanishTranslation(question) {
    return spanishTranslations[question] || question;
}

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Quiz state
let topicKey = null;
let questions = [];
let originalTopic = [];
let wrongQuestions = [];
let currentQuestion = 0;
let score = 0;

// Start a new round with a topic
function startTopic(key, customQuestions) {
    // Use vocabDB, grammarDB, conjugationsDB for topic lookup
    let topicArr = null;
    if (key && vocabDB[key]) topicArr = vocabDB[key];
    else if (key && grammarDB[key]) topicArr = grammarDB[key];
    else if (key && conjugationsDB[key]) topicArr = conjugationsDB[key];
    else if (customQuestions) topicArr = customQuestions;
    else topicArr = [];

    topicKey = key;
    originalTopic = topicArr;
    questions = shuffle(topicArr).slice(0, Math.min(10, topicArr.length));
    wrongQuestions = []; // Ensure mistakes are cleared at the start
    currentQuestion = 0;
    score = 0;
    showSelect(false);
    setResult('');
    loadQuestion();
}

// Show/hide topic selector
function showSelect(show) {
    const optionMenu = document.getElementById('select_topic');
    const selectButton = document.getElementsByClassName('open-select')[0];
    const quizContainer = document.getElementsByClassName('quiz-container')[0];
    if (show) {
        optionMenu.style.display = 'flex';
        selectButton.style.display = 'none';
        if (quizContainer) quizContainer.style.display = 'none';
    } else {
        optionMenu.style.display = 'none';
        selectButton.style.display = 'block';
        if (quizContainer) quizContainer.style.display = 'block';
    }
}

// Set result message
function setResult(msg, color = 'black') {
    const resultElement = document.getElementById("result");
    resultElement.textContent = msg;
    resultElement.style.color = color;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Load current question or show final score
function loadQuestion() {
    const headingone = document.getElementsByTagName('h1')[0];
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const resultElement = document.getElementById("result");

    headingone.style.display = 'none';

    if (currentQuestion < questions.length) {
        const currentQuestionData = questions[currentQuestion];

        questionElement.innerHTML = `<span class="language-label">ES → DE</span><span class="question-text">${escapeHtml(getSpanishTranslation(currentQuestionData.question))}</span>`;
        setResult("");

        optionsContainer.innerHTML = "";

        // Free-text input only
        const input = document.createElement("input");
        input.type = "text";
        input.autofocus = true;
        input.id = "answer-input";

        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                submitButton.click();
            }
        });

        const submitButton = document.createElement("button");
        submitButton.textContent = "Comprobar";
        submitButton.id = "submit-button";
        submitButton.addEventListener("click", () => {
            checkInputAnswer(input.value, currentQuestionData.answers, optionsContainer, input, submitButton);
        });

        optionsContainer.appendChild(input);
        optionsContainer.appendChild(submitButton);

    } else {
        // Final score
        questionElement.textContent = "¡Test completado!";
        optionsContainer.innerHTML = "";
        resultElement.innerHTML = "Puntuación: " + score + " de " + questions.length + '.<br><br>Total: ' + parseInt(score * 10 / questions.length) + ' sobre 10.';

        // Only show review mistakes button if there are mistakes
        if (wrongQuestions.length > 0) {
            const reviewButton = document.createElement("button");
            reviewButton.textContent = "Repasar errores";
            optionsContainer.appendChild(reviewButton);
            reviewButton.addEventListener("click", () => {
                // Limit review round to max 10 questions
                const reviewSet = shuffle(wrongQuestions).slice(0, Math.min(10, wrongQuestions.length));
                startTopic(null, reviewSet);
            });
        }

        // New round button
        const newRoundButton = document.createElement("button");
        newRoundButton.textContent = "Nueva ronda";
        optionsContainer.appendChild(newRoundButton);
        newRoundButton.addEventListener("click", () => startTopic(topicKey, originalTopic));

        // Choose another topic button
        const chooseTopicButton = document.createElement("button");
        chooseTopicButton.textContent = "Elegir otro tema";
        optionsContainer.appendChild(chooseTopicButton);
        chooseTopicButton.addEventListener("click", () => showSelect(true));
    }
}

// Modified checkInputAnswer to prompt for correct answer if first attempt is wrong
function checkInputAnswer(inputValue, correctAnswers, optionsContainer, inputElem, submitBtn) {
    if (correctAnswers.some(ans => inputValue.trim().toLowerCase() === ans.toLowerCase())) {
        score++;
        setResult("¡Correcto!", "green");
        currentQuestion++;
        setTimeout(() => {
            loadQuestion();
        }, 1500);
    } else {
        const q = questions[currentQuestion];
        if (!wrongQuestions.includes(q)) {
            wrongQuestions.push(q);
        }
        setResult("Prueba con: " + correctAnswers.join(", "), "orange");
        // Only add mistake if not already present

        // Remove previous input/button
        if (inputElem && submitBtn) {
            inputElem.disabled = true;
            submitBtn.disabled = true;
        }

        // Prompt for correct answer
        const tryAgainInput = document.createElement("input");
        tryAgainInput.type = "text";
        tryAgainInput.autofocus = true;
        tryAgainInput.id = "try-again-input";

        tryAgainInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                tryAgainBtn.click();
            }
        });

        const tryAgainBtn = document.createElement("button");
        tryAgainBtn.textContent = "Probar respuesta correcta";
        tryAgainBtn.addEventListener("click", () => {
            const tryValue = tryAgainInput.value;
            if (correctAnswers.some(ans => tryValue.trim().toLowerCase() === ans.toLowerCase())) {
                setResult("¡Correcto!", "green");
            } else {
                setResult("Sigue sin ser correcto. Respuesta: " + correctAnswers.join(", "), "red");
            }
            currentQuestion++;
            setTimeout(() => {
                loadQuestion();
            }, 3000);
        });

        optionsContainer.appendChild(document.createElement("br"));
        optionsContainer.appendChild(tryAgainInput);
        optionsContainer.appendChild(tryAgainBtn);
    }
}

// Topic selection from HTML buttons
window.theme_is = function(chosen) {
    // Try to find the topic key in all DBs
    for (const key in vocabDB) {
        if (vocabDB[key] === chosen) {
            startTopic(key);
            return;
        }
    }
    for (const key in grammarDB) {
        if (grammarDB[key] === chosen) {
            startTopic(key);
            return;
        }
    }
    for (const key in conjugationsDB) {
        if (conjugationsDB[key] === chosen) {
            startTopic(key);
            return;
        }
    }
    // If chosen is not found, fallback to original logic
    if (Array.isArray(chosen)) {
        startTopic(null, chosen);
    }
};

// Open/close select menu
window.openSelect = function() { showSelect(true); };
window.closeSelect = function() { showSelect(false); };
