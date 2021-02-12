'use strict';
const userCard = document.getElementById('user-card');

const clickSearchBtn = () => {
  const inputUser = document.getElementById('search-input');
  const API = `https://api.github.com/users/${inputUser.value}`;
  fetch(API)
    .then((res) => res.json())
    .then((data) => dataFunction(data));
};

const dataFunction = (data) => {
  userCard.innerHTML = `
    <img src="${data.avatar_url}" class="card-img-top" alt="${data.login}" />
    <div class="card-body">
        <p><a href="${data.html_url}">@${data.login}</a></p>
        <h2>${data.name ? data.name : 'Your Name?'}</h2>
        <p><b>Location:</b> ${
          data.location ? data.location : 'Your Location?'
        }</p>
        <a href="${data.url}/followers" class="card-link">Followers: ${
    data.followers
  }</a>
                <a href="${data.url}/following" class="card-link">Following: ${
    data.following
  }</a>
    </div>
    `;
  console.log(data);
};
