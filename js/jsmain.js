"use strict";

const url = "https://randomuser.me/api/?results=10";
const userList = document.querySelector(".js-userslist");
let contenido = document.querySelector(".js-contenido");
let userResults = [];
//  userList.value = userResults.value;
let html = "";

function obtainDates() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showResults(data));

  console.log(showResults);
}

function showResults(eachResult) {
  
  let html = "";
  eachResult.forEach((results) => {
    const { user, location } = results;

    html += `
    <li class = "UserRandom"  
    <p>User: ${data.user}</p>
    <p>Procedencia: ${data.location.city}</p>
    <a href= "${data.picture}foto de perfil</a>
    </li>`;
  });
}

contenido.innerHTML += html;
window.onload = obtainDates();
