"use strict";

const url = "https://randomuser.me/api/?results=10";
const userList = document.querySelector(".js-userslist");
let userResults = [];

function obtainDates() {
  const userRandom = userList.value;
  fetch(url + userRandom)
    .then((response) => response.json())
    .then((data) => {
      userResults = data; //guardo datos de mi peticion en array global
    });

  for (const userList of userResults) {
    let eachResult = "";
    eachResult += `<li class = "js-listUsers"  id="${userResults.results.name}">`;
  }
  console.log(userResults);

  eachResult += "</li>";
}
