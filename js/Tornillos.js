//Mostrar producto en html


function MostrarProductosTornillosChevrolet() {
    const juntas_chevrolet = CargarTornillosChevroletLS();
    let chevrolet = "";
  
    juntas_chevrolet.forEach((elemento) => {
      chevrolet += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoTornillosChevrolet(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Tornillos_chevrolet").innerHTML = chevrolet;
  }
  
  MostrarProductosTornillosChevrolet();
  
  function MostrarProductosTornillosCitroen() {
    const juntas_citroen = CargarTornillosCitroenLS();
    let citroen = "";
  
    juntas_citroen.forEach((elemento) => {
      citroen += `<div class="col-6 col-sm-4">
          <div class="card text-center" style="width: 18rem;">
          <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
          <div class="card-body">
            <h5 class="card-title">${elemento.nombre}</h5>
            <p class="card-text">$${elemento.precio}</p>
            <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoTornillosCitroen(${elemento.id})">Agregar</a>
          </div>
          </div>
          </div>`;
    });
    document.getElementById("Tornillos_citroen").innerHTML = citroen;
  }
  
  MostrarProductosTornillosCitroen();
  
  function MostrarProductosTornillosFiat() {
    const juntas_fiat = CargarTornillosFiatLS();
    let fiat = "";
  
    juntas_fiat.forEach((elemento) => {
      fiat += `<div class="col-6 col-sm-4">
              <div class="card text-center" style="width: 18rem;">
              <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
              <div class="card-body">
                <h5 class="card-title">${elemento.nombre}</h5>
                <p class="card-text">$${elemento.precio}</p>
                <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoTornillosFiat(${elemento.id})">Agregar</a>
              </div>
              </div>
              </div>`;
    });
    document.getElementById("Tornillos_fiat").innerHTML = fiat;
  }
  
  MostrarProductosTornillosFiat();
  
  function MostrarProductosTornillosFord() {
    const juntas_ford = CargarTornillosFordLS();
    let ford = "";
  
    juntas_ford.forEach((elemento) => {
      ford += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoTornillosFord(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Tornillos_ford").innerHTML = ford;
  }
  
  MostrarProductosTornillosFord();
  
  function MostrarProductosTornillosHonda() {
    const juntas_honda = CargarTornillosHondaLS();
    let honda = "";
  
    juntas_honda.forEach((elemento) => {
      honda += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoTornillosHonda(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Tornillos_honda").innerHTML = honda;
  }
  
  MostrarProductosTornillosHonda();
  
  function MostrarProductosTornillosNissan() {
    const juntas_nissan = CargarTornillosNissanLS();
    let nissan = "";
  
    juntas_nissan.forEach((elemento) => {
      nissan += `<div class="col-6 col-sm-4">
                      <div class="card text-center" style="width: 18rem;">
                      <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                      <div class="card-body">
                        <h5 class="card-title">${elemento.nombre}</h5>
                        <p class="card-text">$${elemento.precio}</p>
                        <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoTornillosNissan(${elemento.id})">Agregar</a>
                      </div>
                      </div>
                      </div>`;
    });
    document.getElementById("Tornillos_nissan").innerHTML = nissan;
  }
  
  MostrarProductosTornillosNissan();
  
  function MostrarProductosTornillosPeugeot() {
    const juntas_peugeot = CargarTornillosPeugeotLS();
    let peugeot = "";
  
    juntas_peugeot.forEach((elemento) => {
      peugeot += `<div class="col-6 col-sm-4">
                      <div class="card text-center" style="width: 18rem;">
                      <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                      <div class="card-body">
                        <h5 class="card-title">${elemento.nombre}</h5>
                        <p class="card-text">$${elemento.precio}</p>
                        <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoTornillosPeugeot(${elemento.id})">Agregar</a>
                      </div>
                      </div>
                      </div>`;
    });
    document.getElementById("Tornillos_peugeot").innerHTML = peugeot;
  }
  
  MostrarProductosTornillosPeugeot();
  
  function MostrarProductosTornillosRenault() {
    const juntas_renault = CargarTornillosRenaultLS();
    let renault = "";
  
    juntas_renault.forEach((elemento) => {
      renault += `<div class="col-6 col-sm-4">
                          <div class="card text-center" style="width: 18rem;">
                          <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                          <div class="card-body">
                            <h5 class="card-title">${elemento.nombre}</h5>
                            <p class="card-text">$${elemento.precio}</p>
                            <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoTornillosRenault(${elemento.id})">Agregar</a>
                          </div>
                          </div>
                          </div>`;
    });
    document.getElementById("Tornillos_renault").innerHTML = renault;
  }
  
  MostrarProductosTornillosRenault();
  
  function MostrarProductosTornillosToyota() {
    const juntas_toyota = CargarTornillosToyotaLS();
    let toyota = "";
  
    juntas_toyota.forEach((elemento) => {
      toyota += `<div class="col-6 col-sm-4">
                              <div class="card text-center" style="width: 18rem;">
                              <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                              <div class="card-body">
                                <h5 class="card-title">${elemento.nombre}</h5>
                                <p class="card-text">$${elemento.precio}</p>
                                <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoTornillosToyota(${elemento.id})">Agregar</a>
                              </div>
                              </div>
                              </div>`;
    });
    document.getElementById("Tornillos_toyota").innerHTML = toyota;
  }
  
  MostrarProductosTornillosToyota();
  
  function MostrarProductosTornillosVolkswagen() {
    const juntas_volkswagen = CargarTornillosVolkswagenLS();
    let volkswagen = "";
  
    juntas_volkswagen.forEach((elemento) => {
      volkswagen += `<div class="col-6 col-sm-4">
                                  <div class="card text-center" style="width: 18rem;">
                                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                                  <div class="card-body">
                                    <h5 class="card-title">${elemento.nombre}</h5>
                                    <p class="card-text">$${elemento.precio}</p>
                                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoTornillosVolkswagen(${elemento.id})">Agregar</a>
                                  </div>
                                  </div>
                                  </div>`;
    });
    document.getElementById("Tornillos_volkswagen").innerHTML = volkswagen;
  }
  MostrarProductosTornillosVolkswagen();
  
  
  
  
  
  
  
  