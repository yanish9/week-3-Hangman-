

var score = 0;
var tries= 0;
var word = [ 'advance', 'western', 'horses', 'guns', 'hang', 'web'  ];
var span ="";
var selectedWord;


var audio = new Audio('assets/sounds/audio.mp3');
audio.play();

setupNewGame();


var temp = [];


window.addEventListener("keyup", function(e) {



	var computerGuess = String.fromCharCode(e.keyCode).toLowerCase();

	if ( selectedWord.indexOf(computerGuess) > -1 ){

		for (var i = selectedWord.indexOf(computerGuess) ; i<selectedWord.length ; i++){	
						//console.log(selectedWord.charAt(i) + computerGuess);
						if (selectedWord.charAt(i) == computerGuess) {
							document.getElementById(i).innerHTML = computerGuess + " "; 

							temp[i] = computerGuess;
							if (temp.join("") == selectedWord ) {
								score = score + 1 ;
								document.getElementById("displayWin").innerHTML =  score;
								var audio = new Audio('assets/sounds/win.mp3');
								audio.play();

								setupNewGame();




							}
						}

					}

				}

				else {
					tries = tries +1;

					document.getElementById("guess").innerHTML =  document.getElementById("guess").innerHTML + " " + computerGuess;


					switch (tries) {
						case 1:
						document.getElementById("hang").src="images/1.png";
						break;
						case 2:
						document.getElementById("hang").src="images/2.png";
						break;
						case 3:
						document.getElementById("hang").src="images/3.png";
						break;
						case 4:
						document.getElementById("hang").src="images/4.png";
						break;
						case 5:
						document.getElementById("hang").src="images/5.png";
						break;
						case 6:
						document.getElementById("hang").src="images/6.png";
						window.setTimeout(setupNewGame, 2000);


						break;

						default:
							// statements_def
							break;
						}


					}


				}
				);


function setupNewGame () {
	
	document.getElementById("word").innerHTML = "";
	span = "";
	tries = 0 ;
	
	temp = []; 

	selectedWord = word[Math.floor((Math.random() * word.length))]
	for (var i = 0 ; i < selectedWord.length ; i++){
		span = span + ("<span id=" + i + ">_  </span>");
	}


	document.getElementById("word").innerHTML = span; 

	document.getElementById("hang").src="images/0.png";

	document.getElementById("guess").innerHTML = "";
}






