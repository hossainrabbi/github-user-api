'use strict';
const userName = document.getElementById('user-name');
const userImg = document.getElementById('user-img');

const clickSearchBtn = () => {
  const inputUser = document.getElementById('search-input');
  const API = `https://api.github.com/users/${inputUser.value}`;
  fetch(API)
    .then((res) => res.json())
    .then((data) => dataFunction(data));
};

const dataFunction = (data) => {
  userImg.src = data.avatar_url;
  userImg.alt = data.login;
  userName.innerText = `@${data.login}`;
  userName.href = data.html_url;
  console.log(data);
};
