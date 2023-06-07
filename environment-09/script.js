"use strict";

// 1. hent posts listen

window.addEventListener("load", start);

let posts = [];

async function start() {
  console.log("Hello World");

  posts = await getPosts();

  //   showPosts(posts);
  filterPublished(posts);
  document.querySelector("#all").addEventListener("change", showAll);
}

async function getPosts() {
  const response = await fetch("posts.json");
  const data = await response.json();

  console.log(data);
  return data;
}

// 2. vis posts som er published

function showPosts(posts) {
  document.querySelector("#posts-list").innerHTML = "";
  for (const post of posts) {
    showPost(post);
  }
}

function showPost(post) {
  const html = /* html */ `
    <article>
        <img src=${post.image}  />
        <h2>${post.caption}</h2>
        <p>Likes: ${post.likes}</p>
    </article>
    `;

  document.querySelector("#posts-list").insertAdjacentHTML("beforeend", html);
}

function filterPublished(posts) {
  posts = posts.filter((post) => post.published);

  showPosts(posts);
}

// 3. vis alle posts når der bliver trykket hvis alle

function showAll(event) {
  console.log(event);
  const showAllPosts = event.target;
//   console.log(showAllPosts.value);
//   const checkbox = 

  if (showAllPosts.checked) {
    showPosts(posts);
  } else {
    filterPublished(posts);
  }
}
