//====Variables=====//
var arreglo = [1, 2, 3, 4, 5];
var entero = 1;
var cadena_texto = "Hola Mundo";
var booleano = true;

//===Constantes====//
const PI = 3.1416;


//====Funciones====//
function suma(x, y){
    var resultado = x + y;
    console.log("El resultado de la suma es: " + resultado);
    return resultado;
}

function imprimirMensaje(mensaje){
    console.log("Este es mi mensaje " + mensaje);
}

imprimirMensaje("Hola");
imprimirMensaje("Vacaciones 1 semana :D");
imprimirMensaje(true);

suma(1, 2);
suma(10, 20);
suma(100, 200);


//===Elementos de la pagina como variables===///
var botonBuscar = document.getElementById("buscar");

console.log(botonBuscar);

//==== Eventos===== //
/*botonBuscar.addEventListener("click", function(){
    alert("Hiciste clic al boton");
});*/

var mas = document.getElementById("mas-boton");
var verTodos = document.getElementById("ver-todos");   
var verFotos = document.getElementById("ver-fotos");
var posts = document.getElementById("posts");
var imagenes = document.getElementById("imagenes");

//Eventos de cada variable
var likes = 0;
mas.addEventListener("click", function(){
    likes = likes + 1;
    alert("Hiciste click al botón, ahora tienes " + likes + " likes");
});

verTodos.addEventListener("click", function(){
    if(posts.classList.contains("ocultar")){
        posts.classList.remove("ocultar");
        posts.classList.add("mostrar");
    }else{
        posts.classList.remove("mostrar");
        posts.classList.add("ocultar");
    }
})

verFotos.addEventListener("click", function(){
    if(imagenes.classList.contains("ocultar")){
        imagenes.classList.remove("ocultar");
        imagenes.classList.add("mostrar");
    }else{
        imagenes.classList.remove("mostrar");
        imagenes.classList.add("ocultar");
    }
});

var botonToggle = document.getElementById('toggle-modo');
var body = document.body;

botonToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  if(body.classList.contains('dark-mode')) {
    botonToggle.textContent = '☀️';
  } else {
    botonToggle.textContent = '🌙';
  }
});

var seeAll = document.getElementById("see-all");
var ImagenPantalla = seeAll.querySelector(".segunda-imagen");
var ImagenesSig= seeAll.querySelectorAll("#imagenes img");
var ImagenOriginal = ImagenPantalla.src;
let currentIndex = 0;
let intervalId;

seeAll.addEventListener("mouseover", function(){
  intervalId = setInterval(() => {
    ImagenPantalla.src = ImagenesSig[currentIndex].src;
    currentIndex++;
    if (currentIndex >= ImagenesSig.length) {
      currentIndex = 0;
    }
  }, 2000);
});

seeAll.addEventListener("mouseout", function() {
  clearInterval(intervalId);
  ImagenPantalla.src = ImagenOriginal;
});

var tarjetas = document.querySelectorAll(".tarjeta");

botonBuscar.addEventListener("click", function() {
  const busqueda = prompt("Escribe tu búsqueda");
  tarjetas.forEach(tarjeta => {
    if (tarjeta.textContent.toLowerCase().includes(busqueda.toLowerCase())) {
      tarjeta.classList.remove("ocultar");
      tarjeta.classList.add("mostrar2");
    } else {
      tarjeta.classList.remove("mostrar2");
      tarjeta.classList.add("ocultar");
    }
  });
});