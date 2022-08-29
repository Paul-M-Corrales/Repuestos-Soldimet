//Mostrar producto en html


function MostrarProductosRetenesChevrolet() {
    const Retenes_chevrolet = CargarRetenesChevroletLS();
    let chevrolet = "";
  
    Retenes_chevrolet.forEach((elemento) => {
      chevrolet += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoRetenesChevrolet(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Retenes_chevrolet").innerHTML = chevrolet;
  }
  
  MostrarProductosRetenesChevrolet();
  
  function MostrarProductosRetenesCitroen() {
    const Retenes_citroen = CargarRetenesCitroenLS();
    let citroen = "";
  
    Retenes_citroen.forEach((elemento) => {
      citroen += `<div class="col-6 col-sm-4">
          <div class="card text-center" style="width: 18rem;">
          <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
          <div class="card-body">
            <h5 class="card-title">${elemento.nombre}</h5>
            <p class="card-text">$${elemento.precio}</p>
            <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoRetenesCitroen(${elemento.id})">Agregar</a>
          </div>
          </div>
          </div>`;
    });
    document.getElementById("Retenes_citroen").innerHTML = citroen;
  }
  
  MostrarProductosRetenesCitroen();
  
  function MostrarProductosRetenesFiat() {
    const Retenes_fiat = CargarRetenesFiatLS();
    let fiat = "";
  
    Retenes_fiat.forEach((elemento) => {
      fiat += `<div class="col-6 col-sm-4">
              <div class="card text-center" style="width: 18rem;">
              <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
              <div class="card-body">
                <h5 class="card-title">${elemento.nombre}</h5>
                <p class="card-text">$${elemento.precio}</p>
                <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoRetenesFiat(${elemento.id})">Agregar</a>
              </div>
              </div>
              </div>`;
    });
    document.getElementById("Retenes_fiat").innerHTML = fiat;
  }
  
  MostrarProductosRetenesFiat();
  
  function MostrarProductosRetenesFord() {
    const Retenes_ford = CargarRetenesFordLS();
    let ford = "";
  
    Retenes_ford.forEach((elemento) => {
      ford += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoRetenesFord(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Retenes_ford").innerHTML = ford;
  }
  
  MostrarProductosRetenesFord();
  
  function MostrarProductosRetenesHonda() {
    const Retenes_honda = CargarRetenesHondaLS();
    let honda = "";
  
    Retenes_honda.forEach((elemento) => {
      honda += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoRetenesHonda(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Retenes_honda").innerHTML = honda;
  }
  
  MostrarProductosRetenesHonda();
  
  function MostrarProductosRetenesNissan() {
    const Retenes_nissan = CargarRetenesNissanLS();
    let nissan = "";
  
    Retenes_nissan.forEach((elemento) => {
      nissan += `<div class="col-6 col-sm-4">
                      <div class="card text-center" style="width: 18rem;">
                      <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                      <div class="card-body">
                        <h5 class="card-title">${elemento.nombre}</h5>
                        <p class="card-text">$${elemento.precio}</p>
                        <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoRetenesNissan(${elemento.id})">Agregar</a>
                      </div>
                      </div>
                      </div>`;
    });
    document.getElementById("Retenes_nissan").innerHTML = nissan;
  }
  
  MostrarProductosRetenesNissan();
  
  function MostrarProductosRetenesPeugeot() {
    const Retenes_peugeot = CargarRetenesPeugeotLS();
    let peugeot = "";
  
    Retenes_peugeot.forEach((elemento) => {
      peugeot += `<div class="col-6 col-sm-4">
                      <div class="card text-center" style="width: 18rem;">
                      <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                      <div class="card-body">
                        <h5 class="card-title">${elemento.nombre}</h5>
                        <p class="card-text">$${elemento.precio}</p>
                        <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoRetenesPeugeot(${elemento.id})">Agregar</a>
                      </div>
                      </div>
                      </div>`;
    });
    document.getElementById("Retenes_peugeot").innerHTML = peugeot;
  }
  
  MostrarProductosRetenesPeugeot();
  
  function MostrarProductosRetenesRenault() {
    const Retenes_renault = CargarRetenesRenaultLS();
    let renault = "";
  
    Retenes_renault.forEach((elemento) => {
      renault += `<div class="col-6 col-sm-4">
                          <div class="card text-center" style="width: 18rem;">
                          <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                          <div class="card-body">
                            <h5 class="card-title">${elemento.nombre}</h5>
                            <p class="card-text">$${elemento.precio}</p>
                            <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoRetenesRenault(${elemento.id})">Agregar</a>
                          </div>
                          </div>
                          </div>`;
    });
    document.getElementById("Retenes_renault").innerHTML = renault;
  }
  
  MostrarProductosRetenesRenault();
  
  function MostrarProductosRetenesToyota() {
    const Retenes_toyota = CargarRetenesToyotaLS();
    let toyota = "";
  
    Retenes_toyota.forEach((elemento) => {
      toyota += `<div class="col-6 col-sm-4">
                              <div class="card text-center" style="width: 18rem;">
                              <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                              <div class="card-body">
                                <h5 class="card-title">${elemento.nombre}</h5>
                                <p class="card-text">$${elemento.precio}</p>
                                <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoRetenesToyota(${elemento.id})">Agregar</a>
                              </div>
                              </div>
                              </div>`;
    });
    document.getElementById("Retenes_toyota").innerHTML = toyota;
  }
  
  MostrarProductosRetenesToyota();
  
  function MostrarProductosRetenesVolkswagen() {
    const Retenes_volkswagen = CargarRetenesVolkswagenLS();
    let volkswagen = "";
  
    Retenes_volkswagen.forEach((elemento) => {
      volkswagen += `<div class="col-6 col-sm-4">
                                  <div class="card text-center" style="width: 18rem;">
                                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                                  <div class="card-body">
                                    <h5 class="card-title">${elemento.nombre}</h5>
                                    <p class="card-text">$${elemento.precio}</p>
                                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoRetenesVolkswagen(${elemento.id})">Agregar</a>
                                  </div>
                                  </div>
                                  </div>`;
    });
    document.getElementById("Retenes_volkswagen").innerHTML = volkswagen;
  }
  MostrarProductosRetenesVolkswagen();
  
  
  
  
  
  
  
  