angular.module('app.services')

.service( 'TriviaService', [function(){

  var trivia = {
  	questions: [
  		{
  			q: 'How much beer can an astronaut drink in space?',
  			o: {
  				"some": "Some",
  				"lots": "Lots!",
  				"none": "None :(",
  			},
  			a: "lots"
  		},
  		{
  			q: '6&rsquo; 9&rdquo; Hafth&oacute;r J&uacute;l&iacute;us Bj&ouml;rnsson, also known as &ldquo;The Mountain&rdquo; in HBO&rsquo;s Game of Thrones, is a world-record breaking keg tosser. How high did he throw a keg in November 2015?',
  			o: {
          "14-8": '14&rsquo; 8&rdquo;',
          "20-3": '20&rsquo; 3&rdquo;',
          "24-6": '24&rsquo; 6&rdquo;',
          "32-32": '32&rsquo; 8&rdquo;'
  			},
  			a: "24-6"
  		},
  		{
  			q: 'Approximately how many kg of CO2 equivalents did brewers reduce their carbon footprints by through using MicroStar&rsquo;s pool of kegs rather than owning their own?',
  			o: {
  				"3k": "3,000",
  				"30k": "30,000",
  				"300k": "300,000",
  				"3m": '3,000,000'
  			},
  			a: "3m"
  		},
  		{
  			q: 'Which of these is not the name of a beer?',
  			o: {
  				"pyp": "Poop Your Pants",
  				"idmp": "I Dunkled In My Pants",
  				"pw": "Prestige Worldwide",
  				"rock": "Rock Out with Your Bock Out",
  			},
  			a: "pw"
  		},
  		{
  			q: 'The 1980&rsquo;s show Knight Rider was syndicated in Latin Americ. What was it called?',
  			o: {
  				"a": "El Coche Fantastico",
  				"b": "Knight Rider",
  				"c": "Noche Jinete",
  			},
  			a: "a"
  		},
  		{
  			q: 'Which of these is not the name of a beer?',
  			o: {
  				"a": "Smells Like a Safety Meeting",
  				"b": "BEER",
  				"c": "Tom Brady Sucks",
  				"d": "Boats and Gose",
  			},
  			a: "c"
  		},
  		{
  			q: 'According to the Brewer&rsquo;s Association&rsquo;s 2015 Brewery Volume Report, who was the 7th largest craft brewer?',
  			o: {
  				"a": "Goose Island",
  				"b": "Lagunitas",
  				"c": "Gigantic",
  				"d": "Bell's",
  				"e": "Deschutes"
  			},
  			a: "d"
  		},
  		{
  			q: 'Which is NOT one of the three &ldquo;Can&rsquo;t Fail&rdquo; principles to matching food and beer according the Brewers Association?',
  			o: {
  				"a": "Match Strength with Strength",
  				"b": "Find Harmonies",
  				"c": "Consider Sweetness, Bitterness, Carbonation, Heat (Spice), and Richness",
  				"d": "When in Doubt, Pair with Cool Ranch Doritos",
  			},
  			a: "d"
  		},
  		{
  			q: 'What&rsquo;s your favorite color?',
  			o: {
  				"a": "Burnt Orange",
  				"b": "Forest Green",
  				"c": "Aqua Blue",
  				"d": "Camouflage",
  			},
  			a: "b"
  		},
  		{
  			q: 'What do they call a Quarter Pounder in France?',
  			o: {
  				"a": "Quarter Pounder",
  				"b": "Le Big Mac",
  				"c": "Royale with Cheese",
  				"d": "Trimestre du Boeuf",
  			},
  			a: "xxx"
  		},
  		{
  			q: 'Which beer won gold for Imperial Pale Ale at the 2016 World Beer Cup?',
  			o: {
  				"a": "Good Juju",
  				"b": "Hop Juju",
  				"c": "Cindy Loo Who"
  			},
  			a: "b"
  		},
  		{
  			q: 'What spice sometimes used in beer smells like Fruit Loops?',
  			o: {
  				"a": "Paprika",
  				"b": "Marjoram",
  				"c": "Coriander",
  				"d": "Cinnamon",
  			},
  			a: "c"
  		},
  		{
  			q: 'Which day of the year generates more sales for the whipped cream industry than any other single day?',
  			o: {
  				"a": "Thanksgiving",
  				"b": "Christmas",
  				"c": "May 12",
  				"d": "February 14 (put your thinking caps on, people&hellip;)",
  			},
  			a: "d"
  		},
  		{
  			q: 'Which of these is not the name of a brewery?',
  			o: {
  				"a": "Paprika",
  				"b": "Marjoram",
  				"c": "Coriander",
  				"d": "Cinnamon",
  			},
  			a: "ccc"
  		},
  		{
  			q: ' Which singer&rsquo;s real name is Stefani Joanne Angelina Germanotta?',
  			o: {
  				"a": "Paprika",
  				"b": "Marjoram",
  				"c": "Coriander",
  				"d": "Cinnamon",
  			},
  			a: "ccc"
  		},
  		{
  			q: 'Approximately how many liters in a 1/6bbl keg?',
  			o: {
  				"a": "Paprika",
  				"b": "Marjoram",
  				"c": "Coriander",
  				"d": "Cinnamon",
  			},
  			a: "ccc"
  		},
  		{
  			q: 'In the Brewer’s Association’s 2015 Brewery Data, which animal is incorporated most frequently into brewery names?',
  			o: {
  				"a": "Paprika",
  				"b": "Marjoram",
  				"c": "Coriander",
  				"d": "Cinnamon",
  			},
  			a: "ccc"
  		},
  		{
  			q: 'How many letters are there in the German alphabet (HINT: Includes Umlauts and the ss-Ligature)',
  			o: {
  				"a": "Paprika",
  				"b": "Marjoram",
  				"c": "Coriander",
  				"d": "Cinnamon",
  			},
  			a: "ccc"
  		},
  		{
  			q: 'How many kegs does MicroStar and KegCraft have in their combined fleets?',
  			o: {
  				"a": "Paprika",
  				"b": "Marjoram",
  				"c": "Coriander",
  				"d": "Cinnamon",
  			},
  			a: "ccc"
  		},
  		{
  			q: 'What’s your favorite type of cat?',
  			o: {
  				"a": "Paprika",
  				"b": "Marjoram",
  				"c": "Coriander",
  				"d": "Cinnamon",
  			},
  			a: "d"
  		},
  		{
  			q: 'What’s your favorite type of dog?',
  			o: {
  				"a": "Paprika",
  				"b": "Marjoram",
  				"c": "Coriander",
  				"d": "Cinnamon",
  			},
  			a: "ccc"
  		},
  		{
  			q: 'What keg valve type are used in Guinness kegs?',
  			o: {
  				"a": "Paprika",
  				"b": "Marjoram",
  				"c": "Coriander",
  				"d": "Cinnamon",
  			},
  			a: "ccc"
  		},
  		{
  			q: 'What does  “R.R.” stand for in George R. R. Martin?',
  			o: {
  				"a": "Paprika",
  				"b": "Marjoram",
  				"c": "Coriander",
  				"d": "Cinnamon",
  			},
  			a: "ccc"
  		},
  		{
  			q: 'Which of the following is not an ingredient approved per the Reinheitsgebot?',
  			o: {
  				"a": "Paprika",
  				"b": "Marjoram",
  				"c": "Coriander",
  				"d": "Cinnamon",
  			},
  			a: "ccc"
  		},
  		{
  			q: 'Which of the following is not the name of a brewery?',
  			o: {
  				"a": "Paprika",
  				"b": "Marjoram",
  				"c": "Coriander",
  				"d": "Cinnamon",
  			},
  			a: "ccc"
  		},
  		{
  			q: 'Sobriety Test: Which is spelled correctly?',
  			o: {
  				"a": "Paprika",
  				"b": "Marjoram",
  				"c": "Coriander",
  				"d": "Cinnamon",
  			},
  			a: "ccc"
  		},
  		{
  			q: 'What test did Gambrinus accomplish to earn his crown and admiration of generations of beer drinkers? ',
  			o: {
  				"a": "Paprika",
  				"b": "Marjoram",
  				"c": "Coriander",
  				"d": "Cinnamon",
  			},
  			a: "ccc"
  		},
  		{
  			q: 'How is it said King Gambrinus was able to carry a full barrel (62 gallons of beer in wood)?',
  			o: {
  				"a": "Paprika",
  				"b": "Marjoram",
  				"c": "Coriander",
  				"d": "Cinnamon",
  			},
  			a: "ccc"
  		},
  		{
  			q: 'What was the location of the first United States Marine Recruiting Station?',
  			o: {
  				"a": "Paprika",
  				"b": "Marjoram",
  				"c": "A Bar",
  				"d": "Cinnamon",
  			},
  			a: "c"
  		},
  		{
  			q: 'In what country can beer be sold in vending machines, by street vendors and in train stations?',
  			o: {
  				"a": "Paprika",
  				"b": "Japan",
  				"c": "Coriander",
  				"d": "Cinnamon",
  			},
  			a: "b"
  		},
  		{
  			q: 'What is a labeorphilist?',
  			o: {
  				"a": "A beer bottle collector",
  				"b": "Brewing efficiency spcialist",
  				"c": "Label designer",
  				"d": "A what?",
  			},
  			a: "a"
  		},
  		{
  			q: 'What is Zythology?',
  			o: {
  				"a": "A city in Game of Thrones",
  				"b": "The study of beer and beer-making",
  				"c": "The process of harvesting hops",
  				"d": "A made-up word",
  			},
  			a: "b"
  		},
  		{
  			q: 'Which country drinks the most beer?',
  			o: {
  				"a": "Australia",
  				"b": "USA",
  				"c": "Germany",
  				"d": "Czech Republic",
  				"e": "Gondor",
  			},
  			a: "d",
  			n: "Per capita beer consumption in the Czech Republic ia almost 40 gallons a year."
  		},
  		{
  			q: 'What is Cenosillicaphobia?',
  			o: {
  				"a": "The fear of cold liquid",
  				"b": "The fear of carbonated beverages",
  				"c": "The fear of peach fuzz",
  				"d": "The fear of an empty beer glass",
  			},
  			a: "d"
  		},
  		{
  			q: 'How many people attend Oktoberfest in Munich every year?',
  			o: {
  				"a": "90,000",
  				"b": "800,000",
  				"c": "6,000,000",
  				"d": "9,000,000",
  			},
  			a: "c",
  		},
  		{
  			q: 'At any given time, what percentage of the world population is drunk?',
  			o: {
  				"a": "0.2%",
  				"b": "0.7%",
  				"c": "1.3%",
  				"d": "3.4%",
  				"e": "4.1%",
  			},
  			a: "b",
  			n: "That is about 50 million people!"
  		},
  		{
  			q: 'On what date in history was Prohibition repealed?',
  			o: {
  				"a": "October 10, 1915",
  				"b": "December 5, 1933",
  				"c": "July 4, 1940",
  				"d": "December 2, 1941",
  				"e": "December 5, 1944",
  			},
  			a: "b"
  		},
  		{
  			q: 'Which of the following hops varieties is not Noble?',
  			o: {
  				"a": "Hallertau",
  				"b": "Tettnanger",
  				"c": "Saaz",
  				"d": "Styrian Golding",
  			},
  			a: "d"
  		},
  		{
  			q: 'The Altbier style originated in which German city?',
  			o: {
  				"a": "Dusseldorf",
  				"b": "Cologne",
  				"c": "Berlin",
  				"d": "Munich",
  			},
  			a: "a"
  		},
  		{
  			q: 'Which of the following malts contains the most diastatic power?',
  			o: {
  				"a": "Black Malt",
  				"b": "Munich Malt",
  				"c": "Pilsen Malt",
  				"d": "Vienna Malt",
  			},
  			a: "c"
  		},
  		{
  			q: 'Sobriety Test: How many days are there in a year?',
  			o: {
  				"a": "365",
  				"b": "7",
  				"c": "365.25",
  				"d": "12",
  			},
  			a: "ccc",
  			n: 'Why do you think we have leap years!?'
  		},
  		{
  			q: 'A great deal of chemistry and biology goes into brewing a good beer. What is the terminology of the study of fermentation?',
  			o: {
  				"a": "Zymurgy",
  				"b": "Etymology",
  				"c": "Beerology",
  				"d": "Entomology",
  			},
  			a: "a"
  		}
  	]
  };
  return trivia
}]);