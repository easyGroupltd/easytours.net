// cookieconsent.js
// https://www.osano.com/cookieconsent/download/
// !!! Replace HREF url !!!

// Step 3 of 3 - Link this file just before the </body> tag after/below the file: cookieconsent.min.js
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#222222",
      "text": "#ffffff"
    },
    "button": {
      "background": "#ff6600",
      "text": "#ffffff"
    }
  },
  "theme": "classic",
  "content": {
    "message": "This website uses cookies to ensure you get the best experience on our website.",
    "dismiss": "Accept",
    "link": "View cookie policy",
    "href": "cookie-policy.html"
  }
});