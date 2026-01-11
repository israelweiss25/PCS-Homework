import FetchData from "./fetchData.js";
(async function () {
    'use strict';
    const blogHeader = document.querySelector('#blogHeader');
    const topReads = document.querySelector('#topReads');


    const fetchData = new FetchData().fetchData;
    const images = await fetchData('https://picsum.photos/v2/list?page=2&limit=100');


    const userURLParams = new URLSearchParams(window.location.search);
    const id = userURLParams.get("id");
    const postId = userURLParams.get("postId")

    const users = localStorage.getItem('posts');
    let userInfo = JSON.parse(users);
    console.log(userInfo, id);
    userInfo = userInfo[id - 1]
    console.log(userInfo)

    blogHeader.innerHTML = `
                                <h1>${userInfo.name}</h1>
                                <p>${userInfo.company.catchPhrase}
                                 ${userInfo.company.bs}</p>
                            
                                `;
    blogHeader.style.backgroundImage = `url('${images[postId].download_url}')`;
    blogHeader.style.backgroundSize = '100%';

    const comments = await fetchData(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    comments.forEach(comment => {
        const li = document.createElement('li')
        li.innerHTML = `
                                    <p id="body">${comment.body}</p>
                                    <p id="name">${comment.name} <span id="email">  ${comment.email}</span></p>
                                        `;
        topReads.append(li);
    });
    const postLink  = document.querySelector('#posts');
    postLink.addEventListener('click', e => {
        e.preventDefault();
        window.location.href = `./blog.html?id=${id}`;
    })
}())