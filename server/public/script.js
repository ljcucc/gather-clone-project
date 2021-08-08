// const socket = io('/'); // connect to localhost:3000/ socket.io server

// const myPeer = new Peer(undefined, {
//   host: '/',
//   port: '3001'
// });

// const peers = {};

(() => {
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
})();