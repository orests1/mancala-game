var sndloop = new Audio("loop.mp3");

sndloop.addEventListener('ended', function() {
	this.currentTime = 0;
	this.play();
}, false);
sndloop.play();
			
					
document.getElementById('mute').addEventListener('click', function (e)
{
	e = e || window.event;
	sndloop.muted = !sndloop.muted;
	e.preventDefault();
}, false);
