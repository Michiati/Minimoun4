
function validacion (){
    var formvalido = true;

    var nom = document.getElementById("nombre").value;

    if(nom == null || nom.legth == 3){
        alert("El nombre no puede estar vacio");
        formvalido = false;
    }


    return formvalido;
}





