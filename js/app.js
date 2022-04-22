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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
// variable to get navigation bar ul list by id
const navBar = document.getElementById("navbar__list");
//variable to get all sections that we have in HTML
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav bar with the sections dynamically
function navBuild() {
  //empty string variable to add the sections later on
  let navigationItems = "";
  //loop over each section in all sections
  for (section of sections) {
    //create li element with anchor tag
    navigationItems = document.createElement("li");
    navigationItems.innerHTML = `<a href= "#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a>`;

    //append the section to the navigation bar
    navBar.appendChild(navigationItems);
  }
  return navBar;
}

//Calling function
navBuild();

// Add class 'active' to section when near top of viewport

//To get the Position and the Size of the Section element
const position = (section) => {
  //using the getBoundingClientRec to return size of section element
  return section.getBoundingClientRect().top;
};

//function to Check if we should activate ActiveClass or remove it
function ActiveClass() {
  for (section of sections) {
    const linkToSection = navBar.querySelector(`[data-nav=${section.id}]`);

    //check if section within the size
    if (position(section) < 250 && position(section) >= -250) {
      // for(let counter=0; counter<=sections.length;counter++){
      //     const h2Colored = document.getElementsByTagName("h2")[counter];
      //
      // }

      // const h2Colored = document.getElementsByTagName("h2")[counter];
      // // h2Colored = h2Colored.innerText;
      // console.log(h2Colored);

      //Activate Active Class
      section.classList.add("your-active-class");
      //Activate Section link
      linkToSection.classList.add("active-Link");
      //Highlight Section on navigationBar
      linkToSection.style.cssText = "background-color:yellow";
      //highlight Section header
      section.innerHTML = `<div class="landing__container">
            <h2 style="color:yellow">${section.dataset.nav}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
            <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
          </div>`;

      // h2Color.style.cssText="color:yellow";
      //    section.style.textDecorationColor="red";
      // section.querySelectorAll("h2").style.backgroundColor="yellow";
    } else {
      //Remove Activate Class
      section.classList.remove("your-active-class");
      //Remove Section Active Link
      linkToSection.classList.remove("active-Link");
      // sectionLink.style.cssText ="background-color:white";
      linkToSection.style.cssText = "color:black";
      //highlight Section header
      section.innerHTML = `<div class="landing__container">
            <h2 >${section.dataset.nav}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
            <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
          </div>`;
    }
  }
}

//Call listener on Scrolling
document.addEventListener("scroll", ActiveClass);

//Scrolling to specified Section using another way
navBar.addEventListener("click", (e) => {
  //preventing default way
  e.preventDefault();
  //Check if it is the specified Section on navBar
  if (e.target.dataset.nav) {
    //Scroll into the section with the smooth behaviour
    document.getElementById(`${e.target.dataset.nav}`).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }
});

// const scrollToSection=()=>{
//     const x = document.querySelectorAll(".navbar__menu");
//     .forEach(links =>{

//         x.addEventListener("click", ()=>{
//             for(let i = 0; i<sections;i++){
//                 sections[i].addEventListener("click",scroll(x));

//             }

//         })
//     })
// }
// scrollToSection();

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
