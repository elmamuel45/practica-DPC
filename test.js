// Importa la función 'jsdom' de la biblioteca 'jsdom' para simular un entorno de navegador en Node.js
const { JSDOM } = require("jsdom");

// Importa el contenido de los archivos HTML, CSS y JavaScript
const fs = require("fs");
const html = fs.readFileSync("index.html", "utf-8");
const css = fs.readFileSync("styles.css", "utf-8");
const js = fs.readFileSync("script.js", "utf-8");

// Configura el entorno de JSDOM
const dom = new JSDOM(html, { runScripts: "dangerously" });
const { window } = dom;

// Agrega los estilos CSS al documento
const styleElement = window.document.createElement("style");
styleElement.textContent = css;
window.document.head.appendChild(styleElement);

// Evalúa el código JavaScript
const scriptElement = window.document.createElement("script");
scriptElement.textContent = js;
window.document.body.appendChild(scriptElement);

// Realiza la prueba unitaria utilizando Jest
test("El contenido del mensaje debe ser '¡Hola Mundo desde JavaScript!'", () => {
  const mensajeElement = window.document.getElementById("mensaje");
  expect(mensajeElement.innerHTML).toBe("¡Hola Mundo desde JavaScript!");
});
