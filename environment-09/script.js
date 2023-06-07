"use strict";

// 1. hent posts listen

window.addEventListener("load", start);

let posts = [];

async function start() {
  console.log("Hello World");

  posts = await getPosts();
  showPosts(posts);
}

async function getPosts() {
  const response = await fetch("posts.json");
  const data = await response.json();

  console.log(data);
  return data;
}

// 2. vis posts som er published

function showPosts(posts) {
  for (const post of posts) {
    if (post.published) {
      showPosts(post);
    }
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

// 3. vis alle posts når der bliver trykket hvis alle
