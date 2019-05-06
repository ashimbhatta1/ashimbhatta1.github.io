var isMenuhide = true;
var sideMenu = document.getElementById('sideMenu')



function toggleOpen(){
	if (isMenuhide ) {
		
		sideMenu.style.width ="45vw"
		sideMenu.style.opacity = 0.7;
		document.querySelector('#toggle').style.translate ='rotated(90deg)';
		

		isMenuhide = false;

	}else {
		sideMenu.style.width ="0vw"
		sideMenu.style.opacity = 0;
		document.getElementById('line2').style.display ="flex";
		isMenuhide = true;

	}

}


function hideMenu(){
		sideMenu.style.width ="0vw"
		sideMenu.style.opacity = 0;
		document.getElementById('line2').style.display ="flex";
		isMenuhide = true;
}



function clean(){
	document.getElementById('email').value ="";
}










