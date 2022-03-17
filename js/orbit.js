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

    lon = data.longitude;
    lat = data.latitude;

    trunc_lon = lon.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
    trunc_lat = lat.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];

    document.getElementById('current-data').innerHTML = `
    Longitude: ${trunc_lon}<br>
    Latitude: ${trunc_lat}<br>
    `
} 

var with2Decimals = num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
rounded.value = with2Decimals



/* 

function updateDatas() {
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