// console.log('js works');

const socketIo = io();
let username = document.cookie.slice(9)

socketIo.emit('name', username);

const messages = document.querySelector('#messages');
socketIo.on('msg', msg => {
  const obj = JSON.parse(msg);
  console.log(obj, msg);
  const div = document.createElement('div');
  const h6 = document.createElement('h6');
  h6.innerText = obj.username;
  div.appendChild(h6);
  const p = document.createElement('p');
  p.innerText = obj.msg;
  div.appendChild(p)
  div.className = 'messageBackground';
  messages.appendChild(div)
  // messages.innerHTML += `<div>${msg}</div>`; 
});
socketIo.on('myMessage', msg => {
  const div = document.createElement('div');
  const p = document.createElement('p');
  p.innerText = msg;
  p.className = 'myMessage';
  div.className = 'myBackground'
  div.appendChild(p);
  messages.appendChild(div);
})

const messageInput = document.querySelector('#messageInput');

document.querySelector('#messageForm').addEventListener('submit', e => {
  e.preventDefault();
  socketIo.emit('msg', messageInput.value);
  messageInput.value = '';
});
