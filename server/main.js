//Imports
const express = require('express');
const socketIO = require('socket.io');
const { v4: uuidV4 } = require('uuid');

(() => {

  // Server Setup
  const app = express()
  const server = require('http').Server(app)
  const io = socketIO(server);

  app.use('/public', express.static('public'));

  app.get("/api/home", (req, res)=>{
    res.send("I'm working now.");
  });

  app.get("/",(req, res)=>{
    res.redirect("/public/index.html");
  });

  io.on("connection", socket=>{
    console.log("someonl is connected");
    // console.log("Connected socket:");
    // console.log(socket.id);

    var userData = {};
    var countVar = 0;

    // on user joined to room:
    socket.on("join-room", (roomID, uid)=>{
      console.log(`${uid} is joined to room ${roomID}`);

      socket.join(roomID); // join room
      var clients = Array.from(io.sockets.adapter.rooms.get(roomID));

      console.log(clients);

      socket.broadcast.to(roomID).emit("user-joined", uid, clients);

      socket.on('disconnect', () => {
        socket.to(roomID).broadcast.emit('user-leave', uid, clients);
      });
    });

    // hello world socket:
    socket.on("hello", (username)=>{
      console.log(username);
      userData["username"] = username;

      console.log(userData);
    });

    socket.on("count", ()=>{
      ++countVar;
      console.log(countVar);
    });

  });

  // Start the Web Server
  server.listen(3000);
})();