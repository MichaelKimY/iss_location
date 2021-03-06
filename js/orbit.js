function initMap() {
 
  let map;
  var api_key = 'AIzaSyCBfR05_zMO2fClqeZNgW_Vi6wAXUxW-Z8';
  
  var options = {
    center: {lat: -34.397, lon: 150.644},
    zoom: 8
  }

  map = new google.maps.Map(document.getElementById('map'),options)


}

var intervalId = window.setInterval(function(){
    updateData();
}, 1000);

async function getData() {
  let url = 'https://api.wheretheiss.at/v1/satellites/25544';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}


async function updateData() {
    let data = await getData();
    let lat = '';
    let lon = '';
    let vel = '';
    let alt = '';
    let timestamp = '';

    lon = data.longitude;
    lat = data.latitude;
    vel = data.velocity;
    alt = data.altitude;
    timestamp = data.timestamp;
    trunc_lon = lon.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
    trunc_lat = lat.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
    trunc_vel = Math.trunc(vel);
    trunc_alt = Math.trunc(alt);

/*  If I want to rearrange the date/time format:

    // convert unix timestamp to js timestamp
    var timestamp_js = new Date(unix_timestamp * 1000);
    var year = timestamp_js.getFullYear();
    var month = timestamp_js.getMonth();
    var day = timestamp_js.getDate();
    var hours = timestamp_js.getHours();
    var minutes = "0" + timestamp_js.getMinutes();
    var seconds = "0" + timestamp_js.getSeconds(); */

    // format time
    //var formattedTime = month + '/' + day + '/' + year + '/' + hours + ':' + minutes + ':' + seconds;
    
    var formatTime = new Date(timestamp * 1000);

    // ADD MPH CONVERSIONS
    document.getElementById('current-data').innerHTML = `
    Longitude: ${trunc_lon}<br>
    Latitude: ${trunc_lat}<br>
    Velocity: ${trunc_vel} kph<br>
    Altitude: ${trunc_alt} km<br>
    <br>
    (as of ${formatTime})<br>
    `
} 


// https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=12&size=400x400&key=AIzaSyCBfR05_zMO2fClqeZNgW_Vi6wAXUxW-Z8



/* 

function updateData() {
    var now = new Date(), // current date
        months = ['January', 'February', '...']; // you get the idea
        time = now.getHours() + ':' + now.getMinutes(), // again, you get the idea

        // a cleaner way than string concatenation
        date = [now.getDate(), 
                months[now.getMonth()],
                now.getFullYear()].join(' ');

    // set the content of the element with the ID time to the formatted string
    document.getElementById('current-data').innerHTML = data;

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateData(); // initial call



*/ 