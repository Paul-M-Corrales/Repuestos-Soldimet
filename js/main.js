/* DESAFIO COMPLEMENTARIO */

/* let numero = parseInt(prompt("Ingresa un numero entero menor que 10:"));
for (let i = numero; i <= 10; i++) {
    console.log ("Tu numero es: " + i);
} */

/* /* SIMULADOR INTERACTIVO*/

// SIMULADOR DEL LADO DEL VENDEDOR
/*   const ProductosAvender = [];

function IngresarProductos() {
  class producto {
    constructor(id, nombre, precio, stock) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
    }
  }

  let cargarproductos = parseInt(
    prompt(
      "BIENVENIDO SEÑOR ADMINISTRADOR!! \n " +
        "A continuacion usted podra cargar los productos que desea vender \n" +
        "Cuantos productos desea agregar a su programa??"
    )
  );
  for (let i = 0; i < cargarproductos; i++) {
    let id_art = prompt("Ingrese (ID) numero de identificacion del producto");
    let nombre_art = prompt("Ingrese el nombre del producto a agregar");
    let precio_art = prompt("Ingrese el precio del producto agregado");
    let stock_art = prompt("Ingrese el stock del producto agregado");

    const newproducto = new producto(id_art, nombre_art, precio_art, stock_art);
    ProductosAvender.push(newproducto);
    console.log(ProductosAvender);
  }
  alert(
    "Se a realizado con exito la carga de productos. A continuacion le daremos inicio al programa de venta"
  );
}


// SIMULADOR DEL LADO DEL COMPRADOR

class item {
  constructor(elemento) {
    this.id = elemento.id;
    this.nombre = elemento.nombre;
    this.precio = elemento.precio;
  } 
}
const carrito = [];

function CargarEnCarrito(item) {
  carrito.push(item);
}
function BuscarProducto(id) {
  return ProductosAvender.find((elemento) => elemento.id == id);
}


function Agregar() {
  let nombre = prompt(
    "Hola, bienvenido a Soldimet Repuestos, por favor ingresa tu nombre"
  );
  
  let mail = prompt("Escribe tu Email");
  
  alert("Bienvenido " + nombre + "!!");
  let salida =
    "Elige el numero del producto deseado. Cancelar para salir: \n\n";
  for (let item of ProductosAvender) {
    salida += item.id + "=>" + item.nombre + "  $" + item.precio + "\n";
  }
  let id_item = 0;

  while (id_item != null) {
    let id_item = prompt(salida);

    if (id_item != null) {
      id_item = parseInt(id_item);
    } else {
      break;
    }

    let producto = BuscarProducto(id_item);
    console.log(producto);
    CargarEnCarrito(producto);
  } 
  let pago = "Los productos elegidos son : \n\n";
  let total = 0;
  for (let producto_carrito of carrito) {
    let producto = new item(producto_carrito);
    total += parseInt(producto.precio);
    pago+=
      producto_carrito.id + "=>" + producto_carrito.nombre + "  $" + producto_carrito.precio + "\n";
      alert(pago);
  }
  alert(
    nombre +
      " Tu pedido se a realizado con exito!! La factura fue enviada a " +
      mail +
      " Tu total a pagar es de $ " +
      total +
      " IVA inluido"
  );

  let compra = prompt("Como vas a pagar? debito o credito?");
  let cuotas = "credito";
  if (compra == "debito") {
    return alert("1 cuota de " + total);
  } else if (compra == "credito") {
    cuotas = parseInt(
      prompt(
        "Indica la cantidad de cuotas, tienes para elegir entre 1, 3, 6, 9 o 12"
      )
    );
  }
  switch (cuotas) {
    case (cuotas = 1):
      alert("tu pago es 1 cuota de " + total);
      break;
    case (cuotas = 3):
      alert("tu pago es 3 cuota de " + total / 3);
      break;
    case (cuotas = 6):
      alert("tu pago es 6 cuota de " + total / 6);
      break;
    case (cuotas = 9):
      alert("tu pago es 9 cuota de " + total / 9);
      break;
    case (cuotas = 12):
      alert("tu pago es 12 cuota de " + total / 12);
      break;
  }
}
IngresarProductos();
Agregar(); */

// EVENTOS (PAGINA JUNTAS.HTML)

const productos = [
  { id: 1, nombre: "Junta ford", precio: 3000, imagen: "juntas.jpg" },
  { id: 2, nombre: "Junta fiat", precio: 3400, imagen: "juntas.jpg" },
  { id: 3, nombre: "Junta chevrolet", precio: 3700, imagen: "juntas.jpg" },
  { id: 4, nombre: "Junta renault", precio: 3900, imagen: "juntas.jpg" },
];

class item {
  constructor(elemento) {
    this.id = elemento.id;
    this.nombre = elemento.nombre;
    this.precio = elemento.precio;
    this.imagen = elemento.imagen;
  }
}
const carrito = [];

function CargarEnCarrito(item) {
  carrito.push(item);
}
function BuscarProducto(id) {
  return productos.find((elemento) => elemento.id == id);
}

function Agregar() {
  let nombre = prompt(
    "Hola, bienvenido a Soldimet Repuestos, por favor ingresa tu nombre"
  );

  alert("Bienvenido " + nombre + "!!");
  let salida =
    "Elige el numero del producto deseado. Cancelar para salir: \n\n";
  for (let item of productos) {
    salida += item.id + "=>" + item.nombre + "  $" + item.precio + "\n";
  }

  let id_item = 0;

  while (id_item != null) {
    let id_item = prompt(salida);

    if (id_item != null) {
      id_item = parseInt(id_item);
    } else {
      break;
    }

    let producto = BuscarProducto(id_item);
    console.log(producto);
    CargarEnCarrito(producto);
  }
  let total = 0;
  for (let producto_carrito of carrito) {
    let producto = new item(producto_carrito);
    total += parseInt(producto.precio);

  }
let debito= document.getElementById("debito");
let cuota1= document.getElementById("cuota1");
let cuota3= document.getElementById("cuota3");
let cuota6= document.getElementById("cuota6");
let cuota9= document.getElementById("cuota9");
let cuota12= document.getElementById("cuota12");
function clickdebito(){
  document.getElementById("debito").innerHTML= "Tu total a pagar es: $" + total;
}

  function case1() {    
    document.getElementById("cuota1").innerHTML="tu pago es 1 cuota de " + total;    
  }
  function case3() {    
    document.getElementById("cuota3").innerHTML="tu pago es 3 cuota de " + (total / 3);
  }
  function case6() {    
    document.getElementById("cuota6").innerHTML="tu pago es 6 cuota de " + (total / 6);
  }
  function case9() {    
    document.getElementById("cuota9").innerHTML="tu pago es 9 cuota de " + (total / 9);
  }
  function case12() {    
    document.getElementById("cuota12").innerHTML="tu pago es 12 cuota de " + (total / 12);
  }
 
 debito.addEventListener("click",clickdebito);
 cuota1.addEventListener("click",case1);
 cuota3.addEventListener("click",case3);
 cuota6.addEventListener("click",case6);
 cuota9.addEventListener("click",case9);
 cuota12.addEventListener("click",case12);

}

Agregar();
