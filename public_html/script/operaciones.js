

function colocar_numero(text) {
    var actual= document.getElementById("txt_pantalla").value;
    
    if(actual.length === 0){
        document.getElementById("txt_pantalla").value =text;
    } else {
        document.getElementById("txt_pantalla").value =actual + text;
    }
}

function borrar() {
    document.getElementById("txt_pantalla").value = "";
    document.getElementById("txt_pantalla1").value = "";
}

function borrar_ultimo() {
    var actual= document.getElementById("txt_pantalla").value;
    
    if(actual.length === 0){
        document.getElementById("txt_pantalla").value = "";
    } else {
        document.getElementById("txt_pantalla").value = actual.substring(0, actual.length-1);
    }
}

function punto(text) {
    var actual= document.getElementById("txt_pantalla").value;
   
    if(actual.length === 0){
        document.getElementById("txt_pantalla").value = "0.";
    } else {
        if(actual.includes(".")){
            document.getElementById("txt_pantalla").value = actual;
        } else {
            document.getElementById("txt_pantalla").value =actual + text;
        }
    }
}

function operacion(text) {

    var actual= document.getElementById("txt_pantalla").value;

    if(actual.length === 0){
        if(text==='√'){
            document.getElementById("txt_pantalla1").value = "2" + text;
        } else {
            document.getElementById("txt_pantalla1").value = "0" + text;
        }
    } else {
        document.getElementById("txt_pantalla1").value =actual + text;
        document.getElementById("txt_pantalla").value="";
    }
    
    
   
}

function resolver() {
    var primero = document.getElementById("txt_pantalla1").value;
    var segundo = parseFloat(document.getElementById("txt_pantalla").value);
    
    var operacion = primero.substring(primero.length-1, primero.length);
    primero = parseFloat(primero.substring(0, primero.length-1));
    
    var resultado= 0;
    
    switch(operacion){
        case '+':
            resultado= primero + segundo;
            break;
        case '-':
            resultado= primero - segundo;
            break;
        case '*':
            resultado= primero * segundo;
            break;
        case '/':
            resultado= primero / segundo;
            break;
        case '^':
            resultado= Math.pow(primero,segundo);
            break;    
        case '√':
            resultado= Math.pow(1/primero,segundo);
            break; 
    }
    
    document.getElementById("txt_pantalla").value = resultado;
    document.getElementById("txt_pantalla1").value = primero + operacion + segundo;
    
    
}