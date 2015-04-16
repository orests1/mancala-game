// Validating Empty Field
var t = 20;
console.log(t);

function check_empty() { 
if ((document.getElementById('option1').checked == true))
{
alert("Wrong answer!");
} 
else if (document.getElementById('option2').checked)
{
alert("Wrong answer!");
} 
else if (document.getElementById('option3').checked)
{
alert("CORRECT!");
document.getElementById('form').submit();
} 
else {

alert("You can continue ");
} 
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}

function random() {
    var x = Math.floor((Math.random() * 10) + 1);
	var y = Math.floor((Math.random() * 10) + 1);
	var p = Math.floor((Math.random() * 3) + 1);
	
	
	var R = x + y;
	
	var t = x*y;
	var u = x+y+y;
	var i = x + y; 
	console.log("x " + x);
	console.log("y " + y);
	console.log("t " + t);
	console.log("u " + u);
	console.log("i " + i);
	console.log("R " + R);
	
	document.getElementById("roption1").innerHTML = t;
	document.getElementById("roption2").innerHTML = u;
	document.getElementById("roption3").innerHTML = i;
	/*
	switch(p) {
	case 1: 
	document.getElementById("option1").innerHTML = t;
	document.getElementById("option2").innerHTML = u;
	document.getElementById("option3").innerHTML = i;        
	
	break;
	case 2:
	
	document.getElementById("option1").innerHTML = u;
	document.getElementById("option2").innerHTML = i;
	document.getElementById("option3").innerHTML = t;
	break;
	case 3: 
	
	document.getElementById("option1").innerHTML = i;
	document.getElementById("option2").innerHTML = t;
	document.getElementById("option3").innerHTML = u;
	break;
	} */
    document.getElementById("no1").innerHTML = x;
    document.getElementById("no2").innerHTML = y;
 //   document.getElementById("result").innerHTML = R;
	//document.getElementById('abc').style.display = "block";
   // document.getElementById("question").innerHTML = text;
	
}
