"use strict";

const url = "https://randomuser.me/api/?results=10";
const userList = document.querySelector(".js-userslist");
let contenido = document.querySelector(".js-contenido");

let html = "";

function obtainDates() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showResults(data));
}

function showResults(eachResult) {
  let html = "";

  eachResult.forEach((profile) => {
    const { user, location } = profile;

    html += `
    <li>  
    <p>User: ${data.user}</p>
    <p>Procedencia: ${data.location.city}</p>
    <a href= "${data.picture}foto de perfil</a>
    </li>`;
  });

  contenido.innerHTML += html;
}

document.addEventListener("DOMContentLoaded", obtainDates);
