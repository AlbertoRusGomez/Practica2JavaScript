let inicializar = function () {
    let boton = document.getElementById('agregar');
    boton.onclick = agregarLinea;
}

// Inicialización de la aplicación cuando se carga el DOM
document.body.onload = inicializar;
let total_compra = 0;

let agregarLinea = function () {
    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio_unitario = document.getElementById("precio-unitario").value;

    let precio_total = precio_unitario*cantidad;


    document.getElementById("tbody").insertRow(-1).innerHTML = '<td>'+producto+'</td><td>'+cantidad+'</td><td>'+precio_unitario+
    '€</td><td>'+precio_total+'€</td>';

    
    total_compra = total_compra + precio_total;
    let decimal_base = total_compra;
    let decimal_iva = total_compra * 0.21;
    let total_factura = decimal_base + decimal_iva;
    
    document.getElementById("base-imponible").innerHTML = decimal_base.toFixed(2);
    document.getElementById('iva').innerHTML = decimal_iva.toFixed(2);
    document.getElementById('total').innerHTML = total_factura.toFixed(2);

}
