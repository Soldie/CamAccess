
function myFunction(arg)
{
	var conta = document.getElementById('container');
var child=document.createElement("div");

var t=document.createTextNode("CLICK ME");
child.appendChild(t);
child.style.left='40%';
child.style.top='30%';
child.style.position='absolute';


conta.appendChild(child);
}








var cosnt={
         video: true,
         audio: true
      }

var container = document.getElementById('main-child');

function error(e) {
	console.log(e);
}

function success(arg){
	
	console.log(arg);
	video =document.createElement('video');
	video.src=window.URL.createObjectURL(arg);
	container.appendChild(video);
	video.play();
}




function myWeb(){ 
	console.log('aaa');
	navigator.webkitGetUserMedia(cosnt,success,error);
	console.log('bbb');
}




