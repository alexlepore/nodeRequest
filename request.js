'use strict'

let request = require("request");

let protocol = "https://";

let domainName = "www.omdbapi.com";

let movieInput = process.argv;

let movieName = "";

for(let i = 2; i < movieInput.length; i++){
    if (i > 2 && i < movieInput.length){
        movieName = movieName + "+" + movieInput[i]; 
    }   else {
        movieName += movieInput[i];
    }
}

let APIKEY = "&y=&plot=short&apikey=40e9cece";

let fullURL = protocol + domainName + "/?t=" + movieName + APIKEY;

console.log(fullURL);

request(fullURL, function(error, response, body){
    if(error){
        return console.log(error);
    } else if(response.statusCode === 200){
        console.log("Your request movie was " + JSON.parse(body).Title);
        console.log("-----------");
        console.log("Synopsis: " + JSON.parse(body).Plot);
        console.log("-----------");
        console.log("Release Year: " + JSON.parse(body).Year);
    }
});