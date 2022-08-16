//Mostrar producto en html

  function MostrarProductosCarrito() {
    const carrito = CargarChevroletCarrito();
    let productos = "";

    if(carrito.lenght == 0){
        productos = `<div class="alert alert-success" role="alert"> CARRITO VACIO!</div>`

    }else{
        productos += `<table class="table table-dark table-hover">`;
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
      <td><button type="button" class="btn btn-light" onclick="EliminardelCarritoChevrolet(${elemento.id});">-</button> ${elemento.cantidad} <button type="button" class="btn btn-light"onclick="AgregarItemAlCarrito(${elemento.id});">+</button></td>
      <td>${elemento.precio * elemento.cantidad}</td>
      <td><button type="button" class="btn btn-light" onclick="EliminardelCarritoChevrolet(${elemento.id});"><img src="../img/basura.jpg"height="25"</button></td>      
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
</table>`;

}
    document.getElementById("compras").innerHTML = productos;

    }

  MostrarProductosCarrito();

  ActualizarChevrolet();
  ActualizarCitroen();
  ActualizarFiat();
  ActualizarFord();
  ActualizarHonda();
  ActualizarNissan();
  ActualizarPeugeot();
  ActualizarRenault();
  ActualizarToyota();
  ActualizarVolkswagen();


