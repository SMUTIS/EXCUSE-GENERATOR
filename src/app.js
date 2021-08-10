/* eslint-disable */
import "bootstrap";
import "./style.css";

function random() {
  var quienes = [
    "Ramona",
    "Batman",
    "Chiquito",
    "Gollum",
    "Trump",
    "Spiderman",
    "mi gato"
  ];
  var accion = [
    "me rompió la aspiradora",
    "se comio mi practica de JS",
    "tiro el ordenador por la ventana",
    "declaro la 3era guerra mundial",
    "secuestro a mi gato",
    "me robo la cartera",
    "me rasguño la cara"
  ];
  var cuando = [
    "antes de clase",
    "mientras dormia",
    "antes de comer",
    "después de trabajar",
    "en mis sueños",
    "mientras compraba",
    "cuando le daba de comer"
  ];

  var quienesalea = quienes[Math.floor(Math.random() * (7 - 0)) + 0];
  var accionalea = accion[Math.floor(Math.random() * (7 - 0)) + 0];
  var cuandoalea = cuando[Math.floor(Math.random() * (7 - 0)) + 0];

  var concatenar = quienesalea + " " + accionalea + " " + cuandoalea;
  return concatenar;
}
window.onload = () => {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = random();
  });
};
