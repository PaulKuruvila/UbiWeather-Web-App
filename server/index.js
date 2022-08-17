const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();
const XMLHttpRequest = require('xhr2');
const port = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

function fixCityNameSpaces(cityName){
    cityName = cityName.replace(/ /g, "%20"); // replace all spaces in city name with %20
    return cityName;
}

var getWeatherData = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

app.get("/searchCity", (req,res) => {
    let city = req.body.city;
    console.log(`City requested: -->${city}<--`);
    city = fixCityNameSpaces(city);
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    getWeatherData(url, function(error, data) {
        if (error !== null) {
            console.log(`Error fetching city data: ${error}`);
            res.send(`Error fetching city data: ${error}`);
        } else {
            console.log(data);
            res.send({
                status: 200,
                data
            });
        }
    });
});

app.get("/api", (req, res) => {
    res.json({message: `Fake api key is ${process.env.FAKE_API_KEY}!!!`})
});

// For any GET requests that are not handled, return to home page (Needs to be last)
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {console.log(`Server started on port ${port}`)});