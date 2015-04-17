var maleusers = {
  justin : 'http://www.instagram.com/justinbieber',
  neymar: 'http://www.instagram.com/neymarjr',
  cristiano: 'http://www.instagram.com/Cristiano',
  kevin: 'http://www.instagram.com/kevinhart4real',
  harry: 'http://www.instagram.com/harrystyles'
};

/**
 * function: malelList()
 *
 * A self-executing function (a function that calls itself) to add
 * the male users to the nav tag.
 *
 * @param arg An object containing the urls to add.
 * @return void
 */
var maleList = function(arg) {

    // Select all elements in the DOM with the class 'maleicons'.
    // This function returns an HTML Collection.
    var navs = document.getElementsByClassName('maleicons');
    console.log(navs);

    // Iterate over the array of DOM elements grabbed  earlier.
    for (var i = navs.length - 1; i >= 0; i--){

	var output = document.createElement("tr");

	// Iterate over the functions to create the <td> element
	// for each male icon in the list of maleusers
	
        for (var key in maleusers) {
    
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
}(maleusers); // The open brackets here call the function automatically,
// invoked on the variable 'maleusers'

