var btn = document.querySelector("#cript");
var saidaTexto = document.getElementById("div#inputSaida");



function mostraEsconde(){
    var container = document.querySelector('#inputSaida');
    var carga = document.querySelector('#saida');
    var copia = document.querySelector('.copia');
    
        if(container.style.display === 'none'){
            container.style.display = 'block';
            carga.style.display = 'none';
            copia.style.display = 'block';
        } container.style.display = 'block';
        carga.style.display = 'none';
        copia.style.display = 'block';
      
    }
function mostraTexto() { 
    var texto = document.querySelector("#entrada-text").value;
    var textoConvert = texto.toLowerCase();
    if(textoConvert == ""){
        alert("Favor digitar um texto!!!")
    }else{
        var criptografia = textoConvert.replace(/e/g, "enter");
        var criptografia = criptografia.replace(/i/g, "imes");
        var criptografia = criptografia.replace(/a/g, "ai");
        var criptografia = criptografia.replace(/o/g, "ober");
        var criptografia = criptografia.replace(/u/g, "ufat");

        mostraEsconde();
    
        var saidaTexto = document.querySelector("#inputSaida");
        saidaTexto.innerHTML = criptografia;
  
    }

}
 

    function descriptografar(){
        var texto = document.querySelector("#entrada-text").value;
    var textoConvert = texto.toLowerCase();
    if(textoConvert == ""){
        alert("Favor digitar um texto!!!")
    }else{
        var descriptografia = textoConvert.replace(/enter/g, "e");
        var descriptografia = descriptografia.replace(/imes/g, "i");
        var descriptografia = descriptografia.replace(/ai/g, "a");
        var descriptografia = descriptografia.replace(/ober/g, "o");
        var descriptografia = descriptografia.replace(/ufat/g, "u");

        mostraEsconde();
    
        var saidaTexto = document.querySelector("#inputSaida");
        saidaTexto.innerHTML = descriptografia;

    }

    }
    

    function copia() {
    let textArea = document.getElementById('inputSaida').value;
    var texto = document.querySelector("#entrada-text");
    
    navigator.clipboard.writeText(textArea);
  
    alert('Texto copiado para área de transferência! Utilize Ctrl+V para colar');
    
    texto.value = " ";
    document.getElementById("entrada-text").focus();

}
   
   

