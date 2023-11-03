const localVideo=document.getElementById('localVideo');
const startButton=document.getElementById('startButton');
const stopButton=document.getElementById('stopButton');

let localStream;

startButton.addEventListener('click',startVideo);
stopButton.addEventListener('click',stopVideo);

async function startVideo(){
    try{
        localStream=await navigator.mediaDevices.getUserMedia({video:true,audio:true});
        localVideo.srcObjrct=localStream;
    }catch(error){
        console.error('Error accessing camera and microphone:',error);

    }
}

function stopVideo(){
    if(localStream){
        localStream.gettracks().forEach(track=>track.stop());
        localVideo.srcObject-null;
    }
}
