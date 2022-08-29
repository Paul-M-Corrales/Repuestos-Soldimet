//Mostrar producto en html
function MostrarProductosValvulasCarrito() {
    const carrito = CargarValvulasChevroletCarrito();
    let productos = "";

    if(carrito.length == 0){
        productos = AlertVacio();

    }else{
        productos +=`<table class="table table-dark table-hover">
         <tr>
        <td class="text-end" colspan="6"><button type="button" class="btn btn-light" onclick="VaciarCarritoValvulasChevrolet();">Vaciar Carrito<img src="../img/basura.jpg"height="25"></img></button>
        </td>
      </tr>`;
        carrito.forEach((elemento) => {
            productos += `<thead>
    <tr>
      <th scope="col">Marca</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio final</th>
      <th scope="col">eliminar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="../img/${elemento.imagen}"height="40"></th>
      <td>${elemento.nombre}</td>
      <td>${elemento.precio}</td>
      <td><button type="button" class="btn btn-light" onclick="EliminardelCarritoValvulasChevrolet(${elemento.id});">-</button> ${elemento.cantidad} <button type="button" class="btn btn-light"onclick="AgregarItemAlCarrito(${elemento.id});">+</button></td>
      <td>${elemento.precio * elemento.cantidad}</td>
      <td><button type="button" class="btn btn-light" onclick="EliminardelCarritoValvulasChevrolet(${elemento.id});"><img src="../img/basura.jpg"height="25"</button></td>      
    </tr>
    </tbody>`;})

productos +=`<tr>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<th scope="col">Total a pagar</th>
<td><b>$${SumatotalaPagar()}</b></td>
</tr>
<tr>
<td class="text-end" colspan="6"><button type="button" class="btn btn-light" onclick="FinalizarPago();">Finalizar pago<img src="../img/pago.png"height="25"></img></button>
</td>
</tr>
</table>`;

}
    document.getElementById("compras").innerHTML = productos;

    }

  MostrarProductosValvulasCarrito();

  ActualizarValvulasChevrolet();
  ActualizarValvulasCitroen();
  ActualizarValvulasFiat();
  ActualizarValvulasFord();
  ActualizarValvulasHonda();
  ActualizarValvulasNissan();
  ActualizarValvulasPeugeot();
  ActualizarValvulasRenault();
  ActualizarValvulasToyota();
  ActualizarValvulasVolkswagen();


