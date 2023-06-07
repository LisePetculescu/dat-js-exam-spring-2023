"use strict";

// 1. hent listen posts

window.addEventListener("load", start);

let posts = [];

async function start() {
  console.log("Hello World");

  posts = await getPosts();
  document.querySelector("#sortorder").addEventListener("change", sortBySelected)
  showPosts(posts);

  
}

async function getPosts() {
  const response = await fetch("posts.json");
  const data = await response.json();

  console.log(data);
  return data;
  
}

//  2. vis listen posts

function showPosts(posts) {
    document.querySelector("#posts-list").innerHTML = "";
  for (const post of posts) {
    showPost(post);
  }
}

function showPost(post) {
  const html = /* html*/ `
    <article>
        <img src="${post.image}" />
        <h2>${post.caption}</h2>
        <p>Likes: ${post.likes}</p>
    </article> 
    `;

    document.querySelector("#posts-list").insertAdjacentHTML("beforeend", html)
}

//  3. sorter listen ud fra den valgte option

function sortBySelected (event) {
console.log("sort");
    const selected = event.target.value;
    
    console.log(selected);
    
    if (selected === "ascending") {

        posts.sort((low, high) => low.likes - high.likes);
        showPosts(posts);
        
       
    } else if (selected === "descending") {

        posts.sort((low, high) => high.likes - low.likes);
        showPosts(posts);
    }
}
