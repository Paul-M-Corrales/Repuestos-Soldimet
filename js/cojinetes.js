//Mostrar producto en html


function MostrarProductosCojinetesChevrolet() {
    const Cojinetes_chevrolet = CargarCojinetesChevroletLS();
    let chevrolet = "";
  
    Cojinetes_chevrolet.forEach((elemento) => {
      chevrolet += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCojinetesChevrolet(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Cojinetes_chevrolet").innerHTML = chevrolet;
  }
  
  MostrarProductosCojinetesChevrolet();
  
  function MostrarProductosCojinetesCitroen() {
    const Cojinetes_citroen = CargarCojinetesCitroenLS();
    let citroen = "";
  
    Cojinetes_citroen.forEach((elemento) => {
      citroen += `<div class="col-6 col-sm-4">
          <div class="card text-center" style="width: 18rem;">
          <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
          <div class="card-body">
            <h5 class="card-title">${elemento.nombre}</h5>
            <p class="card-text">$${elemento.precio}</p>
            <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCojinetesCitroen(${elemento.id})">Agregar</a>
          </div>
          </div>
          </div>`;
    });
    document.getElementById("Cojinetes_citroen").innerHTML = citroen;
  }
  
  MostrarProductosCojinetesCitroen();
  
  function MostrarProductosCojinetesFiat() {
    const Cojinetes_fiat = CargarCojinetesFiatLS();
    let fiat = "";
  
    Cojinetes_fiat.forEach((elemento) => {
      fiat += `<div class="col-6 col-sm-4">
              <div class="card text-center" style="width: 18rem;">
              <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
              <div class="card-body">
                <h5 class="card-title">${elemento.nombre}</h5>
                <p class="card-text">$${elemento.precio}</p>
                <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCojinetesFiat(${elemento.id})">Agregar</a>
              </div>
              </div>
              </div>`;
    });
    document.getElementById("Cojinetes_fiat").innerHTML = fiat;
  }
  
  MostrarProductosCojinetesFiat();
  
  function MostrarProductosCojinetesFord() {
    const Cojinetes_ford = CargarCojinetesFordLS();
    let ford = "";
  
    Cojinetes_ford.forEach((elemento) => {
      ford += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCojinetesFord(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Cojinetes_ford").innerHTML = ford;
  }
  
  MostrarProductosCojinetesFord();
  
  function MostrarProductosCojinetesHonda() {
    const Cojinetes_honda = CargarCojinetesHondaLS();
    let honda = "";
  
    Cojinetes_honda.forEach((elemento) => {
      honda += `<div class="col-6 col-sm-4">
                  <div class="card text-center" style="width: 18rem;">
                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${elemento.nombre}</h5>
                    <p class="card-text">$${elemento.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCojinetesHonda(${elemento.id})">Agregar</a>
                  </div>
                  </div>
                  </div>`;
    });
    document.getElementById("Cojinetes_honda").innerHTML = honda;
  }
  
  MostrarProductosCojinetesHonda();
  
  function MostrarProductosCojinetesNissan() {
    const Cojinetes_nissan = CargarCojinetesNissanLS();
    let nissan = "";
  
    Cojinetes_nissan.forEach((elemento) => {
      nissan += `<div class="col-6 col-sm-4">
                      <div class="card text-center" style="width: 18rem;">
                      <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                      <div class="card-body">
                        <h5 class="card-title">${elemento.nombre}</h5>
                        <p class="card-text">$${elemento.precio}</p>
                        <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCojinetesNissan(${elemento.id})">Agregar</a>
                      </div>
                      </div>
                      </div>`;
    });
    document.getElementById("Cojinetes_nissan").innerHTML = nissan;
  }
  
  MostrarProductosCojinetesNissan();
  
  function MostrarProductosCojinetesPeugeot() {
    const Cojinetes_peugeot = CargarCojinetesPeugeotLS();
    let peugeot = "";
  
    Cojinetes_peugeot.forEach((elemento) => {
      peugeot += `<div class="col-6 col-sm-4">
                      <div class="card text-center" style="width: 18rem;">
                      <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                      <div class="card-body">
                        <h5 class="card-title">${elemento.nombre}</h5>
                        <p class="card-text">$${elemento.precio}</p>
                        <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCojinetesPeugeot(${elemento.id})">Agregar</a>
                      </div>
                      </div>
                      </div>`;
    });
    document.getElementById("Cojinetes_peugeot").innerHTML = peugeot;
  }
  
  MostrarProductosCojinetesPeugeot();
  
  function MostrarProductosCojinetesRenault() {
    const Cojinetes_renault = CargarCojinetesRenaultLS();
    let renault = "";
  
    Cojinetes_renault.forEach((elemento) => {
      renault += `<div class="col-6 col-sm-4">
                          <div class="card text-center" style="width: 18rem;">
                          <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                          <div class="card-body">
                            <h5 class="card-title">${elemento.nombre}</h5>
                            <p class="card-text">$${elemento.precio}</p>
                            <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCojinetesRenault(${elemento.id})">Agregar</a>
                          </div>
                          </div>
                          </div>`;
    });
    document.getElementById("Cojinetes_renault").innerHTML = renault;
  }
  
  MostrarProductosCojinetesRenault();
  
  function MostrarProductosCojinetesToyota() {
    const Cojinetes_toyota = CargarCojinetesToyotaLS();
    let toyota = "";
  
    Cojinetes_toyota.forEach((elemento) => {
      toyota += `<div class="col-6 col-sm-4">
                              <div class="card text-center" style="width: 18rem;">
                              <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                              <div class="card-body">
                                <h5 class="card-title">${elemento.nombre}</h5>
                                <p class="card-text">$${elemento.precio}</p>
                                <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCojinetesToyota(${elemento.id})">Agregar</a>
                              </div>
                              </div>
                              </div>`;
    });
    document.getElementById("Cojinetes_toyota").innerHTML = toyota;
  }
  
  MostrarProductosCojinetesToyota();
  
  function MostrarProductosCojinetesVolkswagen() {
    const Cojinetes_volkswagen = CargarCojinetesVolkswagenLS();
    let volkswagen = "";
  
    Cojinetes_volkswagen.forEach((elemento) => {
      volkswagen += `<div class="col-6 col-sm-4">
                                  <div class="card text-center" style="width: 18rem;">
                                  <img src="../img/${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                                  <div class="card-body">
                                    <h5 class="card-title">${elemento.nombre}</h5>
                                    <p class="card-text">$${elemento.precio}</p>
                                    <a href="#" class="btn btn-primary" onclick="AgregarAlCarritoCojinetesVolkswagen(${elemento.id})">Agregar</a>
                                  </div>
                                  </div>
                                  </div>`;
    });
    document.getElementById("Cojinetes_volkswagen").innerHTML = volkswagen;
  }
  MostrarProductosCojinetesVolkswagen();
  
  
  
  
  
  
  
  