var sndloop = new Audio("loop.mp3");

sndloop.addEventListener('ended', function() {
	this.currentTime = 0;
	this.play();
}, false);
sndloop.play();
		function mute(element) {
			if (element.src.indexOf("volume-mute") != -1) {
				sndloop.play();
				element.src = "buttons/volume.png";
				muted = 0;
				} else {
				sndloop.pause();
				element.src = "buttons/volume-mute.png";
				muted = 1;
			}
		}
		
					
document.getElementById('mute').addEventListener('click', function (e)
{
	e = e || window.event;
	sndloop.muted = !sndloop.muted;
	e.preventDefault();
}, false);
