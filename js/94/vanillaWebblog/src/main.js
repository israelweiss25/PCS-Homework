import { FetchData} from './fetchData';
import './styles/main.css';
import LoadBlog from './blog.js';
const fetchData = new FetchData().fetchData;

const users = await fetchData('https://jsonplaceholder.typicode.com/users');
const images = await fetchData('https://picsum.photos/v2/list?page=2&limit=100');
export default function loadMainPage() {
  const main = document.querySelector('main');
  main.innerHTML = ` 
                    <section id="aboutUs">
                      <h1>Welcom to PCS Webblog</h1>
                      <p>PCS Webblog is a website where you can find the most popular and interactive blogs in many areas of
                        intrest like tech, finance, sports, etc.</p>
                    </section>
                    <section id="users">
                      <ul id="blogs"></ul>
                    </section>
              `;

  const ul = document.querySelector('#blogs');
  users.forEach(user => {
    const li = document.createElement('li');
    li.innerHTML = `
                  <h3>${user.name}</h3>
                  <a  href= "https://${user.website}">${user.website}</a>
                  <p>${user.company.bs}</p> 
                  <button class="postLink" id=${user.id} >go to blog
                  </button> 
                  `;
    li.querySelector('.postLink').addEventListener('click', () => { LoadBlog(user, images); });
    ul.append(li);

  });
}
loadMainPage();
