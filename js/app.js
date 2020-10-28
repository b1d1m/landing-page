/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/**
 * Define Global Variables
 * 
*/
var navBar = document.getElementById('navbar__list');
var sec = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(sec) {
    for (let index = 0; index < sec.length; index++) {
        const navList = document.createElement('li');
        const secNumber = sec[index].getAttribute("data-nav");
        navList.innerHTML = '<a href"#" class="menu__link" data-link="'+sec[index].getAttribute('id')+'"> '+secNumber+' </a>';
        navBar.appendChild(navList);
    }
}
buildNav(sec);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrollToSec(){
    const navLinks = document.querySelectorAll("[data-link]");
    navLinks.forEach((item)=>{
        item.addEventListener("click", ()=>{
            let scrLink = document.getElementById(item.getAttribute("data-link")); //scroll to link with Section ID
            scrLink.scrollIntoView({behavior:"smooth"});
        })
    })
}
scrollToSec();

onscroll = function() {
    let yPosition = document.documentElement.scrollTop;
    sec.forEach((item) => {
        if (yPosition >= item.offsetTop && yPosition < item.offsetTop + item.offsetHeight) {
            let currentLink = item.attributes.id.value;
            const navLinks = document.querySelectorAll("[data-link]");
            navLinks.forEach(link =>{
                link.classList.remove("your-active-class");
            });
            document.querySelector(`[data-link="${currentLink}"]`).classList.add("menu__link","your-active-class");
            removeActiveClass();
            document.getElementById(item.id).classList.add("your-active-class");
        }
    });
};

var removeActiveClass = function() {
    sec.forEach(section => {
        document.getElementById(section.id).classList.remove("your-active-class");
    });
};
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


