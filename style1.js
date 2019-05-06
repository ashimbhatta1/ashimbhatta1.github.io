window.addEventListener('load', init);


/////game level


var easy = 10;
var medium = 5;
var hard = 3;

//var currentLevel=  prompt('type Hard, Easy or Medium for game level')



//Globals
let time = medium;
let score = 0;
let isplaying;

//DOM Elements
const wordInput = document.querySelector('#usertext');
const currentWord = document.querySelector('#currentWord');
const scoreDisplay = document.querySelector('#scoreValue');
const timeDisplay = document.querySelector('#timeValue');
const message = document.querySelector('#messgae');
const seconds = document.querySelector('#seconds');



const words = [
	'laroid',
	'wang',
	'time',
	'random',
	'wikipedia',
	'encyclopedia',
	'common',
	'welcome',
	'biography',
	'geography',
	'community',
	'feature',
	'objectives',
	'permanent',
	'information',
	'recommended',
	'commendation',
	'retrospective',
	'extended',
	'colleagues',
	'documents',
	'currently',
	'accommodate',
	'handkerchief',
	'indict',
	'conscience',
	'rhythm',
	'playwright',
	'millennium',
	'pharoh',
	'supercede',
	'supercede',
	'pronounciation',
	'pronounciation',
	'defination',
	'ashim',
	'bhatta',

 ]
document.getElementById("message").style.display = "none";
document.getElementById("message1").style.display = "none";




function init(){
	 showwords(words);

	wordInput.addEventListener('input', startMatch)



	 setInterval(countdown,1000);


	 setInterval(checkStatus, 15)

}



//start match

function startMatch(){
	if(matchWords()){
		isplaying = true;
		time = medium + 1;
		showwords(words);
		wordInput.value ='';
		score++;

	}
	scoreDisplay.innerHTML=score;
}



// if score is -1 display 0



//match word

function matchWords(){
	if (wordInput.value === currentWord.innerHTML) {
		document.getElementById("message").style.display = "none";
		document.getElementById("message1").style.display = "block";
		return true;
	} else{
		document.getElementById("message1").style.display = "none";
		document.getElementById("message").style.display = "none";
		return false;

	}
}












                         //creating new function to generate random number




function showwords(words){
	const randomword = Math.floor(Math.random() * words.length)
	currentWord.innerHTML= words[randomword]

}



                         //creating  a function to countdown the players time





function countdown(){
	if (time > 0){
		time--;
	} else if( time === 0){
		isplaying = false;
	}
	
timeDisplay.innerHTML = time;

}




                         //creating new function to check game status



 function checkStatus(){

	if ( !isplaying && time===0) {
		
		document.getElementById("message").style.display = "block";
		document.getElementById("message1").style.display = "none";
		score = -1;
		
		
	}
}
