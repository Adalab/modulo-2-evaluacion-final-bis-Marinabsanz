"use strict";

document.addEventListener("DOMContentLoaded", obtainDates);
//////////////Buttons  delete and save y reload
const deleteBtn = document.querySelector(".js-delete");
const saveBtn = document.querySelector("js-save");
const reloadBtn = document.getElementById("reload");
///////////////////////////////////////////////////////

const url = "https://randomuser.me/api/?results=10";
const userList = document.querySelector(".js-usersList");

///SAludo inicial con el Promptt
const username = prompt("¿Cómo te llamas?");

if (username === null) {
  document.querySelector (".js-welcome").innerHTML = ` ¡Bienvenid@  a TwiterLab :)  !`;
} else {
  document.querySelector(".js-welcome").innerHTML = ` ¡Bienvenid@  a TwiterLab, ${username} !`;
}


//////////

let html = "";
let users = "";

function obtainDates() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showResults(data.results));
}

function showResults(eachResult) {
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

//boton para recargar

function reload() {
  location.reload();
}
reloadBtn.addEventListener("click", reload, false);

///////////Cambiar color favoritos  //---guardar localS

// function selectUserFav(evt) {
//   evt.currentTarget;
//   const currentSelect = evt.currentTarget;
//   currentSelect.classList.toggle("changeColor");
// }
