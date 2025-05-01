const express = require("express");
const { log } = require("winston");
const app = express();

const logAllDetailsOfRequest = app.use((req, res, next) => {
    console.log("Request Method:", req.method);           // HTTP method (e.g., 'GET', 'POST')
    console.log("Request IP:", req.ip);                   // Client IP address
    console.log("Request Hostname:", req.hostname);       // Hostname of the request (e.g., 'localhost')
    console.log("Request Original URL:", req.originalUrl); // Full URL (including query string)
    console.log("Request URL:", req.url);                 // URL (with query string)
    console.log("Request Path:", req.path);               // Path portion of the URL
    console.log("Request Protocol:", req.protocol);       // Protocol ('http' or 'https')
    console.log("Request Query Parameters:", req.query);  // Query parameters as an object
    console.log("Request Params:", req.params);           // Route parameters (e.g., from `/users/:id`)
    console.log("Request Body:", req.body);               // Request body (if parsed with body parser)
    console.log("Request Headers:", req.headers);         // All headers sent by the client
    console.log("Request Host:", req.host);               // Host from the URL (e.g., 'localhost:3000')
    console.log("Request Subdomains:", req.subdomains);   // Array of subdomains (e.g., ['api', 'v1'])
    console.log("Request Cookies:", req.cookies);         // Cookies sent by the client (if cookie-parser used)
    console.log("Request Signed Cookies:", req.signedCookies); // Signed cookies (if cookie-parser used)
    console.log("Request User-Agent:", req.get('User-Agent')); // 'User-Agent' header
    console.log("Request Accept Language:", req.get('Accept-Language')); // 'Accept-Language' header
    console.log("Request Accept Encoding:", req.get('Accept-Encoding')); // 'Accept-Encoding' header
    console.log("Request X-Forwarded-For:", req.get('X-Forwarded-For')); // 'X-Forwarded-For' header
    console.log("Request Fresh:", req.fresh);             // Boolean: if the request is fresh (cache validity)
    console.log("Request XHR:", req.xhr);                 // Boolean: if the request is AJAX (XMLHttpRequest)
    console.log("Request Base URL:", req.baseUrl);         // The base URL for the route (if using routers)
    console.log("Request Route:", req.route);             // The current route object being handled
    console.log("Request Signed Cookies:", req.signedCookies); // Signed cookies (if using cookie-parser)
    console.log("Request Accepts JSON:", req.accepts('json')); // Check if the request accepts JSON
    console.log("Request Accepts HTML:", req.accepts('html')); // Check if the request accepts HTML
    console.log("Request Accepts Text:", req.accepts('text')); // Check if the request accepts Text
    console.log("Request Subdomains:", req.subdomains);   // Array of subdomains in the request hostname
    console.log("Request Params (ID example):", req.params.id); // Example of accessing a specific route param
    console.log("Request Path Example:", req.path);       // Example of the request path
    console.log("Request Protocol:", req.protocol);       // 'http' or 'https'
    // console.log("Foo :",req.body.foo);
    // console.log("Foo :",req.body.foo.toString());

    
    next();
});

module.exports = logAllDetailsOfRequest;