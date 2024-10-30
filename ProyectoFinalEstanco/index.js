var cuentaCarritoElemento = document.getElementById('cuentaCarrito')

var products = []

function aniadirAlCarro(producto, precio){
    products.push(producto + ';' + precio)
    cuentaCarritoElemento.innerText = products.length  

}


var cont = 1;
function procederCompra() {
    
    // for(let i = 0; i < products.length; i++){
    //     for(let j = i+1; j < products.length; i++){

    //         if (products[i]==products[j]){
    //             delete(products[j])
    //             cont++
    //             var producto = (products[i].split(';'))
    //             products[i]=producto[0]+';'+producto[1]*cont;
    //         }
    //     }
    // }
   
    window.location.href = "./form.html?=" + products.join(',');
}