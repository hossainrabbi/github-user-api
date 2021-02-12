'use strict';
const inputUser = document.getElementById('search-input');
const userCard = document.getElementById('user-card');

const clickSearchBtn = () => {
  const API = `https://api.github.com/users/${inputUser.value}`;
  fetch(API)
    .then((res) => res.json())
    .then((data) => dataFunction(data));
};

const dataFunction = (data) => {
  if (data.login == undefined) {
    alert('Invalid your username 😭!');
    userCard.style.display = 'none';
  } else {
    userCard.innerHTML = `
    <img src="${data.avatar_url}" class="card-img-top" alt="${data.login}" />
    <div class="card-body">
        <p><a href="${data.html_url}">@${data.login}</a></p>
        <h2>${data.name ? data.name : 'Your Name?'}</h2>
        <p><b>Location:</b> ${
          data.location ? data.location : 'Your Location?'
        }</p>
        <a href="${data.html_url}?tab=followers" class="card-link">Followers: ${
      data.followers
    }</a>
        <a href="${data.html_url}?tab=following" class="card-link">Following: ${
      data.following
    }</a>
    </div>
    `;
    inputUser.value = '';
    userCard.style.display = 'block';
    document.getElementById('search-text').style.display = 'none';
  }
};
