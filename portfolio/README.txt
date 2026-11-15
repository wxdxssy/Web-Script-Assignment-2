#### Waseed Obaid's Portfolio — Assignment 2 #######

INFR3120 — Web and Script Programming  
Waseedullah Obaid 101020708

Overview

This site is of my personal portfolio built with Node.js, Express, and EJS using the
Express Generator setup demonstrated in class lectures.

The website includes Home, About Me, Projects, and Contact Me pages.
Each page has its own Express route and EJS view, with shared header,
navigation, and footer partials.

Styling and Responsive Navigation

Bootstrap 6.0.0-alpha.1 supplies the navbar and responsive drawer.
Its drawer component is loaded using a script with `type="module"`.

Font Awesome provides the navbar icons:

Home: `fa-regular fa-house`
About Me: `fa-solid fa-circle-info`
Projects: `fa-solid fa-briefcase`
Contact Me: `fa-solid fa-at`

The avatar uses Bootstrap's `img-fluid` class to fit smaller screens.

Custom CSS adapts the cream-and-sage colour scheme from Assignment 1
along with page content and images.

Course Material

INFR3120 lecture slides and recorded lecture demonstrations were used in
the Express Generator workflow, server configuration, Express routes,
EJS rendering, active navigation conditions, shared partials, and
error-page integration.

Bootstrap

Source: Bootstrap

Navbar: https://getbootstrap.com/docs/6.0/components/navbar/
Drawer: https://getbootstrap.com/docs/6.0/components/drawer/
JavaScript: https://getbootstrap.com/docs/6.0/getting-started/javascript/
Responsive images: https://getbootstrap.com/docs/6.0/content/images/

The selected navbar example was changed by removing the search form,
dropdown, and disabled link. Portfolio routes, EJS active page
conditions, and Font Awesome icons were added.

The responsive-image class and Bootstrap 6 module-loading configuration
were also added.

Font Awesome Free

Source: Font Awesome

https://fontawesome.com/
https://www.npmjs.com/package/@fortawesome/fontawesome-free

Icon markup was selected from Font Awesome and added to the navigation.

Render

Site hosted on render 
@ https://waseeds-portfolio-assignment-2.onrender.com/