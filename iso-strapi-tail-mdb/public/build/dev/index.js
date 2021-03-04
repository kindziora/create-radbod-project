
 
window.onpopstate = (event) => window.buildApp.loadPage(event.state);

//initial page load
window.buildApp.loadPage(window.location.pathname);
 
 