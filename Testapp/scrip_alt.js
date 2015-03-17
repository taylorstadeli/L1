var maleusers = {
  justin : 'https://instagram.com/justinbieber/',
  neymar: 'https://instagram.com/neymarjr/',
 Cristiano: 'https://instagram.com/Cristiano/',
  kevin: 'https://instagram.com/Kevinhart4real/',
  harry:'https://instagram.com/Harrystyles/'
};
var femaleusers = {
  beyonce : 'http://facebook.com/viewsource',
  kim: 'http://twitter.com/planetoftheweb',
  ariana: 'http://flickr.com/planetotheweb',
  selena: 'http://youtube.com/planetoftheweb',
  taylor: 'http://youtube.com/planetoftheweb',
  kendall: 'http://facebook.com/viewsource',
  kylie: 'http://twitter.com/planetoftheweb',
  khloe: 'http://flickr.com/planetotheweb',
  miley: 'http://youtube.com/planetoftheweb',
  niki: 'http://youtube.com/planetoftheweb',
  rihanna: 'http://youtube.com/planetoftheweb',
  katy: 'http://facebook.com/viewsource',
  kourtney: 'http://twitter.com/planetoftheweb',
  demi: 'http://flickr.com/planetotheweb',
  jlo: 'http://youtube.com/planetoftheweb'
};
var brandusers = {
  instagram: 'http://facebook.com/viewsource',
  natgeo: 'http://twitter.com/planetoftheweb',
  nike: 'http://flickr.com/planetotheweb',
  9gag: 'http://youtube.com/planetoftheweb',
  VS: 'http://youtube.com/planetoftheweb'
};
/**
 * function: list()
 *
 * A self-executing function (a function that calls itself) to add
 * the instagram users photos to the page.
 *
 * @param arg An object containing the urls to add.
 * @return void
 */
var list = function(arg) {

    // Select all elements in the DOM with the class 'socialmediaicons'.
    // This function returns an HTML Collection.
    var navs = document.getElementsByClassName('socialmediaicons');
    console.log(navs);

    // Iterate over the array of DOM elements grabbed  earlier.
    for (var i = navs.length - 1; i >= 0; i--){

	var output = document.createElement("tr");

	// Iterate over the functions to create the <li> element
	// for each social media icon in the list of social
	// media.
        for (var key in maleusers) {
    
            var createA = document.createElement('a');
	    createA.setAttribute('href', arg[key]);
            
	    var createImg = document.createElement('img');
	    createImg.setAttribute('src', "photos/" + key + ".png");
	    createImg.setAttribute('alt', "icon for " + key);
    
	    var td = document.createElement('td');
	    createA.appendChild(createImg);
	    td.appendChild(createA);
	    output.appendChild(td);

	}
        // navs[i].innerHTML = output;  This incorrectly appends an
	// [object HTMLUListElement] to the DOM.
	navs[i].appendChild(output);
    }
}(maleusers); // The open brackets here call the function automatically,
// invoked on the variable 'socialMedia'




