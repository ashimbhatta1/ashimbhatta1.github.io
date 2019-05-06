window.addEventListener('load', init);


function init(){
	setInterval(myFunction, 0.00001)

}






/////// to print the num in textview/////////

function input(num){
	if (document.getElementById('textview').value == 0) {
		document.getElementById('textview').value = num;
	}else{
		document.getElementById('textview').value = document.getElementById('textview').value+ num;
	}
}






//////////to print the operaters  after num///////////
function operaters(x){
	if (document.getElementById('textview').value == 0) {
		document.getElementById('textview').value = num;
		}else {
		document.getElementById('textview').value = document.getElementById('textview').value+ x;
	}
		



}
	






////////////to calculate the program//////////
function equal(){
	var x =document.getElementById('textview').value;
	
	
	document.getElementById('textview').value = eval(document.getElementById('textview').value )


}






///////////////function for c(to clear) button//////////

function clean(num){
	//var x = document.getElementById('textview');
	document.getElementById('textview').value = ""
}








////////////////////function to cut (x button) last num//////////////////
function cut(){
	var str =document.getElementById('textview').value 
	document.getElementById('textview').value = str.substring(0, str.length - 1);
}










//////////////to remove undefined value///////////////////


function myFunction(){
		if (document.getElementById('textview').value === 'undefined') {
			document.getElementById('textview').value = 0;
		}

		if (document.getElementById('textview').value === 'Infinity') {
			document.getElementById('textview').value = 'fuck you';
		}
		if (document.getElementById('textview').value === '') {
			document.getElementById('textview').value = 0;
		}
		//document.getElementById('textview').value = ""
		
		



}

