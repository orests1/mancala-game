var backImage = new Array(); 

backImage[0] = "options.jpg";
backImage[1] = "kitten.jpg";
backImage[2] = "33.jpg";
backImage[3] = "";

function changeBGImage(whichImage){
if (document.body){
	document.body.style.backgroundImage = "url("+backImage[whichImage]+")";
}