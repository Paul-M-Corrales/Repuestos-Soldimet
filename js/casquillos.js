//Mostrar producto en html


function MostrarProductosCasquillosChevrolet() {
    const Casquillos_chevrolet = CargarCasquillosChevroletLS();
    let chevrolet = "";
  
    Casquillos_chevrolet.forEach((elemento) => {
      chevrolet += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCasquillosChevrolet(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Casquillos_chevrolet").innerHTML = chevrolet;
  }
  
  MostrarProductosCasquillosChevrolet();
  
  function MostrarProductosCasquillosCitroen() {
    const Casquillos_citroen = CargarCasquillosCitroenLS();
    let citroen = "";
  
    Casquillos_citroen.forEach((elemento) => {
      citroen += `<div class="col-6 col-sm-4">
          <div class="card text-center" style="width: 18rem;">
          <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
          <div class="card-body">
            <h5 class="card-title">${elemento.nombre}</h5>
            <p class="card-text">$${elemento.precio}</p>
            <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCasquillosCitroen(${elemento.id})">Agregar</a>
          </div>
          </div>
          </div>`;
    });
    document.getElementById("Casquillos_citroen").innerHTML = citroen;
  }
  
  MostrarProductosCasquillosCitroen();
  
  function MostrarProductosCasquillosFiat() {
    const Casquillos_fiat = CargarCasquillosFiatLS();
    let fiat = "";
  
    Casquillos_fiat.forEach((elemento) => {
      fiat += `<div class="col-6 col-sm-4">
              <div class="card text-center" style="width: 18rem;">
              <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
              <div class="card-body">
                <h5 class="card-title">${elemento.nombre}</h5>
                <p class="card-text">$${elemento.precio}</p>
                <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCasquillosFiat(${elemento.id})">Agregar</a>
              </div>
              </div>
              </div>`;
    });
    document.getElementById("Casquillos_fiat").innerHTML = fiat;
  }
  
  MostrarProductosCasquillosFiat();
  
  function MostrarProductosCasquillosFord() {
    const Casquillos_ford = CargarCasquillosFordLS();
    let ford = "";
  
    Casquillos_ford.forEach((elemento) => {
      ford += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCasquillosFord(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Casquillos_ford").innerHTML = ford;
  }
  
  MostrarProductosCasquillosFord();
  
  function MostrarProductosCasquillosHonda() {
    const Casquillos_honda = CargarCasquillosHondaLS();
    let honda = "";
  
    Casquillos_honda.forEach((elemento) => {
      honda += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCasquillosHonda(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Casquillos_honda").innerHTML = honda;
  }
  
  MostrarProductosCasquillosHonda();
  
  function MostrarProductosCasquillosNissan() {
    const Casquillos_nissan = CargarCasquillosNissanLS();
    let nissan = "";
  
    Casquillos_nissan.forEach((elemento) => {
      nissan += `<div class="col-6 col-sm-4">
                      <div class="card text-center" style="width: 18rem;">
                      <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                      <div class="card-body">
                        <h5 class="card-title">${elemento.nombre}</h5>
                        <p class="card-text">$${elemento.precio}</p>
                        <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCasquillosNissan(${elemento.id})">Agregar</a>
                      </div>
                      </div>
                      </div>`;
    });
    document.getElementById("Casquillos_nissan").innerHTML = nissan;
  }
  
  MostrarProductosCasquillosNissan();
  
  function MostrarProductosCasquillosPeugeot() {
    const Casquillos_peugeot = CargarCasquillosPeugeotLS();
    let peugeot = "";
  
    Casquillos_peugeot.forEach((elemento) => {
      peugeot += `<div class="col-6 col-sm-4">
                      <div class="card text-center" style="width: 18rem;">
                      <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                      <div class="card-body">
                        <h5 class="card-title">${elemento.nombre}</h5>
                        <p class="card-text">$${elemento.precio}</p>
                        <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCasquillosPeugeot(${elemento.id})">Agregar</a>
                      </div>
                      </div>
                      </div>`;
    });
    document.getElementById("Casquillos_peugeot").innerHTML = peugeot;
  }
  
  MostrarProductosCasquillosPeugeot();
  
  function MostrarProductosCasquillosRenault() {
    const Casquillos_renault = CargarCasquillosRenaultLS();
    let renault = "";
  
    Casquillos_renault.forEach((elemento) => {
      renault += `<div class="col-6 col-sm-4">
                          <div class="card text-center" style="width: 18rem;">
                          <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                          <div class="card-body">
                            <h5 class="card-title">${elemento.nombre}</h5>
                            <p class="card-text">$${elemento.precio}</p>
                            <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCasquillosRenault(${elemento.id})">Agregar</a>
                          </div>
                          </div>
                          </div>`;
    });
    document.getElementById("Casquillos_renault").innerHTML = renault;
  }
  
  MostrarProductosCasquillosRenault();
  
  function MostrarProductosCasquillosToyota() {
    const Casquillos_toyota = CargarCasquillosToyotaLS();
    let toyota = "";
  
    Casquillos_toyota.forEach((elemento) => {
      toyota += `<div class="col-6 col-sm-4">
                              <div class="card text-center" style="width: 18rem;">
                              <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                              <div class="card-body">
                                <h5 class="card-title">${elemento.nombre}</h5>
                                <p class="card-text">$${elemento.precio}</p>
                                <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCasquillosToyota(${elemento.id})">Agregar</a>
                              </div>
                              </div>
                              </div>`;
    });
    document.getElementById("Casquillos_toyota").innerHTML = toyota;
  }
  
  MostrarProductosCasquillosToyota();
  
  function MostrarProductosCasquillosVolkswagen() {
    const Casquillos_volkswagen = CargarCasquillosVolkswagenLS();
    let volkswagen = "";
  
    Casquillos_volkswagen.forEach((elemento) => {
      volkswagen += `<div class="col-6 col-sm-4">
                                  <div class="card text-center" style="width: 18rem;">
                                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                                  <div class="card-body">
                                    <h5 class="card-title">${elemento.nombre}</h5>
                                    <p class="card-text">$${elemento.precio}</p>
                                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCasquillosVolkswagen(${elemento.id})">Agregar</a>
                                  </div>
                                  </div>
                                  </div>`;
    });
    document.getElementById("Casquillos_volkswagen").innerHTML = volkswagen;
  }
  MostrarProductosCasquillosVolkswagen();
  
  
  
  
  
  
  
  