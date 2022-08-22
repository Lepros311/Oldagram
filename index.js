import posts from './posts-data.js'
import Post from './Post.js'

let postsArray = ["vincent", "gustave", "joseph"]

function getNewPost() {
    const nextPost = posts[postsArray.shift()];
    return nextPost ? new Post(nextPost) : {};
}



// let post = getNewPost() DON'T DO THIS. THIS DOES CALL THE FUNCTION.

function changePostHtml() {
    // getNewPost()
    for(let i=0; i = postsArray.length; i++) {
        let post = getNewPost()
        document.getElementById("container").innerHTML+= post.getPostHtml()
        // const heartBtn = document.getElementsByClassName("heart-btn");
            // for(let j=0; j < postsArray.length; j++) {
            //     heartBtn[j].addEventListener('click', post.giveLike);
            // } 
            
        // Array.from(heartBtn).forEach(function(element) {
        //     element.addEventListener('click', post.giveLike);
        // });
    
    }
}



// getNewPost()
changePostHtml()

// Like button functionality ------ Could this code possibly be any wetter? 🤦‍♂️

let liked = false;
// console.log(document.getElementById(`${name}-likes`))
const heartVBtn = document.getElementById("vBtn")
const heartGBtn = document.getElementById("gBtn")
const heartJBtn = document.getElementById("jBtn")
const likesVEl = document.getElementById("v-likes-el")
const likesGEl = document.getElementById("g-likes-el")
const likesJEl = document.getElementById("j-likes-el")


heartVBtn.addEventListener("click", function () {
    if(liked === false) {
        posts["vincent"].likes = posts["vincent"].likes + 1;
        likesVEl.innerText = posts["vincent"].likes + " likes";
        liked = true;
    }
    else if(liked === true) {
        posts["vincent"].likes = posts["vincent"].likes - 1;
        likesVEl.innerText = posts["vincent"].likes + " likes";
        liked = false;
    } 
})

heartGBtn.addEventListener("click", function () {
    if(liked === false) {
        posts["gustave"].likes = posts["gustave"].likes + 1;
        likesGEl.innerText = posts["gustave"].likes + " likes";
        liked = true;
    }
    else if(liked === true) {
        posts["gustave"].likes = posts["gustave"].likes - 1;
        likesGEl.innerText = posts["gustave"].likes + " likes";
        liked = false;
    } 
})

heartJBtn.addEventListener("click", function () {
    if(liked === false) {
        posts["joseph"].likes = posts["joseph"].likes + 1;
        likesJEl.innerText = posts["joseph"].likes + " likes";
        liked = true;
    }
    else if(liked === true) {
        posts["joseph"].likes = posts["joseph"].likes - 1;
        likesJEl.innerText = posts["joseph"].likes + " likes";
        liked = false;
    } 
})


// posts["vincent"].likes


// const heartBtn = document.getElementById("heart-btn");

// heartBtn.addEventListener("click", post.giveLike)

