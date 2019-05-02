var isMenuShown = false;
function sideNav(){
	if (isMenuShown === false) {
		document.getElementById('list').style.display = 'flex'
		document.getElementById('line3').style.display="none"
		document.getElementById('line1').style.transform= "rotate(45deg)"
		document.getElementById('line2').style.transform= "rotate(-45deg)"
		document.getElementById('line1').style.marginButtom= "0"
		document.getElementById('line2').style.marginTop= "-6px"
		document.getElementById('line2').style.transition= "0.3s"
		document.getElementById('line1').style.transition= "0.3s"
		document.getElementById('line1').style.backgroundColor= "green"
		document.getElementById('line2').style.backgroundColor= "green"
		isMenuShown = true
	}else {
		document.getElementById('list').style.display = 'none'
		document.getElementById('line3').style.display="flex"
		document.getElementById('line1').style.transform= "rotate(-0)"
		document.getElementById('line2').style.transform= "rotate(0)"
		document.getElementById('line1').style.marginButtom= "2px"
		document.getElementById('line2').style.marginTop= "2px"
		document.getElementById('line2').style.transition= "0.3s"
		document.getElementById('line1').style.transition= "0.3s"
		document.getElementById('line1').style.backgroundColor= "white"
		document.getElementById('line2').style.backgroundColor= "white"
		isMenuShown = false

	}
	document.getElementById('toggle').style.animationName= "rotated"
	
}


function hideMenu(){
	document.getElementById('list').style.display = 'none'
	document.getElementById('line3').style.display="flex"
		document.getElementById('line1').style.transform= "rotate(-0)"
		document.getElementById('line2').style.transform= "rotate(0)"
		document.getElementById('line1').style.marginButtom= "2px"
		document.getElementById('line2').style.marginTop= "2px"
		document.getElementById('line1').style.backgroundColor= "white"
		document.getElementById('line2').style.backgroundColor= "white"
		isMenuShown = false

}

function background(){
	document.getElementById("ab").style.opacity = 1
}



















