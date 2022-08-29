  //MOSTRAR PRODUCTOS
  function MostrarSubconjuntoChevrolet() {
    const subconjunto_chevrolet = CargarSubconjuntoChevroletLS();
    let Subconjunto_chevrolet = "";
  
    subconjunto_chevrolet.forEach((elemento) => {
      Subconjunto_chevrolet += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoSubconjuntoChevrolet(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Subconjunto_chevrolet").innerHTML = Subconjunto_chevrolet;
  }
  
  MostrarSubconjuntoChevrolet();
  
  function MostrarSubconjuntoCitroen() {
    const subconjunto_citroen = CargarSubconjuntoCitroenLS();
    let Subconjunto_citroen = "";
  
    subconjunto_citroen.forEach((elemento) => {
      Subconjunto_citroen += `<div class="col-6 col-sm-4">
          <div class="card text-center" style="width: 18rem;">
          <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
          <div class="card-body">
            <h5 class="card-title">${elemento.nombre}</h5>
            <p class="card-text">$${elemento.precio}</p>
            <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoSubconjuntoCitroen(${elemento.id})">Agregar</a>
          </div>
          </div>
          </div>`;
    });
    document.getElementById("Subconjunto_citroen").innerHTML = Subconjunto_citroen;
  }
  
  MostrarSubconjuntoCitroen();
  
  function MostrarSubconjuntoFiat() {
    const subconjunto_fiat = CargarSubconjuntoFiatLS();
    let Subconjunto_fiat = "";
  
    subconjunto_fiat.forEach((elemento) => {
      Subconjunto_fiat += `<div class="col-6 col-sm-4">
              <div class="card text-center" style="width: 18rem;">
              <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
              <div class="card-body">
                <h5 class="card-title">${elemento.nombre}</h5>
                <p class="card-text">$${elemento.precio}</p>
                <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoSubconjuntoFiat(${elemento.id})">Agregar</a>
              </div>
              </div>
              </div>`;
    });
    document.getElementById("Subconjunto_fiat").innerHTML = Subconjunto_fiat;
  }
  
  MostrarSubconjuntoFiat();
  
  function MostrarSubconjuntoFord() {
    const subconjunto_ford = CargarSubconjuntoFordLS();
    let Subconjunto_ford = "";
  
    subconjunto_ford.forEach((elemento) => {
      Subconjunto_ford += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoSubconjuntoFord(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Subconjunto_ford").innerHTML = Subconjunto_ford;
  }
  
  MostrarSubconjuntoFord();
  
  function MostrarSubconjuntoHonda() {
    const subconjunto_honda = CargarSubconjuntoHondaLS();
    let Subconjunto_honda = "";
  
    subconjunto_honda.forEach((elemento) => {
      Subconjunto_honda += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoSubconjuntoHonda(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Subconjunto_honda").innerHTML = Subconjunto_honda;
  }
  
  MostrarSubconjuntoHonda();
  
  function MostrarSubconjuntoNissan() {
    const subconjunto_nissan = CargarSubconjuntoNissanLS();
    let Subconjunto_nissan = "";
  
    subconjunto_nissan.forEach((elemento) => {
      Subconjunto_nissan += `<div class="col-6 col-sm-4">
                      <div class="card text-center" style="width: 18rem;">
                      <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                      <div class="card-body">
                        <h5 class="card-title">${elemento.nombre}</h5>
                        <p class="card-text">$${elemento.precio}</p>
                        <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoSubconjuntoNissan(${elemento.id})">Agregar</a>
                      </div>
                      </div>
                      </div>`;
    });
    document.getElementById("Subconjunto_nissan").innerHTML = Subconjunto_nissan;
  }
  
  MostrarSubconjuntoNissan();
  
  function MostrarSubconjuntoPeugeot() {
    const subconjunto_peugeot = CargarSubconjuntoPeugeotLS();
    let Subconjunto_peugeot = "";
  
    subconjunto_peugeot.forEach((elemento) => {
      Subconjunto_peugeot += `<div class="col-6 col-sm-4">
                      <div class="card text-center" style="width: 18rem;">
                      <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                      <div class="card-body">
                        <h5 class="card-title">${elemento.nombre}</h5>
                        <p class="card-text">$${elemento.precio}</p>
                        <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoSubconjuntoPeugeot(${elemento.id})">Agregar</a>
                      </div>
                      </div>
                      </div>`;
    });
    document.getElementById("Subconjunto_peugeot").innerHTML = Subconjunto_peugeot;
  }
  
  MostrarSubconjuntoPeugeot();
  
  function MostrarSubconjuntoRenault() {
    const subconjunto_renault = CargarSubconjuntoRenaultLS();
    let Subconjunto_renault = "";
  
    subconjunto_renault.forEach((elemento) => {
      Subconjunto_renault += `<div class="col-6 col-sm-4">
                          <div class="card text-center" style="width: 18rem;">
                          <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                          <div class="card-body">
                            <h5 class="card-title">${elemento.nombre}</h5>
                            <p class="card-text">$${elemento.precio}</p>
                            <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoSubconjuntoRenault(${elemento.id})">Agregar</a>
                          </div>
                          </div>
                          </div>`;
    });
    document.getElementById("Subconjunto_renault").innerHTML = Subconjunto_renault;
  }
  
  MostrarSubconjuntoRenault();
  
  function MostrarSubconjuntoToyota() {
    const subconjunto_toyota = CargarSubconjuntoToyotaLS();
    let Subconjunto_toyota = "";
  
    subconjunto_toyota.forEach((elemento) => {
      Subconjunto_toyota += `<div class="col-6 col-sm-4">
                              <div class="card text-center" style="width: 18rem;">
                              <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                              <div class="card-body">
                                <h5 class="card-title">${elemento.nombre}</h5>
                                <p class="card-text">$${elemento.precio}</p>
                                <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoSubconjuntoToyota(${elemento.id})">Agregar</a>
                              </div>
                              </div>
                              </div>`;
    });
    document.getElementById("Subconjunto_toyota").innerHTML = Subconjunto_toyota;
  }
  
  MostrarSubconjuntoToyota();
  
  function MostrarSubconjuntoVolkswagen() {
    const subconjunto_volkswagen = CargarSubconjuntoVolkswagenLS();
    let Subconjunto_volkswagen = "";
  
    subconjunto_volkswagen.forEach((elemento) => {
      Subconjunto_volkswagen += `<div class="col-6 col-sm-4">
                                  <div class="card text-center" style="width: 18rem;">
                                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                                  <div class="card-body">
                                    <h5 class="card-title">${elemento.nombre}</h5>
                                    <p class="card-text">$${elemento.precio}</p>
                                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoSubconjuntoVolkswagen(${elemento.id})">Agregar</a>
                                  </div>
                                  </div>
                                  </div>`;
    });
    document.getElementById("Subconjunto_volkswagen").innerHTML = Subconjunto_volkswagen;
  }
  MostrarSubconjuntoVolkswagen();