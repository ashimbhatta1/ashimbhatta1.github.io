 window.addEventListener('load', init);

function init(){
	setInterval(myfunction, 1)
}


//var usersInput = document.getElementById('userInput').value;
//var tipsPercent = document.getElementById('tipPercent').value;



 function myfunction(){
	var usersInput = document.getElementById('userInput').value;
	var tipsPercent = document.getElementById('tipPercent').value;
	document.getElementById('tipPercentValue').innerHTML = tipsPercent + '%';

}





document.getElementById("calculate").addEventListener("click", calculate);

function calculate() {

var usersInput = document.getElementById('userInput').value;
var tipsPercent = document.getElementById('tipPercent').value;
  usersInput =  parseInt(usersInput )


  //calculate tip amount//
var tips = (usersInput * tipsPercent) / 100
document.getElementById('value').innerHTML = tips;
tip= Math.floor(tips)


	//calculate total amount//
var totalBill = usersInput  +tip
document.getElementById('billTotal').innerHTML = totalBill;
	
}

