'use strict';

const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    console.log('Error here: ', error);
  }
}
button.addEventListener('click', async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

// On Load
selectMediaStream();