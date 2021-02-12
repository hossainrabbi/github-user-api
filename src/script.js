"use strict";
const username = 'hossainrabbi';
const API = `https://api.github.com/users/${username}`;
fetch(API)
    .then((res) => res.json())
    .then((data) => dataFunction(data));
const dataFunction = (data) => {
    const userName = document.getElementById('user-name');
    console.log(data.login);
};
