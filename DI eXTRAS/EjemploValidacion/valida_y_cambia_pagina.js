/**
 * @author mangekyou
 */


var currentPage;
function init(){
	currentPage = document.getElementById('seccion1');
}

function change_page(id) {
	document.getElementById("msg").className = "no-visible";
	
	var newPage = document.getElementById(id);

	if(validacion1()){
		
			currentPage.className = "main-container";
			newPage.className = "main-container active";
			currentPage = newPage;
		
	}
	else{
		alert("verifica datos");
	}
	

}

function send_form(){
	if (validacion2()){
		
		currentPage.className = "main-container";
		document.getElementById("seccion1").className = "main-container active";
		document.getElementById("msg").className = "";
		currentPage = document.getElementById('seccion1');
		
		alert("enhorabuena!!! paso validaciones");
	}
	else{
		alert("verifica datos");
	}
	
	
}

function validacion1(){
	valorCampo1 = document.getElementById("campo1").value;
	
	if(valorCampo1.length==0){
		return false;
	}
	return true;
}
function validacion2(){
	valorCampo2 = document.getElementById("campo2").value;
	
	if(valorCampo2.length==0){
		return false;
	}
	return true;
}


window.addEventListener("load", init, false);
//window.onload=init;