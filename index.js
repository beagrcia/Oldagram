const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 589
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 856
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 960
    }
]

// const avatarEl = document.getElementById("user-icon")
// const nameEl = document.getElementById("name")
// const locationEl = document.getElementById("location")
// const postEl = document.getElementById("post-update")
// const heartEl = document.getElementById("img-heart")
// const vinsEl = document.getElementById("vincent-likes")
// const usernameEl = document.getElementById("username")
// const captionEl = document.getElementById("ig-cap")
// let totalNum = 21492
// let likes = totalNum + 1

const containerEl = document.querySelector(".container")


for (let i = 0; i < posts.length; i++){
    containerEl.innerHTML += `<div class="row-container post">
    <img class="avatar" id="user-icon" src="${posts[i].avatar}">
        <div class="post-info">
            <h1 id="name">${posts[i].name} </h1>
            <h2 id="location">${posts[i].location}</h2>
        </div>
        </div>
            <img id="post-update" src="${posts[i].post}">
        <div class="row-container icons">
            <img id="img-heart" class="icon" src="images/icon-heart.png">
            <img id="img-comment" class="icon" src="images/icon-comment.png">
            <img id="img-dm" class="icon" src="images/icon-dm.png">
        </div>
        <h1 class="likes">${posts[i].likes}</h1>
        <span class="post-caption"><p><strong>${posts[i].username}</strong> ${posts[i].comment} </p></span> `
}



