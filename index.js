const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const main = document.getElementById("main-page");

function renderPost() {
  posts.forEach((posti) => {
    const { name, username, location, avatar, post, comment, likes } = posti;

    main.innerHTML += `
    <section class="post">
    <div class="post-header">
        <img src="${avatar}" alt="" class="user-avatar">
        <div class="container">
            <h3>${name}</h3>
            <p>${location}</p>
        </div>
    </div>


    <div class="post-img">
        <img src="${post}" alt="">
    </div>


    <div class="post-footer">
        <div class="icon-container">
            <img src="images/icon-heart.png" alt="" id="like" class="icon">
            <img src="images/icon-comment.png" alt="" class="icon">
            <img src="images/icon-dm.png" alt="" class="icon">
        </div>

        <p>${likes} likes</p>
        <p><span>${username}</span>${comment}</p>


    </div>

</section>
<hr>
    `;
  });
}

renderPost();
