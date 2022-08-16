const juntas_chevrolet = [
    { id: 1, nombre: "Astra", precio: 3200, imagen: "logo_chevrolet.jpg" },
    { id: 2, nombre: "Agile", precio: 3800, imagen: "logo_chevrolet.jpg" },
    { id: 3, nombre: "Blazer", precio: 4600, imagen: "logo_chevrolet.jpg" },
    { id: 4, nombre: "Captiva", precio: 4900, imagen: "logo_chevrolet.jpg" },
    { id: 5, nombre: "Corsa", precio: 3100, imagen: "logo_chevrolet.jpg" },
    { id: 6, nombre: "Vectra", precio: 3700, imagen: "logo_chevrolet.jpg" },
  ];
  const juntas_citroen = [
    { id: 7, nombre: "berlingo", precio: 3700, imagen: "logo citroen.png" },
    { id: 8, nombre: "c3", precio: 3200, imagen: "logo citroen.png" },
    { id: 9, nombre: "c4", precio: 3800, imagen: "logo citroen.png" },
    { id: 10, nombre: "c4 aircross", precio: 3100, imagen: "logo citroen.png" },
    { id: 11, nombre: "cactus", precio: 4600, imagen: "logo citroen.png" },
    { id: 12, nombre: "xsara picasso", precio: 4900, imagen: "logo citroen.png" },
  ];
  const juntas_fiat = [
    { id: 13, nombre: "128", precio: 3200, imagen: "logo fiat.jpg" },
    { id: 14, nombre: "adventure", precio: 4900, imagen: "logo fiat.jpg" },
    { id: 15, nombre: "duna", precio: 4600, imagen: "logo fiat.jpg" },
    { id: 16, nombre: "fiorino", precio: 3100, imagen: "logo fiat.jpg" },
    { id: 17, nombre: "toro", precio: 3700, imagen: "logo fiat.jpg" },
    { id: 18, nombre: "uno", precio: 3800, imagen: "logo fiat.jpg" },
  ];
  const juntas_ford = [
    { id: 19, nombre: "escort", precio: 3100, imagen: "logo ford.png" },
    { id: 20, nombre: "fiesta", precio: 3200, imagen: "logo ford.png" },
    { id: 21, nombre: "focus", precio: 3800, imagen: "logo ford.png" },
    { id: 22, nombre: "ka", precio: 4600, imagen: "logo ford.png" },
    { id: 23, nombre: "kuga", precio: 3700, imagen: "logo ford.png" },
    { id: 24, nombre: "mondeo", precio: 4900, imagen: "logo ford.png" },
  ];
  const juntas_honda = [
    { id: 25, nombre: "accord", precio: 3200, imagen: "logo honda.jpg" },
    { id: 26, nombre: "civic", precio: 3800, imagen: "logo honda.jpg" },
    { id: 27, nombre: "crv", precio: 4600, imagen: "logo honda.jpg" },
    { id: 28, nombre: "integra", precio: 4900, imagen: "logo honda.jpg" },
  ];
  const juntas_nissan = [
    { id: 29, nombre: "frontier", precio: 3200, imagen: "logo nissan.jpg" },
    { id: 30, nombre: "sentra", precio: 3800, imagen: "logo nissan.jpg" },
    { id: 31, nombre: "serena", precio: 4600, imagen: "logo nissan.jpg" },
    { id: 32, nombre: "tiida", precio: 4900, imagen: "logo nissan.jpg" },
    { id: 33, nombre: "pathfinder", precio: 3100, imagen: "logo nissan.jpg" },
  ];
  const juntas_peugeot = [
    { id: 34, nombre: "106", precio: 3200, imagen: "logo peugeot.png" },
    { id: 35, nombre: "205", precio: 3800, imagen: "logo peugeot.png" },
    { id: 36, nombre: "206", precio: 4600, imagen: "logo peugeot.png" },
    { id: 37, nombre: "207", precio: 4900, imagen: "logo peugeot.png" },
    { id: 38, nombre: "2008", precio: 3100, imagen: "logo peugeot.png" },
    { id: 39, nombre: "3008", precio: 3700, imagen: "logo peugeot.png" },
  ];
  const juntas_renault = [
    { id: 40, nombre: "12", precio: 3200, imagen: "logo renault.jpg" },
    { id: 41, nombre: "clio", precio: 3800, imagen: "logo renault.jpg" },
    { id: 42, nombre: "duster", precio: 4600, imagen: "logo renault.jpg" },
    { id: 43, nombre: "megane", precio: 4900, imagen: "logo renault.jpg" },
    { id: 44, nombre: "sandero", precio: 3100, imagen: "logo renault.jpg" },
    { id: 45, nombre: "twingo", precio: 3700, imagen: "logo renault.jpg" },
  ];
  const juntas_toyota = [
    { id: 46, nombre: "celica", precio: 3200, imagen: "logo toyota.jpg" },
    { id: 47, nombre: "corolla", precio: 3800, imagen: "logo toyota.jpg" },
    { id: 48, nombre: "cresida", precio: 4600, imagen: "logo toyota.jpg" },
    { id: 49, nombre: "etios", precio: 4900, imagen: "logo toyota.jpg" },
    { id: 50, nombre: "hilux", precio: 3100, imagen: "logo toyota.jpg" },
    { id: 51, nombre: "landcrusier", precio: 3700, imagen: "logo toyota.jpg" },
  ];
  const juntas_volkswagen = [
    { id: 52, nombre: "bora", precio: 3200, imagen: "logo volkswagen.jpg" },
    { id: 53, nombre: "fox", precio: 3800, imagen: "logo volkswagen.jpg" },
    { id: 54, nombre: "gacel", precio: 4600, imagen: "logo volkswagen.jpg" },
    { id: 55, nombre: "gol", precio: 4900, imagen: "logo volkswagen.jpg" },
    { id: 56, nombre: "golf", precio: 3100, imagen: "logo volkswagen.jpg" },
    { id: 57, nombre: "Vento", precio: 3700, imagen: "logo volkswagen.jpg" },
  ];

  //LocalStorage

