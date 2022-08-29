//Mostrar producto en html


function MostrarProductosValvulasChevrolet() {
    const Valvulas_chevrolet = CargarValvulasChevroletLS();
    let chevrolet = "";
  
    Valvulas_chevrolet.forEach((elemento) => {
      chevrolet += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoValvulasChevrolet(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Valvulas_chevrolet").innerHTML = chevrolet;
  }
  
  MostrarProductosValvulasChevrolet();
  
  function MostrarProductosValvulasCitroen() {
    const Valvulas_citroen = CargarValvulasCitroenLS();
    let citroen = "";
  
    Valvulas_citroen.forEach((elemento) => {
      citroen += `<div class="col-6 col-sm-4">
          <div class="card text-center" style="width: 18rem;">
          <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
          <div class="card-body">
            <h5 class="card-title">${elemento.nombre}</h5>
            <p class="card-text">$${elemento.precio}</p>
            <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoValvulasCitroen(${elemento.id})">Agregar</a>
          </div>
          </div>
          </div>`;
    });
    document.getElementById("Valvulas_citroen").innerHTML = citroen;
  }
  
  MostrarProductosValvulasCitroen();
  
  function MostrarProductosValvulasFiat() {
    const Valvulas_fiat = CargarValvulasFiatLS();
    let fiat = "";
  
    Valvulas_fiat.forEach((elemento) => {
      fiat += `<div class="col-6 col-sm-4">
              <div class="card text-center" style="width: 18rem;">
              <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
              <div class="card-body">
                <h5 class="card-title">${elemento.nombre}</h5>
                <p class="card-text">$${elemento.precio}</p>
                <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoValvulasFiat(${elemento.id})">Agregar</a>
              </div>
              </div>
              </div>`;
    });
    document.getElementById("Valvulas_fiat").innerHTML = fiat;
  }
  
  MostrarProductosValvulasFiat();
  
  function MostrarProductosValvulasFord() {
    const Valvulas_ford = CargarValvulasFordLS();
    let ford = "";
  
    Valvulas_ford.forEach((elemento) => {
      ford += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoValvulasFord(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Valvulas_ford").innerHTML = ford;
  }
  
  MostrarProductosValvulasFord();
  
  function MostrarProductosValvulasHonda() {
    const Valvulas_honda = CargarValvulasHondaLS();
    let honda = "";
  
    Valvulas_honda.forEach((elemento) => {
      honda += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoValvulasHonda(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Valvulas_honda").innerHTML = honda;
  }
  
  MostrarProductosValvulasHonda();
  
  function MostrarProductosValvulasNissan() {
    const Valvulas_nissan = CargarValvulasNissanLS();
    let nissan = "";
  
    Valvulas_nissan.forEach((elemento) => {
      nissan += `<div class="col-6 col-sm-4">
                      <div class="card text-center" style="width: 18rem;">
                      <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                      <div class="card-body">
                        <h5 class="card-title">${elemento.nombre}</h5>
                        <p class="card-text">$${elemento.precio}</p>
                        <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoValvulasNissan(${elemento.id})">Agregar</a>
                      </div>
                      </div>
                      </div>`;
    });
    document.getElementById("Valvulas_nissan").innerHTML = nissan;
  }
  
  MostrarProductosValvulasNissan();
  
  function MostrarProductosValvulasPeugeot() {
    const Valvulas_peugeot = CargarValvulasPeugeotLS();
    let peugeot = "";
  
    Valvulas_peugeot.forEach((elemento) => {
      peugeot += `<div class="col-6 col-sm-4">
                      <div class="card text-center" style="width: 18rem;">
                      <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                      <div class="card-body">
                        <h5 class="card-title">${elemento.nombre}</h5>
                        <p class="card-text">$${elemento.precio}</p>
                        <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoValvulasPeugeot(${elemento.id})">Agregar</a>
                      </div>
                      </div>
                      </div>`;
    });
    document.getElementById("Valvulas_peugeot").innerHTML = peugeot;
  }
  
  MostrarProductosValvulasPeugeot();
  
  function MostrarProductosValvulasRenault() {
    const Valvulas_renault = CargarValvulasRenaultLS();
    let renault = "";
  
    Valvulas_renault.forEach((elemento) => {
      renault += `<div class="col-6 col-sm-4">
                          <div class="card text-center" style="width: 18rem;">
                          <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                          <div class="card-body">
                            <h5 class="card-title">${elemento.nombre}</h5>
                            <p class="card-text">$${elemento.precio}</p>
                            <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoValvulasRenault(${elemento.id})">Agregar</a>
                          </div>
                          </div>
                          </div>`;
    });
    document.getElementById("Valvulas_renault").innerHTML = renault;
  }
  
  MostrarProductosValvulasRenault();
  
  function MostrarProductosValvulasToyota() {
    const Valvulas_toyota = CargarValvulasToyotaLS();
    let toyota = "";
  
    Valvulas_toyota.forEach((elemento) => {
      toyota += `<div class="col-6 col-sm-4">
                              <div class="card text-center" style="width: 18rem;">
                              <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                              <div class="card-body">
                                <h5 class="card-title">${elemento.nombre}</h5>
                                <p class="card-text">$${elemento.precio}</p>
                                <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoValvulasToyota(${elemento.id})">Agregar</a>
                              </div>
                              </div>
                              </div>`;
    });
    document.getElementById("Valvulas_toyota").innerHTML = toyota;
  }
  
  MostrarProductosValvulasToyota();
  
  function MostrarProductosValvulasVolkswagen() {
    const Valvulas_volkswagen = CargarValvulasVolkswagenLS();
    let volkswagen = "";
  
    Valvulas_volkswagen.forEach((elemento) => {
      volkswagen += `<div class="col-6 col-sm-4">
                                  <div class="card text-center" style="width: 18rem;">
                                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                                  <div class="card-body">
                                    <h5 class="card-title">${elemento.nombre}</h5>
                                    <p class="card-text">$${elemento.precio}</p>
                                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoValvulasVolkswagen(${elemento.id})">Agregar</a>
                                  </div>
                                  </div>
                                  </div>`;
    });
    document.getElementById("Valvulas_volkswagen").innerHTML = volkswagen;
  }
  MostrarProductosValvulasVolkswagen();
  
  
  
  
  
  
  
  