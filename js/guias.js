//Mostrar producto en html


function MostrarProductosGuiasChevrolet() {
    const Guias_chevrolet = CargarGuiasChevroletLS();
    let chevrolet = "";
  
    Guias_chevrolet.forEach((elemento) => {
      chevrolet += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoGuiasChevrolet(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Guias_chevrolet").innerHTML = chevrolet;
  }
  
  MostrarProductosGuiasChevrolet();
  
  function MostrarProductosGuiasCitroen() {
    const Guias_citroen = CargarGuiasCitroenLS();
    let citroen = "";
  
    Guias_citroen.forEach((elemento) => {
      citroen += `<div class="col-6 col-sm-4">
          <div class="card text-center" style="width: 18rem;">
          <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
          <div class="card-body">
            <h5 class="card-title">${elemento.nombre}</h5>
            <p class="card-text">$${elemento.precio}</p>
            <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoGuiasCitroen(${elemento.id})">Agregar</a>
          </div>
          </div>
          </div>`;
    });
    document.getElementById("Guias_citroen").innerHTML = citroen;
  }
  
  MostrarProductosGuiasCitroen();
  
  function MostrarProductosGuiasFiat() {
    const Guias_fiat = CargarGuiasFiatLS();
    let fiat = "";
  
    Guias_fiat.forEach((elemento) => {
      fiat += `<div class="col-6 col-sm-4">
              <div class="card text-center" style="width: 18rem;">
              <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
              <div class="card-body">
                <h5 class="card-title">${elemento.nombre}</h5>
                <p class="card-text">$${elemento.precio}</p>
                <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoGuiasFiat(${elemento.id})">Agregar</a>
              </div>
              </div>
              </div>`;
    });
    document.getElementById("Guias_fiat").innerHTML = fiat;
  }
  
  MostrarProductosGuiasFiat();
  
  function MostrarProductosGuiasFord() {
    const Guias_ford = CargarGuiasFordLS();
    let ford = "";
  
    Guias_ford.forEach((elemento) => {
      ford += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoGuiasFord(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Guias_ford").innerHTML = ford;
  }
  
  MostrarProductosGuiasFord();
  
  function MostrarProductosGuiasHonda() {
    const Guias_honda = CargarGuiasHondaLS();
    let honda = "";
  
    Guias_honda.forEach((elemento) => {
      honda += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoGuiasHonda(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Guias_honda").innerHTML = honda;
  }
  
  MostrarProductosGuiasHonda();
  
  function MostrarProductosGuiasNissan() {
    const Guias_nissan = CargarGuiasNissanLS();
    let nissan = "";
  
    Guias_nissan.forEach((elemento) => {
      nissan += `<div class="col-6 col-sm-4">
                      <div class="card text-center" style="width: 18rem;">
                      <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                      <div class="card-body">
                        <h5 class="card-title">${elemento.nombre}</h5>
                        <p class="card-text">$${elemento.precio}</p>
                        <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoGuiasNissan(${elemento.id})">Agregar</a>
                      </div>
                      </div>
                      </div>`;
    });
    document.getElementById("Guias_nissan").innerHTML = nissan;
  }
  
  MostrarProductosGuiasNissan();
  
  function MostrarProductosGuiasPeugeot() {
    const Guias_peugeot = CargarGuiasPeugeotLS();
    let peugeot = "";
  
    Guias_peugeot.forEach((elemento) => {
      peugeot += `<div class="col-6 col-sm-4">
                      <div class="card text-center" style="width: 18rem;">
                      <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                      <div class="card-body">
                        <h5 class="card-title">${elemento.nombre}</h5>
                        <p class="card-text">$${elemento.precio}</p>
                        <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoGuiasPeugeot(${elemento.id})">Agregar</a>
                      </div>
                      </div>
                      </div>`;
    });
    document.getElementById("Guias_peugeot").innerHTML = peugeot;
  }
  
  MostrarProductosGuiasPeugeot();
  
  function MostrarProductosGuiasRenault() {
    const Guias_renault = CargarGuiasRenaultLS();
    let renault = "";
  
    Guias_renault.forEach((elemento) => {
      renault += `<div class="col-6 col-sm-4">
                          <div class="card text-center" style="width: 18rem;">
                          <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                          <div class="card-body">
                            <h5 class="card-title">${elemento.nombre}</h5>
                            <p class="card-text">$${elemento.precio}</p>
                            <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoGuiasRenault(${elemento.id})">Agregar</a>
                          </div>
                          </div>
                          </div>`;
    });
    document.getElementById("Guias_renault").innerHTML = renault;
  }
  
  MostrarProductosGuiasRenault();
  
  function MostrarProductosGuiasToyota() {
    const Guias_toyota = CargarGuiasToyotaLS();
    let toyota = "";
  
    Guias_toyota.forEach((elemento) => {
      toyota += `<div class="col-6 col-sm-4">
                              <div class="card text-center" style="width: 18rem;">
                              <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                              <div class="card-body">
                                <h5 class="card-title">${elemento.nombre}</h5>
                                <p class="card-text">$${elemento.precio}</p>
                                <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoGuiasToyota(${elemento.id})">Agregar</a>
                              </div>
                              </div>
                              </div>`;
    });
    document.getElementById("Guias_toyota").innerHTML = toyota;
  }
  
  MostrarProductosGuiasToyota();
  
  function MostrarProductosGuiasVolkswagen() {
    const Guias_volkswagen = CargarGuiasVolkswagenLS();
    let volkswagen = "";
  
    Guias_volkswagen.forEach((elemento) => {
      volkswagen += `<div class="col-6 col-sm-4">
                                  <div class="card text-center" style="width: 18rem;">
                                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                                  <div class="card-body">
                                    <h5 class="card-title">${elemento.nombre}</h5>
                                    <p class="card-text">$${elemento.precio}</p>
                                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoGuiasVolkswagen(${elemento.id})">Agregar</a>
                                  </div>
                                  </div>
                                  </div>`;
    });
    document.getElementById("Guias_volkswagen").innerHTML = volkswagen;
  }
  MostrarProductosGuiasVolkswagen();
  
  
  
  
  
  
  
  