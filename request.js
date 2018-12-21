let request = require("request");

let movieInput = process.argv[2];

const domain = "http://www.omdbapi.com/?t=";

const APIKEY = "&y=&plot=short&apikey=40e9cece";

let URL = domain + movieInput + APIKEY;

request(URL, function(error, response, body){
    if(error){
        return console.log(error);
    } else if(response.statusCode === 200){
        console.log("Movie title " + JSON.parse(body).Title);
        console.log("Movie rating " + JSON.parse(body).imdbRating);
        console.log("Movie rating (rotten tomatoes) " + JSON.parse(body).Ratings[1].Value);
    }
});