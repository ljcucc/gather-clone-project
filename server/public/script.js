const socket = io('/'); // connect to localhost:3000/ socket.io server

// const myPeer = new Peer(undefined, {
//   host: '/',
//   port: '3001'
// });

// const peers = {};

(() => {
  // console.log(`New socket : ${socket}`); 
  console.log("New socket:");
  console.log(socket);

  const videoGrid = document.querySelector("#video-grid");
  const chatRoomDom = document.querySelector(".chat-room");

  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
  }).then(stream => { // on video and mic allow
    console.log("Webcan is working!")
    createSelfVideo(stream);
  });

  function createSelfVideo(stream){
    console.log("creating self video element");

    var selfVideo = document.createElement("video");
    selfVideo.srcObject = stream;
    selfVideo.autoplay = true;
    selfVideo.muted = true;

    videoGrid.appendChild(selfVideo);
  }

  window.addEventListener("load", onload);

  var startButton, username, roomID, chatlog;

  function onload(){
    startButton = document.querySelector("#start");
    username = document.querySelector("#username");
    roomID = document.querySelector("#roomID");
    chatlog = document.querySelector("#chat-log");

    startButton.addEventListener("click", onStartBtnClicked);
    socket.on("user-joined", onUserJoined);
  }

  function onStartBtnClicked(){
    console.log(`username is: ${username.value}`);
    socket.emit("hello", username.value);

    joinRoom();
  }

  function onUserJoined(uid){
    if(uid == username.value) return;
    appendChatLog(`Someone called ${uid} is joined to this room`);
  }

  function joinRoom(){
    socket.emit("join-room", roomID.value, username.value);
    appendChatLog(`You're joined into room ${roomID.value}`);
  }

  function appendChatLog(message){
    chatlog.innerHTML += `${message}</br>`;
  }
})();