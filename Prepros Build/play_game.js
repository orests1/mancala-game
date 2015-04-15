var play_game = function (game) {
    var board;
	var myRadioValue;
	
	function radioValue(jqRadioButton){
		if (jqRadioButton.length) {
			myRadioValue = jqRadioButton.val();
		}
		else {
			myRadioValue = 0;
		}
	}

	
    var init = function () {
        board = game.init(show_turn, show_winner);
        for (var i in board) {
            c(i).onclick = click;
		}
        
        show();
	};
	
    var show = function () {
        for (var i in board) {
            c(i).innerHTML = board[i];
		}
	};
	
    var click = function () {
        board = game.play(board, parseInt(this.id.replace("cell", "")));
        show();
	};
	
    var show_turn = function (player) {
		g("turn").innerHTML = "Player " + player + "'s turn"; 
	};
	
    var show_winner = function (result) {
        g("turn").innerHTML = "GAME OVER";
        g("results").innerHTML = "P0: " + result.result[0] + "; P1: " + result.result[1] + ".";
	};
	
    var c = function (index) {
        return g("cell" + index);
	};
	
    var g = function (id) {
        return document.getElementById(id);
	};
	
    return {
        init: init
	};
};
// show the given page, hide the rest
function show(elementID) {
	// try to find the requested page and alert if it's not found
	var ele = document.getElementById(elementID);
	if (!ele) {
		alert("no such element");
		return;
	}
	
	// get all pages, loop through them and hide them
	var pages = document.getElementsByClassName('page');
	for(var i = 0; i < pages.length; i++) {
		pages[i].style.display = 'none';
	}
	
	// then show the requested page
	ele.style.display = 'block';
};


$(document).ready(function(){
	
	$('input[name=Difficulty]').click(function() {
		alert($('input[name=Difficulty]:checked').val());
	});

});
