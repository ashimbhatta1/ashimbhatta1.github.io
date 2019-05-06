
function add(){

	if (document.getElementById('userInput').value === "") {
		alert("Please type some text..")


	}else{


		var newWork = document.getElementById('userInput').value;
		var li = document.createElement("li");
		li.innerText = newWork;
		document.getElementById("show").appendChild(li);

		document.getElementById('userInput').value =""
	}


	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode('X') )
	li.appendChild(btn);
	btn.addEventListener('click' , deleteListItem);


	function deleteListItem(){
		 li.parentNode.removeChild(li);
	}
		




}
























