import {FetchData} from './fetchData';
import LoadPost from './post';
import './styles/blog.css';
export default async function LoadBlog(user, images) {
    const fetchData = new FetchData().fetchData;

    const posts = await fetchData(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
     
    const main = document.querySelector('main');
    main.innerHTML = `
     <div id="mainHolder">
            <div id="blogHeader" style="background-image: url('${images[user.id - 1].download_url}'); 
                background-size: cover;">
               <h1>${user.name}</h1>
                <p>${user.company.catchPhrase}
                    ${user.company.bs}</p>
            </div>
            <div>
                <h3>Top Ten Reads</h3>
                <hr>
                <ul id="topReads"></ul>
            </div>
        </div>
        <ul id="postList">
        </ul>
    `;
    const topReads = document.querySelector('#topReads');
    posts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `
                        <a id="a" >
                            <p>${post.title}</p>
                        </a>
                       `;
        topReads.append(li);
        li.firstElementChild.addEventListener('click', () => {
            LoadPost(user, post, images);
        });
    });

    const postList = document.querySelector('#postList');
    posts.forEach(post => {
         const li = document.createElement('li');
        li.innerHTML = `
                            <img src ='${images[post.id -1].download_url}'/>
                            <h3>${post.title}</h3>
                            <a>
                                <p >${post.body}</p>
                            </a>
                            <button class="showBtn" id="${post.id}">show comments</button>
                            <div class= "commentSectionHolder" id='commentSectionHolder${post.id}' >
                                <ul class="commentSection" id='commentSection${post.id}'></ul>
                            </div>
                            `;
        li.className = 'post';
        li.children[2].addEventListener('click', ()=> { LoadPost(user, post, images);});
        li.addEventListener('click', async function(e){
            if (e.target.className === 'showBtn') {

                const commentSectionHolder = document.querySelector(`#commentSectionHolder${e.target.id}`);
                const commentSection = document.querySelector(`#commentSection${e.target.id}`);

                if (e.target.innerText === 'show comments') {
                    if (!commentSection.hasChildNodes()) {
                        const comments = await fetchData(`https://jsonplaceholder.typicode.com/comments?postId=${e.target.id}`);
                        comments.forEach(comment => {
                            const li = document.createElement('li');
                            li.innerHTML = `
                                    <p id="body">${comment.body}</p>
                                    <p id="name">${comment.name} <span id="email">  ${comment.email}</span></p>
                                        `;
                            commentSection.append(li);
                        });
                    }
                    commentSectionHolder.style.display = 'flex';
                    commentSectionHolder.style.position = 'absolute';
                    commentSectionHolder.style.top = `${e.target.offsetParent.clientHeight - 5}px`;
                    commentSectionHolder.style.left = '0px';
                    e.target.innerText = 'hide comments';

                } else if (e.target.innerText === 'hide comments') {
                    commentSectionHolder.style.display = 'none';
                    e.target.innerText = 'show comments';
                }
            }
        });
        postList.append(li);
    });
}