"use strict";

const url = "https://randomuser.me/api/?results=10";
const userList = document.querySelector(".js-userslist");
let userResults = [];
let eachResult = "";

const obtainDates = function () {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      userResults = data; //guardo datos
    });

  for (const userList of userResults) {
    eachResult += `<li class = "js-listUsers"  id="${userResults.results.name}">`;
    eachResult += userList.results.name ;
 
  }
  eachResult += "</li>";

}
obtainDates();
userResults.innerHTML = eachResult;
console.log(userResults);
