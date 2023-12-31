// create a function and following the progressions inside the function.

// Progression 1: Create a promise call which fetches data

async function getData() {
  try {
    let fetching = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await fetching.json(); //after fetching it will be in the form of string so to convert that to form of list of objects we are using json.
    display(data);
  } catch (error) {
    console.log('Error occured');
  }
}

// Progression 2: Display the fetched data in the form of list

function display(datafromfetching) {
  let messageDiv = document.getElementById('message');
  var player = `<h2>Lists of Users</h2>`;
  datafromfetching.forEach(function (element, index) {
    player += `<div class="player">
               <div class="strength">Name : ${element.name}</div>
               <div>Email   : ${element.email}</div>
               <div>Phone   : ${element.phone}</div>
               <div>Website : ${element.website}</div>
               <div>Company : ${element.company.name}</div>
               <div>City    : ${element.address.city}</div>
               <div>Zipcode : ${element.address.zipcode}</div>
              </div>`;
  });
  messageDiv.innerHTML = player;
}
getData();
// Progression 3: When the promise call is rejected then throw an error
