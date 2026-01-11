import FetchData from "./fetchData.js";

(async function () {
    'use strict';
    const blogHeader = document.querySelector('#blogHeader');
    const topReads = document.querySelector('#topReads');
    const postList = document.querySelector('#postList');

    const fetchData = new FetchData().fetchData;
    const images = await fetchData('https://picsum.photos/v2/list?page=2&limit=100');


    const userURLParams = new URLSearchParams(window.location.search);
    const id = (userURLParams.get("id"));

    let userInfo = JSON.parse(localStorage.getItem('posts'));
    userInfo = userInfo[id - 1]

    blogHeader.innerHTML = `
                            <h1>${userInfo.name}</h1>
                            <p>${userInfo.company.catchPhrase}
                             ${userInfo.company.bs}</p>
                        
                            `;
    blogHeader.style.backgroundImage = `url('${images[userInfo.id].download_url}')`;
    blogHeader.style.backgroundSize = 'cover'


    const posts = await fetchData(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    console.log(posts);

    posts.forEach(post => {
        const li = document.createElement('li')
        li.innerHTML = `
                        <a href = "post.html?id=${userInfo.id}&postId=${post.id}" >
                            <p>${post.title}</p>
                        </a>
                       `
        topReads.append(li)
    });

    posts.forEach(post => {
        const li = document.createElement('li')
        li.innerHTML = `
                            <img src ='${images[post.id].download_url}'/>
                            <h3>${post.title}</h3>
                            <a href ="post.html?id=${userInfo.id}&postId=${post.id}">
                                <p>${post.body}</p>
                            </a>
                            <button class="showBtn" id="${post.id}">show comments</button>
                            <div class= "commentSectionHolder" id='commentSectionHolder${post.id}' >
                                <ul class="commentSection" id='commentSection${post.id}'></ul>
                            </div>
                            `;
        li.className = 'post';
        postList.append(li);
    });

    document.querySelectorAll('.post').forEach(post => {
        post.addEventListener('click', async function (e) {

            if (e.target.className === 'showBtn') {

                const commentSectionHolder = document.querySelector(`#commentSectionHolder${e.target.id}`);
                const commentSection = document.querySelector(`#commentSection${e.target.id}`);

                if (e.target.innerText === 'show comments') {
                    if (!commentSection.hasChildNodes()) {
                        const comments = await fetchData(`https://jsonplaceholder.typicode.com/comments?postId=${e.target.id}`)
                        comments.forEach(comment => {
                            const li = document.createElement('li')
                            li.innerHTML = `
                                    <p id="body">${comment.body}</p>
                                    <p id="name">${comment.name} <span id="email">  ${comment.email}</span></p>
                                        `;
                            commentSection.append(li);
                        });
                    }

                    commentSectionHolder.style.display = 'flex'
                    commentSectionHolder.style.position = 'absolute';
                    commentSectionHolder.style.top = `${e.target.offsetParent.clientHeight - 5}px`;
                    commentSectionHolder.style.left = `0px`;
                    e.target.innerText = 'hide comments';

                } else if (e.target.innerText === 'hide comments') {
                    commentSectionHolder.style.display = 'none';
                    e.target.innerText = 'show comments';
                }
             


            }

        })
    })
      const footter = document.querySelector('#contactUs');

    const { street, suite, city, zipcode } = userInfo.address;
    footter.innerHTML = `
                    <div>
                        <h3>Contact Us</h3>
                        <hr>
                        <p>phone: ${userInfo.phone}</p>
                        <p>email: ${userInfo.email}</p>
                    </div>
                    <div>
                        <h3>Company Info</h3>
                        <hr>
                        <p>email: ${userInfo.email}</p>
                        <p>Addrres: ${street}, ${suite}, ${city}, ${zipcode}
                        </p>
                    </div>
                    <p>&copy; My Webblog 2019</p>
                    `
}());