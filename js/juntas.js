//Mostrar producto en html


function MostrarProductosChevrolet() {
  const juntas_chevrolet = CargarChevroletLS();
  let chevrolet = "";

  juntas_chevrolet.forEach((elemento) => {
    chevrolet += `<div class="col-6 col-sm-4">
                <div class="card text-center" style="width: 18rem;">
                <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                <div class="card-body">
                  <h5 class="card-title">${elemento.nombre}</h5>
                  <p class="card-text">$${elemento.precio}</p>
                  <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoChevrolet(${elemento.id})">Agregar</a>
                </div>
                </div>
                </div>`;
  });
  document.getElementById("chevrolet").innerHTML = chevrolet;
}

MostrarProductosChevrolet();

function MostrarProductosCitroen() {
  const juntas_citroen = CargarCitroenLS();
  let citroen = "";

  juntas_citroen.forEach((elemento) => {
    citroen += `<div class="col-6 col-sm-4">
        <div class="card text-center" style="width: 18rem;">
        <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
        <div class="card-body">
          <h5 class="card-title">${elemento.nombre}</h5>
          <p class="card-text">$${elemento.precio}</p>
          <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCitroen(${elemento.id})">Agregar</a>
        </div>
        </div>
        </div>`;
  });
  document.getElementById("citroen").innerHTML = citroen;
}

MostrarProductosCitroen();

function MostrarProductosFiat() {
  const juntas_fiat = CargarFiatLS();
  let fiat = "";

  juntas_fiat.forEach((elemento) => {
    fiat += `<div class="col-6 col-sm-4">
            <div class="card text-center" style="width: 18rem;">
            <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
            <div class="card-body">
              <h5 class="card-title">${elemento.nombre}</h5>
              <p class="card-text">$${elemento.precio}</p>
              <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoFiat(${elemento.id})">Agregar</a>
            </div>
            </div>
            </div>`;
  });
  document.getElementById("fiat").innerHTML = fiat;
}

MostrarProductosFiat();

function MostrarProductosFord() {
  const juntas_ford = CargarFordLS();
  let ford = "";

  juntas_ford.forEach((elemento) => {
    ford += `<div class="col-6 col-sm-4">
                <div class="card text-center" style="width: 18rem;">
                <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                <div class="card-body">
                  <h5 class="card-title">${elemento.nombre}</h5>
                  <p class="card-text">$${elemento.precio}</p>
                  <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoFord(${elemento.id})">Agregar</a>
                </div>
                </div>
                </div>`;
  });
  document.getElementById("ford").innerHTML = ford;
}

MostrarProductosFord();

function MostrarProductosHonda() {
  const juntas_honda = CargarHondaLS();
  let honda = "";

  juntas_honda.forEach((elemento) => {
    honda += `<div class="col-6 col-sm-4">
                <div class="card text-center" style="width: 18rem;">
                <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                <div class="card-body">
                  <h5 class="card-title">${elemento.nombre}</h5>
                  <p class="card-text">$${elemento.precio}</p>
                  <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoHonda(${elemento.id})">Agregar</a>
                </div>
                </div>
                </div>`;
  });
  document.getElementById("honda").innerHTML = honda;
}

MostrarProductosHonda();

function MostrarProductosNissan() {
  const juntas_nissan = CargarNissanLS();
  let nissan = "";

  juntas_nissan.forEach((elemento) => {
    nissan += `<div class="col-6 col-sm-4">
                    <div class="card text-center" style="width: 18rem;">
                    <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                    <div class="card-body">
                      <h5 class="card-title">${elemento.nombre}</h5>
                      <p class="card-text">$${elemento.precio}</p>
                      <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoNissan(${elemento.id})">Agregar</a>
                    </div>
                    </div>
                    </div>`;
  });
  document.getElementById("nissan").innerHTML = nissan;
}

MostrarProductosNissan();

function MostrarProductosPeugeot() {
  const juntas_peugeot = CargarPeugeotLS();
  let peugeot = "";

  juntas_peugeot.forEach((elemento) => {
    peugeot += `<div class="col-6 col-sm-4">
                    <div class="card text-center" style="width: 18rem;">
                    <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                    <div class="card-body">
                      <h5 class="card-title">${elemento.nombre}</h5>
                      <p class="card-text">$${elemento.precio}</p>
                      <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoPeugeot(${elemento.id})">Agregar</a>
                    </div>
                    </div>
                    </div>`;
  });
  document.getElementById("peugeot").innerHTML = peugeot;
}

MostrarProductosPeugeot();

function MostrarProductosRenault() {
  const juntas_renault = CargarRenaultLS();
  let renault = "";

  juntas_renault.forEach((elemento) => {
    renault += `<div class="col-6 col-sm-4">
                        <div class="card text-center" style="width: 18rem;">
                        <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                        <div class="card-body">
                          <h5 class="card-title">${elemento.nombre}</h5>
                          <p class="card-text">$${elemento.precio}</p>
                          <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoRenault(${elemento.id})">Agregar</a>
                        </div>
                        </div>
                        </div>`;
  });
  document.getElementById("renault").innerHTML = renault;
}

MostrarProductosRenault();

function MostrarProductosToyota() {
  const juntas_toyota = CargarToyotaLS();
  let toyota = "";

  juntas_toyota.forEach((elemento) => {
    toyota += `<div class="col-6 col-sm-4">
                            <div class="card text-center" style="width: 18rem;">
                            <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                            <div class="card-body">
                              <h5 class="card-title">${elemento.nombre}</h5>
                              <p class="card-text">$${elemento.precio}</p>
                              <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoToyota(${elemento.id})">Agregar</a>
                            </div>
                            </div>
                            </div>`;
  });
  document.getElementById("toyota").innerHTML = toyota;
}

MostrarProductosToyota();

function MostrarProductosVolkswagen() {
  const juntas_volkswagen = CargarVolkswagenLS();
  let volkswagen = "";

  juntas_volkswagen.forEach((elemento) => {
    volkswagen += `<div class="col-6 col-sm-4">
                                <div class="card text-center" style="width: 18rem;">
                                <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                                <div class="card-body">
                                  <h5 class="card-title">${elemento.nombre}</h5>
                                  <p class="card-text">$${elemento.precio}</p>
                                  <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoVolkswagen(${elemento.id})">Agregar</a>
                                </div>
                                </div>
                                </div>`;
  });
  document.getElementById("volkswagen").innerHTML = volkswagen;
}
MostrarProductosVolkswagen();







