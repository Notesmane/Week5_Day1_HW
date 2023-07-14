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
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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

// =====================================================================

// 4.0 Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl. - //* done
const subMenuEl = document.querySelector('#sub-menu');

// 4.1 Set the height subMenuEl element to be 100%. //* done
subMenuEl.style.height = '100%';

// 4.2 Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property. //* done
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// 4.3 Add the class of flex-around to the subMenuEl element. //* done
subMenuEl.classList.add('flex-around');

//4.4 Set the CSS positionproperty of subMenuElto the value of absolute. //* done

// 4.5 Set the CSS top property of subMenuElto the value of 0. //* done


// 5.1 Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
// Declare a global showing SubMenuvariable and initialize it to false;
const topMenuLinks = document.querySelectorAll('a');
const showingSubMenu = false;
// console.log(topMenuEl);
// console.log(topMenuLinks);
// console.log(subMenuEl);


// 5.2 Attach a delegated 'click' event listener to topMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault()method.
// The second line of code function should immediately return if the element clicked was not an <a>element.
// console.logthe content of the <a>to verify the handler is working.

topMenuEl.addEventListener('click', function(event) {
  event.preventDefault();
  if(event.target.tagName !== 'a') {
    return
  }
  console.log(e.target);
});


// topMenuEl.addEventListener('click', function(event) {
//   event.preventDefault()
//   // console.log(EventSource);
//   }
//   if(event.target.tagName !== 'a') {
//     return
//   }
//   console.log(e.target);
// });

