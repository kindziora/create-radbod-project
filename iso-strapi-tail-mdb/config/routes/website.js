export default {
    "^([a-z]{2}_[A-Z]{2})/([.-\w]*)$": 2, // regex input : match group 
    "^home": "website/home.js",
    "^start": "website/start.js",
    "^blog": "website/blog.js",
    "^$": "website/start.js",
    "^register": "website/register.js",
    "^login": "website/login.js",
    "^impressum": "website/impressum.js",
    "_not_found": "website/notFound.js"
};