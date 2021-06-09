function redLight(val){
    val.src="Images/red-light.png";
    val.style.boxShadow =  "0 0 8px 10px rgba(255, 0, 0, 0.9)";
    val.style.borderRadius = '80%';
    console.log("A red light means stop")
}


function yellowLight(val){
    val.src="Images/yellow-light.png";
    val.style.boxShadow =  "0 0 8px 10px rgba(255, 230, 2, 0.9)";
    val.style.borderRadius = '80%';
    console.log("A yellow light means slow down and be ready to stop")
}

function greenLight(val){
    val.src="Images/green-light.png";
    val.style.boxShadow =  "0 0 8px 10px rgba(114, 236, 0, 0.9)";
    val.style.borderRadius = '80%';
    console.log("A green light means go")
}

function offLight(val){
    val.src="Images/offLight.png";
    val.style.boxShadow =  "none";
}
