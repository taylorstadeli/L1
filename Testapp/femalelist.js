var femaleusers = {
  beyonce : 'http://www.instagram.com/beyonce',
  kim: 'http://www.instagram.com/kimkardashian',
  ariana: 'http://www.instagram.com/arianagrande',
  selena: 'http://www.instagram.com/selenagomez',
  taylor: 'http://www.instagram.com/taylorswift',
  kendall:'http://www.instagram.com/kendalljenner',
  kylie:'http://www.instagram.com/kyliejenner',
  khloe:'http://www.instagram.com/khloekardashian',
  miley:'http://www.instagram.com/mileycyrus',
  nicki:'http://instagram.com/nikiminaj',
  rihanna:'http://www.instagram.com/badgalriri',
  katy:'http://www.instagram.com/katyperry',
  kourtney:'http://www.instagram.com/kourtneykardash',
  demi:'http://www.instagram.com/Ddlovato',
  jlo:'http://www.instagram.com/Jlo'
};

/**
 * function: femaleList()
 *
 * A self-executing function (a function that calls itself) to add
 * the male users to the nav tag.
 *
 * @param arg An object containing the urls to add.
 * @return void
 */
var femaleList = function(arg) {

    // Select all elements in the DOM with the class 'maleicons'.
    // This function returns an HTML Collection.
    var navs = document.getElementsByClassName('femaleicons');
    console.log(navs);

    // Iterate over the array of DOM elements grabbed  earlier.
    for (var i = navs.length - 1; i >= 0; i--){

	var output = document.createElement("tr");

	// Iterate over the functions to create the <td> element
	// for each male icon in the list of femaleusers
	
        for (var key in femaleusers) {
    
            var createA = document.createElement('a');
	    createA.setAttribute('href', arg[key]);
            
	    var createImg = document.createElement('img');
	    createImg.setAttribute('src', "photos/" + key + ".png");
	    createImg.setAttribute('alt', "icon for " + key);
    
	    var li = document.createElement('td');
	    createA.appendChild(createImg);
	    li.appendChild(createA);
	    output.appendChild(li);

	}
        // navs[i].innerHTML = output;  This incorrectly appends an
	// [object HTMLUListElement] to the DOM.
	navs[i].appendChild(output);
    }
}(femaleusers); // The open brackets here call the function automatically,
// invoked on the variable 'femaleusers'
