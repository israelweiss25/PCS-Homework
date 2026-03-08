import express from 'express';
import http from 'http';
import path from 'path';
import cookieParser from "cookie-parser";
import { Server } from 'socket.io';
import pool from "./pool.js";
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const __dirname = import.meta.dirname;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// for testing use Israelweiss, or Yakov123 for usernames 

app.post('/chat', async (req, res, next) => {
  try {
    const [result] = await pool.execute(`
      SELECT name FROM users WHERE username = ?`, [req.body.username]);
      // console.log(result[0].name)
    res.cookie('username', result[0].name)
    res.sendFile(path.join(__dirname, 'public', 'chat.html'))
  } catch (e) {
    next(e);
  }

});

io.on('connection', socket => {
  let username;
  console.log('got a connection');
  socket.on('name', name => {
    username = name;
  })


  socket.on('msg', msg => {
    const obj = { "username": username, "msg": msg };
    socket.broadcast.emit('msg', JSON.stringify(obj));
    socket.emit('myMessage', `${msg}`)
    // io.emit('msg', msg);
  });
  socket.on('disconnect', () => {
    socket.broadcast.emit('msg', `${username} has left the chat`)
  })
});

server.listen(80);
