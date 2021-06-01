"use strict";

const url = "https://randomuser.me/api/?results=10";
const userList = document.querySelector(".js-userslist");
let userResults = [];

function obtainDates() {
  // const userRandom = userList.value;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      userResults = data; //guardo datos 
    });


  for (const userList of userResults) {
    let eachResult = "";
    eachResult += `<li class = "js-listUsers"  id="${userResults.results.name}">`;
  }


  eachResult += "</li>";
}

console.log(userList);