function GuardarchevroletLS(juntas_chevrolet) {
    localStorage.setItem("Juntas_chevrolet", JSON.stringify(juntas_chevrolet));
  }
  function CargarChevroletLS() {
    return JSON.parse(localStorage.getItem("Juntas_chevrolet")) || [];
  }
  GuardarchevroletLS(juntas_chevrolet);
  
  function GuardarCitroenLS(juntas_citroen) {
    localStorage.setItem("Juntas_citroen", JSON.stringify(juntas_citroen));
  }
  function CargarCitroenLS() {
    return JSON.parse(localStorage.getItem("Juntas_citroen")) || [];
  }
  GuardarCitroenLS(juntas_citroen);
  
  function GuardarFiatLS(juntas_fiat) {
    localStorage.setItem("Juntas_fiat", JSON.stringify(juntas_fiat));
  }
  function CargarFiatLS() {
    return JSON.parse(localStorage.getItem("Juntas_fiat")) || [];
  }
  GuardarFiatLS(juntas_fiat);
  
  function GuardarFordLS(juntas_ford) {
    localStorage.setItem("Juntas_ford", JSON.stringify(juntas_ford));
  }
  function CargarFordLS() {
    return JSON.parse(localStorage.getItem("Juntas_ford")) || [];
  }
  GuardarFordLS(juntas_ford);
  
  function GuardarHondaLS(juntas_honda) {
    localStorage.setItem("Juntas_honda", JSON.stringify(juntas_honda));
  }
  function CargarHondaLS() {
    return JSON.parse(localStorage.getItem("Juntas_honda")) || [];
  }
  GuardarHondaLS(juntas_honda);
  
  function GuardarNissanLS(juntas_nissan) {
    localStorage.setItem("Juntas_nissan", JSON.stringify(juntas_nissan));
  }
  function CargarNissanLS() {
    return JSON.parse(localStorage.getItem("Juntas_nissan")) || [];
  }
  GuardarNissanLS(juntas_nissan);
  
  function GuardarPeugeotLS(juntas_peugeot) {
    localStorage.setItem("Juntas_peugeot", JSON.stringify(juntas_peugeot));
  }
  function CargarPeugeotLS() {
    return JSON.parse(localStorage.getItem("Juntas_peugeot")) || [];
  }
  GuardarPeugeotLS(juntas_peugeot);
  
  function GuardarRenaultLS(juntas_renault) {
    localStorage.setItem("Juntas_renault", JSON.stringify(juntas_renault));
  }
  function CargarRenaultLS() {
    return JSON.parse(localStorage.getItem("Juntas_renault")) || [];
  }
  GuardarRenaultLS(juntas_renault);
  
  function GuardarToyotaLS(juntas_toyota) {
    localStorage.setItem("Juntas_toyota", JSON.stringify(juntas_toyota));
  }
  function CargarToyotaLS() {
    return JSON.parse(localStorage.getItem("Juntas_toyota")) || [];
  }
  GuardarToyotaLS(juntas_toyota);
  
  function GuardarVolkswagenLS(juntas_volkswagen) {
    localStorage.setItem("Juntas_volkswagen", JSON.stringify(juntas_volkswagen));
  }
  function CargarVolkswagenLS() {
    return JSON.parse(localStorage.getItem("Juntas_volkswagen")) || [];
  }
  GuardarVolkswagenLS(juntas_volkswagen);


  //carrito chevrolet

