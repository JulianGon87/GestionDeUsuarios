# Sistema de Gestión de Usuarios

Este proyecto es una aplicación web sencilla desarrollada para la Evaluación Final del Módulo 5. Permite gestionar y visualizar información de usuarios obtenida de una API externa.

## Descripción

La aplicación interactúa con la API de [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para obtener una lista de usuarios ficticios. A través de una interfaz limpia y botones de acción, el usuario puede consultar diferentes aspectos de la información de los usuarios.

## Funcionalidades

El sistema ofrece las siguientes opciones:

- **Listar Nombres:** Muestra una lista con los nombres de todos los usuarios.
- **Info Básica:** Permite buscar un usuario por nombre y muestra su *username* y *email*.
- **Dirección:** Permite buscar un usuario por nombre y muestra los detalles de su dirección (calle, ciudad, código postal, etc.).
- **Info Avanzada:** Permite buscar un usuario por nombre y muestra información de contacto y compañía (teléfono, website, empresa).
- **Compañías:** Lista los nombres de las compañías y sus eslóganes.
- **Ordenados A-Z:** Muestra la lista de nombres de usuarios ordenada alfabéticamente.

## Tecnologías Utilizadas

- **HTML5:** Estructura semántica de la página.
- **CSS3:** Estilos para la interfaz de usuario.
- **JavaScript (ES6+):** Lógica de la aplicación, manejo de clases, promesas y consumo de API con `fetch` y `async/await`.

## Instalación y Uso

1.  Clona este repositorio o descarga los archivos.
2.  Abre el archivo `index.html` en tu navegador web de preferencia.
3.  Utiliza los botones del panel de control para interactuar con el sistema.

## Estructura de Archivos

-   `index.html`: Página principal.
-   `css/style.css`: Estilos de la aplicación.
-   `js/app.js`: Lógica principal y manejo de datos.

---
**Curso:** SENCE - FRONTEND
**Módulo:** 5 - Evaluación Final
