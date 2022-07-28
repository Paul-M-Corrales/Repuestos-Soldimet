/* DESAFIO COMPLEMENTARIO */

/* let numero = parseInt(prompt("Ingresa un numero entero menor que 10:"));
for (let i = numero; i <= 10; i++) {
    console.log ("Tu numero es: " + i);
} */

/* SIMULADOR INTERACTIVO */

const productos = [
  { id: 1, nombre: "Juntas", precio: 6800 },
  { id: 2, nombre: "Subconjunto", precio: 23600 },
];
let nombre = prompt(
  "Hola, bienvenido a Soldimet Repuestos, por favor ingresa tu nombre"
);
let mail = prompt(
  "Escribe tu direccion de mail"
);
alert("Bienvenido " + nombre + "!!");
alert("Ops!! Tu compra excede de tu saldo")
function eliminar() {
  let salida = "Que producto deseas eliminar de tu carrito??\n\n";
  for (const producto of productos) {
    salida +=
      producto.id + "-" + producto.nombre + " $" + producto.precio + "\n";
  }
  let eliminar = prompt(salida);
  if (eliminar == 1) {
   productos.shift();
    alert("su producto fue eliminado");
  } else if (eliminar == 2) {
    productos.pop();
    alert("su producto fue eliminado");
  }
  for (const elemento of productos){
    alert("Tu item es: " + elemento.nombre + "\n" + "Tu valor a pagar es: $ " + elemento.precio);


    alert (nombre + " Tu pedido se a realizado con exito!! La factura fue enviada a " + mail );
    let compra = prompt("Como vas a pagar? debito o credito?");
    let cuotas = "credito";
    if (compra == "debito"){
        return alert ("1 cuota de " + elemento.precio)
    } else if ( compra == "credito"){
         cuotas = parseInt(prompt("Indica la cantidad de cuotas, tienes para elegir entre 1, 3, 6, 9 o 12"));    
    }
    
     switch (cuotas){
        case cuotas = 1 :
         alert ("tu pago es 1 cuota de " + elemento.precio);
            break;
            case cuotas = 3 :
         alert ("tu pago es 3 cuota de " + (elemento.precio / 3) ) ;
            break;
            case cuotas = 6:
            alert ("tu pago es 6 cuota de " + (elemento.precio / 6) );
            break;
            case cuotas = 9:
            alert ("tu pago es 9 cuota de " + (elemento.precio / 9) );
            break;
            case cuotas = 12:
            alert ("tu pago es 12 cuota de " + (elemento.precio / 12) );
            break;

    }
  }
}
  eliminar();

