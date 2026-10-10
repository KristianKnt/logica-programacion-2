/**
 * Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
Debe imprimir ambos resultados por consola o por el DOM.
Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
Entrada: 
45.
Salida
Grados Kelvin: 318.15
Grados Fahrenheit: 113. 
Entrada:
 14.
Salida
Grados Kelvin: 287.15
Grados Fahrenheit: 57.2. 
Pruébalo con los valores numéricos que se te ocurran.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub.
Colócalo en un repositorio llamado “logica-programacion-2”
 * 
 * 
 */

// 1. Seleccionar los elementos del HTML usando sus IDs
const inputNombre = document.getElementById('campoNombre');
const boton = document.getElementById('botonEnviar');
const contenedorResultado0 = document.getElementById('resultado0');
const contenedorResultado1 = document.getElementById('resultado1');
const contenedorResultado2 = document.getElementById('resultado2');

// 2. Escuchar el evento 'click' del botón
boton.addEventListener('click', () => {

  // 3. Pedir/Capturar el dato del input usando la propiedad .value
  const datos = parseFloat(inputNombre.value);

  // Validar que el usuario no haya dejado el campo vacío
  // if (datos.trim() === "") {
  //   contenedorResultado0.innerHTML = "<p style='color: red;'>Por favor, escribe un valor numerico valido.</p>";
  //   return;
  // }
  // validamo que si sea entero o numerico
  if (!datos === NaN) {
    contenedorResultado0.innerHTML = "<p style='color: red;'>Por favor, ingresa un numero.</p>";
    return;
  }

  // buscamos la informacion por google
  // (0 °C × 9/5) + 32 = 32 °F
  const datos_farenheint = (  (datos*(9/5)) + 32  );

  // ahora en kelvin
  // 	0 °C + 273.15 = 273,15 K

  const datos_kelvin = (datos + 273.15);


  // 4. Trabajar el dato e insertarlo en el HTML usando .innerHTML o .textContent
  contenedorResultado0.innerHTML = `<h3>Ingresate, ${datos}° celcius.</h3>`;
  contenedorResultado1.innerHTML = `<h3>ahora son, ${datos_farenheint}f Fahrenheit.</h3>`;
  contenedorResultado2.innerHTML = `<h3>ahora son, ${datos_kelvin}f kelvin.</h3>`;

  // Opcional: Limpiar el campo de texto después de enviar
  inputNombre.value = "";
});

