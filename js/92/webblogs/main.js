import FetchData from "./fetchData.js";

(async function () {
    'use strict';
    const ul = document.querySelector('ul');

    const fetchData = new FetchData().fetchData;

    const users = await fetchData('https://jsonplaceholder.typicode.com/users');

    // console.log(users, typeof (usesr), users);
    // const dataString = JSON.stringify(users);

    localStorage.setItem('posts', JSON.stringify(users));

    users.forEach(user => {
        const li = document.createElement('li')
        li.innerHTML = `
                            <h3>${user.name}</h3>
                            <a  href= "https://${user.website}">${user.website}</a>
                            <p>${user.company.bs}</p> 
                            <a href= "blog.html?id=${user.id}" class="postLink" id=${user.id}>go to blog
                            </a> 
                            `
        ul.append(li);
    });
}());