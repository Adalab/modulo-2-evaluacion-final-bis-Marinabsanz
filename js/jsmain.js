"use strict";

const url = "https://randomuser.me/api/?results=10";
const userList = document.querySelector(".js-userslist");
let userResults = [];
let html = '';

function obtainDates() {
  fetch(url)
    .then(response => response.json())
    .then(data => showResults(data));

      console.log(showResults)
}

  function showResults(eachResult) {
    userList;
    let html= '';
    eachResult.forEach( profile  => {
      const {user, location } = profile;
   
    html += `
    <li class = "UserRandom"  
    <p>User: ${data.user}</p>
    <p>Procedencia: ${data.location.city}</p>
    <a href= "${data.picture}foto de perfil</a>
    </li>` 
 
    });
  }


userList.innerHTML = html;
 
console.log(userList);
    // document.addEventListener('DomLoading', obtainDates())

