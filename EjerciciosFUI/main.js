//Recuperar los controlres 
let n = document.getElementById("textNum")
let res = document.getElementById("textArea")

// Armar una cadena con el texto textArea
let html = "Tabla del " + n.value + "In";

let num = Number(n.value)
for (let i = 1; i <= 10;i++){
    html += num + "x" + i + "=" + (i * num) + "/n";

}

//Boton 

btnObtener_click.addEventListener("click", function(){
    arguments
})
