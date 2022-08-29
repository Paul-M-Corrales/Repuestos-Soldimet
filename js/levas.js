//Mostrar producto en html


function MostrarProductosLevasChevrolet() {
    const Levas_chevrolet = CargarLevasChevroletLS();
    let chevrolet = "";
  
    Levas_chevrolet.forEach((elemento) => {
      chevrolet += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoLevasChevrolet(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Levas_chevrolet").innerHTML = chevrolet;
  }
  
  MostrarProductosLevasChevrolet();
  
  function MostrarProductosLevasCitroen() {
    const Levas_citroen = CargarLevasCitroenLS();
    let citroen = "";
  
    Levas_citroen.forEach((elemento) => {
      citroen += `<div class="col-6 col-sm-4">
          <div class="card text-center" style="width: 18rem;">
          <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
          <div class="card-body">
            <h5 class="card-title">${elemento.nombre}</h5>
            <p class="card-text">$${elemento.precio}</p>
            <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoLevasCitroen(${elemento.id})">Agregar</a>
          </div>
          </div>
          </div>`;
    });
    document.getElementById("Levas_citroen").innerHTML = citroen;
  }
  
  MostrarProductosLevasCitroen();
  
  function MostrarProductosLevasFiat() {
    const Levas_fiat = CargarLevasFiatLS();
    let fiat = "";
  
    Levas_fiat.forEach((elemento) => {
      fiat += `<div class="col-6 col-sm-4">
              <div class="card text-center" style="width: 18rem;">
              <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
              <div class="card-body">
                <h5 class="card-title">${elemento.nombre}</h5>
                <p class="card-text">$${elemento.precio}</p>
                <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoLevasFiat(${elemento.id})">Agregar</a>
              </div>
              </div>
              </div>`;
    });
    document.getElementById("Levas_fiat").innerHTML = fiat;
  }
  
  MostrarProductosLevasFiat();
  
  function MostrarProductosLevasFord() {
    const Levas_ford = CargarLevasFordLS();
    let ford = "";
  
    Levas_ford.forEach((elemento) => {
      ford += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoLevasFord(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Levas_ford").innerHTML = ford;
  }
  
  MostrarProductosLevasFord();
  
  function MostrarProductosLevasHonda() {
    const Levas_honda = CargarLevasHondaLS();
    let honda = "";
  
    Levas_honda.forEach((elemento) => {
      honda += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoLevasHonda(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Levas_honda").innerHTML = honda;
  }
  
  MostrarProductosLevasHonda();
  
  function MostrarProductosLevasNissan() {
    const Levas_nissan = CargarLevasNissanLS();
    let nissan = "";
  
    Levas_nissan.forEach((elemento) => {
      nissan += `<div class="col-6 col-sm-4">
                      <div class="card text-center" style="width: 18rem;">
                      <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                      <div class="card-body">
                        <h5 class="card-title">${elemento.nombre}</h5>
                        <p class="card-text">$${elemento.precio}</p>
                        <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoLevasNissan(${elemento.id})">Agregar</a>
                      </div>
                      </div>
                      </div>`;
    });
    document.getElementById("Levas_nissan").innerHTML = nissan;
  }
  
  MostrarProductosLevasNissan();
  
  function MostrarProductosLevasPeugeot() {
    const Levas_peugeot = CargarLevasPeugeotLS();
    let peugeot = "";
  
    Levas_peugeot.forEach((elemento) => {
      peugeot += `<div class="col-6 col-sm-4">
                      <div class="card text-center" style="width: 18rem;">
                      <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                      <div class="card-body">
                        <h5 class="card-title">${elemento.nombre}</h5>
                        <p class="card-text">$${elemento.precio}</p>
                        <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoLevasPeugeot(${elemento.id})">Agregar</a>
                      </div>
                      </div>
                      </div>`;
    });
    document.getElementById("Levas_peugeot").innerHTML = peugeot;
  }
  
  MostrarProductosLevasPeugeot();
  
  function MostrarProductosLevasRenault() {
    const Levas_renault = CargarLevasRenaultLS();
    let renault = "";
  
    Levas_renault.forEach((elemento) => {
      renault += `<div class="col-6 col-sm-4">
                          <div class="card text-center" style="width: 18rem;">
                          <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                          <div class="card-body">
                            <h5 class="card-title">${elemento.nombre}</h5>
                            <p class="card-text">$${elemento.precio}</p>
                            <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoLevasRenault(${elemento.id})">Agregar</a>
                          </div>
                          </div>
                          </div>`;
    });
    document.getElementById("Levas_renault").innerHTML = renault;
  }
  
  MostrarProductosLevasRenault();
  
  function MostrarProductosLevasToyota() {
    const Levas_toyota = CargarLevasToyotaLS();
    let toyota = "";
  
    Levas_toyota.forEach((elemento) => {
      toyota += `<div class="col-6 col-sm-4">
                              <div class="card text-center" style="width: 18rem;">
                              <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                              <div class="card-body">
                                <h5 class="card-title">${elemento.nombre}</h5>
                                <p class="card-text">$${elemento.precio}</p>
                                <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoLevasToyota(${elemento.id})">Agregar</a>
                              </div>
                              </div>
                              </div>`;
    });
    document.getElementById("Levas_toyota").innerHTML = toyota;
  }
  
  MostrarProductosLevasToyota();
  
  function MostrarProductosLevasVolkswagen() {
    const Levas_volkswagen = CargarLevasVolkswagenLS();
    let volkswagen = "";
  
    Levas_volkswagen.forEach((elemento) => {
      volkswagen += `<div class="col-6 col-sm-4">
                                  <div class="card text-center" style="width: 18rem;">
                                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                                  <div class="card-body">
                                    <h5 class="card-title">${elemento.nombre}</h5>
                                    <p class="card-text">$${elemento.precio}</p>
                                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoLevasVolkswagen(${elemento.id})">Agregar</a>
                                  </div>
                                  </div>
                                  </div>`;
    });
    document.getElementById("Levas_volkswagen").innerHTML = volkswagen;
  }
  MostrarProductosLevasVolkswagen();
  
  
  
  
  
  
  
  