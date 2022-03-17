var intervalId = window.setInterval(function(){
    updateData();
}, 2000);

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
    let latitutde = '';
    let longitude = '';

    longitude = data.longitude;

    document.getElementById('current-data').innerHTML = longitude;
} 



/* 
<h4><i class="fa fa-fw fa-check"></i> 


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