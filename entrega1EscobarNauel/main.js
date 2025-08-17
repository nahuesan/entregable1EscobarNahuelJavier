


const saludo = "Bienvenido a tu lista de compras";

let usuario = "";

let listaCompras = [];

function iniciarApp() {
  alert(saludo);

   usuario = prompt("¿Cuál es tu nombre?");
  alert("Hola " + usuario + ", vamos a armar tu lista.");

  let continuar = true;
  while (continuar) {
    let producto = prompt("Ingresa un producto para la lista:");
    if (producto) {
      listaCompras.push(producto); 
      console.log("Producto agregado:", producto);
    }

       continuar = confirm("¿Querés agregar otro producto?");
  }

    alert(usuario + ", agregaste " + listaCompras.length + " productos.");


  console.log("📋 Lista completa de productos:");
  for (let i = 0; i < listaCompras.length; i++) {
    console.log((i + 1) + ". " + listaCompras[i]);
  }

  alert("Revisa la consola (F12) para ver tu lista completa 😉");
}
