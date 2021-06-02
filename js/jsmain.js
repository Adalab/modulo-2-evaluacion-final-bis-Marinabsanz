"use strict";

const url = "https://randomuser.me/api/?results=10";
const userList = document.querySelector(".js-usersList");


let html = "";
let users= ''

function obtainDates() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showResults(data.results));
} 

function showResults(eachResult) {
  let html = "";

  eachResult.forEach((profile) => {
  const { Nombre, ciudad, pais,  } = profile;

    html += `
    <li>  
    <p>Nombre: ${profile.name.first} ${profile.name.last} </p>
    <p>Ciudad: ${profile.location.city}</p>
    <p>País : ${profile.location.country}</p>
    <img class="imag1" src="${profile.picture.medium}"

    </li>`;
  });

  userList.innerHTML += html;
}

document.addEventListener("DOMContentLoaded", obtainDates);
