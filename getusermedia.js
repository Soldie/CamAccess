


var cosnt={
         video: true,
         audio: true
      }


function myfunc(arg){
	
	console.log(arg);
	var video =document.createElement('video');
	video.src=window.URL.createObjectURL(arg);
	document.body.appendChild(video);
	video.play();
};




navigator.webkitGetUserMedia(cosnt,myfunc,function(){});