function GuardarChevroletCarrito(juntas_chevrolet) {
    localStorage.setItem("carrito", JSON.stringify(juntas_chevrolet));
  }
  function CargarChevroletCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }
  
  function BuscarObjetoChevrolet(id) {
    const juntas_chevrolet = CargarChevroletLS();
    return juntas_chevrolet.find((elemento) => elemento.id == id);
  }
  function BuscarObjetoChevrolet(id) {
    const juntas_chevrolet = CargarChevroletLS();
    return juntas_chevrolet.find((elemento) => elemento.id == id);
  }

  function AgregarAlCarritoChevrolet(id) {
    const productos_carrito = CargarChevroletCarrito();
    let posicion = productos_carrito.findIndex(item =>item.id === id)
     if(posicion > -1) {
        productos_carrito[posicion].cantidad += 1;
     }else{
        const objeto = BuscarObjetoChevrolet(id);
        objeto.cantidad = 1;
        productos_carrito.push(objeto);
     }   
    
    GuardarChevroletCarrito(productos_carrito);
    ActualizarChevrolet();
   
  }

  function AgregarItemAlCarrito(id) {
    const productos_carrito = CargarChevroletCarrito();
    let posicion = productos_carrito.findIndex(item =>item.id === id)
     if(posicion > -1) {
        productos_carrito[posicion].cantidad += 1;
     }else{
        const objeto = BuscarObjetoChevrolet(id);
        objeto.cantidad = 1;
        productos_carrito.push(objeto);
     }   
    
    GuardarChevroletCarrito(productos_carrito);
    MostrarProductosCarrito();
    ActualizarChevrolet();
   
  }
  function SumatotaldeProductos(){
    const productos_carrito = CargarChevroletCarrito();

    return productos_carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0)
  }

  function SumatotalaPagar(){
    const productos_carrito = CargarChevroletCarrito();

    return productos_carrito.reduce((acumulador, item) => acumulador + (item.cantidad * item.precio),0)
  }

  function AgregarItem(id){
    AgregarAlCarritoChevrolet(id);
    MostrarProductosCarrito();
  }

  function EliminardelCarritoChevrolet(id) {
    const productos_carrito = CargarChevroletCarrito();
    let posicion = productos_carrito.findIndex(item =>item.id === id)
    productos_carrito[posicion].cantidad -=1;
     if(productos_carrito[posicion].cantidad == 0) {
        productos_carrito.splice(posicion, 1);
     }    
     GuardarChevroletCarrito(productos_carrito);
     MostrarProductosCarrito();
    ActualizarChevrolet();
  }
  
  function ActualizarChevrolet() {
    let chevrolet = `<button type="button" class="btn btn-primary position-relative">
    <img src="../img/carrito.jpg" alt="Carrito" widht="15" height="50" > 
    <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">${SumatotaldeProductos()}</span>
  </button>`;
    document.getElementById("carrito").innerHTML = chevrolet;
  }
  ActualizarChevrolet();
  
  
  //carrito citroen
  
  function GuardarCitroenCarrito(juntas_citroen) {
    localStorage.setItem("carrito", JSON.stringify(juntas_citroen));
  }
  function CargarCitroenCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }
  
  function BuscarObjetoCitroen(id) {
    const juntas_citroen = CargarCitroenLS();
    return juntas_citroen.find((elemento) => elemento.id == id);
  }
  function AgregarAlCarritoCitroen(id) {
    const productos_carrito = CargarCitroenCarrito();
    let posicion = productos_carrito.findIndex(item =>item.id === id)
     if(posicion > -1) {
        productos_carrito[posicion].cantidad += 1;
     }else{
        const objeto = BuscarObjetoCitroen(id);
        objeto.cantidad = 1;
        productos_carrito.push(objeto);
     }
    GuardarCitroenCarrito(productos_carrito);
    ActualizarCitroen();
  }
  
  function ActualizarCitroen() {
    let contenido = `<button type="button" class="btn btn-primary position-relative">
    <img src="../img/carrito.jpg" alt="Carrito" widht="15" height="50" > 
    <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">${SumatotaldeProductos()}</span>
  </button>`;
    document.getElementById("carrito").innerHTML = contenido;
  }
  ActualizarCitroen();
  
  //carrito fiat
  
  function GuardarFiatCarrito(juntas_fiat) {
    localStorage.setItem("carrito", JSON.stringify(juntas_fiat));
  }
  function CargarFiatCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }
  
  function BuscarObjetoFiat(id) {
    const juntas_fiat = CargarFiatLS();
    return juntas_fiat.find((elemento) => elemento.id == id);
  }
  function AgregarAlCarritoFiat(id) {
    const productos_carrito = CargarFiatCarrito();
    let posicion = productos_carrito.findIndex(item =>item.id === id)
    if(posicion > -1) {
       productos_carrito[posicion].cantidad += 1;
    }else{
       const objeto = BuscarObjetoFiat(id);
       objeto.cantidad = 1;
       productos_carrito.push(objeto);
    } 
    GuardarFiatCarrito(productos_carrito);
    ActualizarFiat();
  }
  
  function ActualizarFiat() {
    let contenido = `<button type="button" class="btn btn-primary position-relative">
    <img src="../img/carrito.jpg" alt="Carrito" widht="15" height="50" > 
    <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">${SumatotaldeProductos()}</span>
  </button>`;
    document.getElementById("carrito").innerHTML = contenido;
  }
  ActualizarFiat();
  
  //carrito ford
  
  function GuardarFordCarrito(juntas_ford) {
    localStorage.setItem("carrito", JSON.stringify(juntas_ford));
  }
  function CargarFordCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }
  
  function BuscarObjetoFord(id) {
    const juntas_ford = CargarFordLS();
    return juntas_ford.find((elemento) => elemento.id == id);
  }
  function AgregarAlCarritoFord(id) {
    const productos_carrito = CargarFordCarrito();
    let posicion = productos_carrito.findIndex(item =>item.id === id)
    if(posicion > -1) {
       productos_carrito[posicion].cantidad += 1;
    }else{
       const objeto = BuscarObjetoFord(id);
       objeto.cantidad = 1;
       productos_carrito.push(objeto);
    } 
    GuardarFordCarrito(productos_carrito);
    ActualizarFord();
  }
  
  function ActualizarFord() {
    let contenido = `<button type="button" class="btn btn-primary position-relative">
    <img src="../img/carrito.jpg" alt="Carrito" widht="15" height="50" > 
    <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">${SumatotaldeProductos()}</span>
  </button>`;
    document.getElementById("carrito").innerHTML = contenido;
  }
  ActualizarFord();
  
  //carrito honda
  
  function GuardarHondaCarrito(juntas_honda) {
    localStorage.setItem("carrito", JSON.stringify(juntas_honda));
  }
  function CargarHondaCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }
  
  function BuscarObjetoHonda(id) {
    const juntas_honda = CargarHondaLS();
    return juntas_honda.find((elemento) => elemento.id == id);
  }
  function AgregarAlCarritoHonda(id) {
    const productos_carrito = CargarHondaCarrito();
    let posicion = productos_carrito.findIndex(item =>item.id === id)
    if(posicion > -1) {
       productos_carrito[posicion].cantidad += 1;
    }else{
       const objeto = BuscarObjetoHonda(id);
       objeto.cantidad = 1;
       productos_carrito.push(objeto);
    } 
    GuardarHondaCarrito(productos_carrito);
    ActualizarHonda();
  }
  
  function ActualizarHonda() {
    let contenido = `<button type="button" class="btn btn-primary position-relative">
    <img src="../img/carrito.jpg" alt="Carrito" widht="15" height="50" > 
    <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">${SumatotaldeProductos()}</span>
  </button>`;
    document.getElementById("carrito").innerHTML = contenido;
  }
  ActualizarHonda();
  
  //carrito nissan
  
  function GuardarNissanCarrito(juntas_nissan) {
    localStorage.setItem("carrito", JSON.stringify(juntas_nissan));
  }
  function CargarNissanCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }
  
  function BuscarObjetoNissan(id) {
    const juntas_nissan = CargarNissanLS();
    return juntas_nissan.find((elemento) => elemento.id == id);
  }
  function AgregarAlCarritoNissan(id) {
    const productos_carrito = CargarNissanCarrito();
    let posicion = productos_carrito.findIndex(item =>item.id === id)
    if(posicion > -1) {
       productos_carrito[posicion].cantidad += 1;
    }else{
       const objeto = BuscarObjetoNissan(id);
       objeto.cantidad = 1;
       productos_carrito.push(objeto);
    } 
    GuardarNissanCarrito(productos_carrito);
    ActualizarNissan();
  }
  
  function ActualizarNissan() {
    let contenido = `<button type="button" class="btn btn-primary position-relative">
    <img src="../img/carrito.jpg" alt="Carrito" widht="15" height="50" > 
    <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">${SumatotaldeProductos()}</span>
  </button>`;
    document.getElementById("carrito").innerHTML = contenido;
  }
  ActualizarNissan();
  
  //carrito peugeot
  
  function GuardarPeugeotCarrito(juntas_peugeot) {
    localStorage.setItem("carrito", JSON.stringify(juntas_peugeot));
  }
  function CargarPeugeotCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }
  
  function BuscarObjetoPeugeot(id) {
    const juntas_peugeot = CargarPeugeotLS();
    return juntas_peugeot.find((elemento) => elemento.id == id);
  }
  function AgregarAlCarritoPeugeot(id) {
    const productos_carrito = CargarPeugeotCarrito();
    let posicion = productos_carrito.findIndex(item =>item.id === id)
    if(posicion > -1) {
       productos_carrito[posicion].cantidad += 1;
    }else{
       const objeto = BuscarObjetoPeugeot(id);
       objeto.cantidad = 1;
       productos_carrito.push(objeto);
    } 
    GuardarPeugeotCarrito(productos_carrito);
    ActualizarPeugeot();
  }
  
  function ActualizarPeugeot() {
    let contenido = `<button type="button" class="btn btn-primary position-relative">
    <img src="../img/carrito.jpg" alt="Carrito" widht="15" height="50" > 
    <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">${SumatotaldeProductos()}</span>
  </button>`;
    document.getElementById("carrito").innerHTML = contenido;
  }
  ActualizarPeugeot();
  
  //carrito renault
  
  function GuardarRenaultCarrito(juntas_renault) {
    localStorage.setItem("carrito", JSON.stringify(juntas_renault));
  }
  function CargarRenaultCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }
  
  function BuscarObjetoRenault(id) {
    const juntas_renault = CargarRenaultLS();
    return juntas_renault.find((elemento) => elemento.id == id);
  }
  function AgregarAlCarritoRenault(id) {
    const productos_carrito = CargarRenaultCarrito();
    let posicion = productos_carrito.findIndex(item =>item.id === id)
    if(posicion > -1) {
       productos_carrito[posicion].cantidad += 1;
    }else{
       const objeto = BuscarObjetoRenault(id);
       objeto.cantidad = 1;
       productos_carrito.push(objeto);
    } 
    GuardarRenaultCarrito(productos_carrito);
    ActualizarRenault();
  }
  
  function ActualizarRenault() {
    let contenido = `<button type="button" class="btn btn-primary position-relative">
    <img src="../img/carrito.jpg" alt="Carrito" widht="15" height="50" > 
    <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">${SumatotaldeProductos()}</span>
  </button>`;
    document.getElementById("carrito").innerHTML = contenido;
  }
  ActualizarRenault();
  
  //carrito toyota
  
  function GuardarToyotaCarrito(juntas_toyota) {
    localStorage.setItem("carrito", JSON.stringify(juntas_toyota));
  }
  function CargarToyotaCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }
  
  function BuscarObjetoToyota(id) {
    const juntas_toyota = CargarToyotaLS();
    return juntas_toyota.find((elemento) => elemento.id == id);
  }
  function AgregarAlCarritoToyota(id) {
    const productos_carrito = CargarToyotaCarrito();
    let posicion = productos_carrito.findIndex(item =>item.id === id)
    if(posicion > -1) {
       productos_carrito[posicion].cantidad += 1;
    }else{
       const objeto = BuscarObjetoToyota(id);
       objeto.cantidad = 1;
       productos_carrito.push(objeto);
    } 
    GuardarToyotaCarrito(productos_carrito);
    ActualizarToyota();
  }
  
  function ActualizarToyota() {
    let contenido = `<button type="button" class="btn btn-primary position-relative">
    <img src="../img/carrito.jpg" alt="Carrito" widht="15" height="50" > 
    <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">${SumatotaldeProductos()}</span>
  </button>`;
    document.getElementById("carrito").innerHTML = contenido;
  }
  ActualizarToyota();
  
  //carrito volkswagen
  
  function GuardarVolkswagenCarrito(juntas_volkswagen) {
    localStorage.setItem("carrito", JSON.stringify(juntas_volkswagen));
  }
  function CargarVolkswagenCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }
  
  function BuscarObjetoVolkswagen(id) {
    const juntas_volkswagen = CargarVolkswagenLS();
    return juntas_volkswagen.find((elemento) => elemento.id == id);
  }
  function AgregarAlCarritoVolkswagen(id) {
    const productos_carrito = CargarVolkswagenCarrito();
    let posicion = productos_carrito.findIndex(item =>item.id === id)
    if(posicion > -1) {
       productos_carrito[posicion].cantidad += 1;
    }else{
       const objeto = BuscarObjetoVolkswagen(id);
       objeto.cantidad = 1;
       productos_carrito.push(objeto);
    } 
    GuardarVolkswagenCarrito(productos_carrito);
    ActualizarVolkswagen();
  }
  
  function ActualizarVolkswagen() {
    let contenido = `<button type="button" class="btn btn-primary position-relative">
    <img src="../img/carrito.jpg" alt="Carrito" widht="15" height="50" > 
    <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">${SumatotaldeProductos()}</span>
  </button>`;
    document.getElementById("carrito").innerHTML = contenido;
  }
  ActualizarVolkswagen();
  