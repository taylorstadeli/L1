var brandusers = {
  instagram : 'http://instagram.com/Instagram',
  Natgeo: 'http://instagram.com/Natgeo',
  nike: 'http://instagram.com/Nike',
  gag: 'http://instagram.com/9gag',
  VS: ' http://instagram.com/victoriassecret'
};

/**
 * function: brandlList()
 *
 * A self-executing function (a function that calls itself) to add
 * the brand users to the nav tag.
 *
 * @param arg An object containing the urls to add.
 * @return void
 */
var brandList = function(arg) {

    // Select all elements in the DOM with the class 'brandicons'.
    // This function returns an HTML Collection.
    var navs = document.getElementsByClassName('brandicons');
    console.log(navs);

    // Iterate over the array of DOM elements grabbed  earlier.
    for (var i = navs.length - 1; i >= 0; i--){

	var output = document.createElement("tr");

	// Iterate over the functions to create the <td> element
	// for each brand icon in the list of maleusers
	
        for (var key in brandusers) {
    
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
}(brandusers); // The open brackets here call the function automatically,
// invoked on the variable 'brandusers'
