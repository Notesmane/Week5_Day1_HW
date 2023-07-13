// 1.0 Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main');

// 1.1 Set the background color of mainEl to the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

// 1.2 Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// 1.3 Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

// 2.0 Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
const topMenuEl = document.querySelector('nav');

//  2.1 Set the height topMenuElelement to be 100%.
topMenuEl.style.height = '100%';

// 2.2  Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// 2.3 Add a class of flex-aroundto topMenuEl.
topMenuEl.classList.add('flex-around');


// Menu data structure (copied from lab page)
var menuLinks = [
    {text: 'about', href: '/about'}, // each of these is an object with 2 elements
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

// 3.1 Iterate over the entire menuLinksarray and for each "link" object:
// Create an <a> element
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the topMenuElelement.

for (let link of menuLinks) { // this sets the 
    const a = document.createElement('a'); // created a variable for each of the and elements for the links
    a.setAttribute('href', link.href); // has 2 arguments/properties has the name(href) and the value is whats in quotatons
    a.innerText=link.text; // calls the text to show in each button
    topMenuEl.append(a); // this attaches the elements that were created to the parent
}
