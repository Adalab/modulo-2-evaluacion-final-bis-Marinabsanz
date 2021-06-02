"use strict";

document.addEventListener("DOMContentLoaded", obtainDates);
//////////////Buttons  delete and save
const deleteBtn = document.querySelector(".js-delete");
const saveBtn = document.querySelector("js-save");

///////////////////////////////////////////////////////
const url = "https://randomuser.me/api/?results=10";
const userList = document.querySelector(".js-usersList");

let html = "";
let users = "";

function obtainDates() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showResults(data.results));
}

function showResults(eachResult) {
  let html = "";

  eachResult.forEach((data) => {
    const { Nombre, ciudad, pais } = data;

    html += `
    <li class= 'userRandomList'>  
    <p>Nombre: ${data.name.first} ${data.name.last} </p>
    <p>Ciudad: ${data.location.city}</p>
    <p>País : ${data.location.country}</p>
    <p>Username: ${data.login.username}</p>
    <img class="imag1" src="${data.picture.medium}"
    </li>`;
  });

  userList.innerHTML += html;
}

// function deleteDocs(){

//  }
// saveBtn.addEventListener('click' deleteDocs);
