

var ulElemento = document.getElementById('productosCarro');
var cuentaCarritoElemento = document.getElementById('cuentaCarrito');


var total2Elemento = document.getElementById('total2');
var totalElemento = document.getElementById('total');
var subtotalElemento = document.getElementById('subtotal');
var ivaElemento = document.getElementById('iva');


var colorCaja = document.getElementsByClassName(".caja")




function obtenerProductos() {
    var urlCad = window.location.href;
    var urlArray = urlCad.split('?=');
    urlArray.shift();
    

    if (urlArray[0].trim() === '') {
        var liNoHayProductos = document.createElement('li');
        liNoHayProductos.innerText = 'No ha seleccionado productos';
        ulElemento.appendChild(liNoHayProductos);
        return;
    }

    var productos = urlArray.toString().split(',');
    cuentaCarritoElemento.innerText = " " + productos.length;
    var productosContados = {};

    for (let i = 0; i < productos.length; i++) {
        if (productosContados[productos[i]]) {
            productosContados[productos[i]]++;
        } else {
            productosContados[productos[i]] = 1;
        }
    }

   

    for (let producto in productosContados) {
        var productosArray = producto.split(';');
        var nombreProducto = productosArray[0] + " x" + productosContados[producto];
        var precioProducto = parseFloat(productosArray[1]) * productosContados[producto];

        var liElemento = document.createElement('li');
        liElemento.innerText = nombreProducto + ' - ' + precioProducto.toFixed(2) + ' €';
        ulElemento.appendChild(liElemento);
    }
 
    calcularTotal(productos);
}

function calcularTotal(productos) {
    var total = 0;

    for (let i = 0; i < productos.length; i++) {
        var productosArray = productos[i].split(';');
        var precioProducto = parseFloat(productosArray[1]);
        total += precioProducto;
    }

    var subtotal = total / 1.21;
    var iva = total - subtotal;
    total2Elemento.value = total.toFixed(2) + ' €';
    totalElemento.innerText = 'Total: ' + total.toFixed(2) + ' €';
    subtotalElemento.innerText = 'Subtotal: ' + subtotal.toFixed(2) + ' €';
    ivaElemento.innerText = 'IVA (21%): ' + iva.toFixed(2) + ' €';

}



function validarCP() {
    var botonCP = document.querySelector(".cp");
    botonCP.addEventListener("blur", function(){
        let bCP = botonCP.value.trim()
        if (bCP.length==5){
            botonCP.style.border = "none"; 
            botonCP.style.color = "black";
        }else{
            botonCP.style.border="solid red";
            botonCP.style.color="red";
        }
    })
}


function validarTlf() {
    var tlf = document.querySelector(".tlf");
    tlf.addEventListener("blur", function(){
        let numTlf = parseInt(tlf.value.charAt(0)); 
        if (tlf.value.length !== 9 || (numTlf < 6 || numTlf > 9)){ 
            tlf.style.border = "solid red";
            tlf.style.color = "red"; 
        } else {
            tlf.style.border = "none";
            tlf.style.color = "black"; 
        }
    })
}

function validarEmail() {
    var correo = document.querySelector(".mail");

    correo.addEventListener("blur", function() {
        var partesEmail = correo.value.split('@');

        if (partesEmail.length !== 2 || partesEmail[0] === "" || partesEmail[1] === "") {
            correo.style.border = "solid red";
            correo.style.color = "red";
            return; 
        }

        var dominio = partesEmail[1].split('.');

        if (dominio.length < 2 || dominio[0] === "" || dominio[1] === "" || dominio[1].length < 2 || dominio[1].length > 3) {
            correo.style.border = "solid red";
            correo.style.color = "red";
            return; 
        }

        correo.style.border = ""; 
        correo.style.color = ""; 
    });
}


validarCP();
validarTlf();
validarEmail();
obtenerProductos();