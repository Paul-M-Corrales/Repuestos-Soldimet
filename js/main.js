let nombre = prompt("Hola, bienvenido a Soldimet Repuestos, por favor ingresa tu nombre");
let mail = prompt("danos tu mail");
function pago(){  
let producto = parseInt (prompt ("Bien!! Ahora dime cuantos productos deseas comprar??"))

const valorproducto = 1000; 
let resultado = producto * valorproducto; 

if ( producto >= 20){
    return alert ("Obtuviste un 10% de descuento!! El pago es solo de contado..." + nombre + " tu valor a pagar es de $ " + (resultado - (resultado * 0.1 ) ) + " La factura fue enviada a " + mail )
    
}   else if (producto == 0){
    return alert ("no realizaste tu compra");
}    alert (nombre + " Tu pedido se a realizado con exito!! La factura fue enviada a " + mail + " Tu valor a pagar es de $ "  + resultado);
    let compra = prompt("Como vas a pagar? debito o credito?");
    let cuotas = "credito";
    if (compra == "debito"){
        return alert ("1 cuota de " + resultado)
    } else if ( compra == "credito"){
         cuotas = parseInt(prompt("Indica la cantidad de cuotas, tienes para elegir entre 1, 3, 6, 9 o 12"));    
    } switch (cuotas){
        case cuotas = 1 :
         alert ("tu pago es 1 cuota de " + resultado);
            break;
            case cuotas = 3 :
         alert ("tu pago es 3 cuota de " + (resultado / 3) ) ;
            break;
            case cuotas = 6:
            alert ("tu pago es 6 cuota de " + (resultado / 6) );
            break;
            case cuotas = 9:
            alert ("tu pago es 9 cuota de " + (resultado / 9) );
            break;
            case cuotas = 12:
            alert ("tu pago es 12 cuota de " + (resultado / 12) );
            break;

    }
}
pago();



  

 