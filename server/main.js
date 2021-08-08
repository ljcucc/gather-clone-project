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
    console.log("Connected socket:");
    console.log(socket.id);

    var userData = {};
    var countVar = 0;

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