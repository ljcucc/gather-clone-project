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

  var startButton, username, countBtn;

  function onload(){
    startButton = document.querySelector("#start");
    username = document.querySelector("#username");
    countBtn = document.querySelector("#count");

    startButton.addEventListener("click", onStartBtnClicked);
    countBtn.addEventListener("click", onCountBtnClicked);
  }

  function onStartBtnClicked(){
    console.log(`username is: ${username.value}`);
    socket.emit("hello", username.value);
  }

  function onCountBtnClicked(){
    socket.emit("count");
  }
})();