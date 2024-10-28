document.getElementById('boton').addEventListener('click', validacionDNI);
const cadena = 'TRWAGMYFPDXBNJZSQVHLCKE';
function validacionDNI(){
    let dni = document.getElementById('dni').value.trim();
    let letraCorresp='';
    let letra = String(dni.slice(8)).toUpperCase();
    let numero = Number(dni.slice(0,8));
    let resto = numero % 23;
    for(i=0; i<cadena.length; i++){
        if(resto==i){
            letraCorresp = cadena[i];
        }
    }
    if(letra==letraCorresp){
        alert('DNI correcto');
    }else{
        alert('DNI incorrecto');
    }
}