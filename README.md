# PRUEBA TECNICA REACT JS

Este proyecto es una aplicación web de autenticación segura desarrollada con React, que implementa un flujo de inicio de sesión con validación OTP y navegación protegida.

Características principales:
✔ Formulario de Login:

Campos para usuario y contraseña con validaciones estrictas.
Requisitos de contraseña: mínimo 12 caracteres, incluyendo un carácter especial, un número, una letra minúscula y una mayúscula.
Autenticación con credenciales predefinidas (prueba_1 / @Password123).
Carrusel de imágenes en la pantalla de inicio de sesión, cambiando cada 10 segundos.
✔ Validación OTP:

Simulación del envío de un código OTP de 6 dígitos en la consola.
Campo de ingreso para el código OTP con validación en tiempo real.
Redirección a la pantalla de bienvenida tras una validación exitosa.
✔ Pantalla de Bienvenida:

Muestra el correo del usuario autenticado.
Menú de navegación con al menos 3 opciones funcionales.
Botón de cierre de sesión que redirige al login y borra la sesión.
✔ Diseño Responsivo:

Adaptable a dispositivos móviles y de escritorio.
Uso de CSS, Material UI o styled-components para estilización.
✔ Extras Implementados (Opcionales, pero valorados):

React Context o Redux para gestionar la autenticación.
React Router para manejo de rutas y navegación.
Mejores prácticas de accesibilidad y semántica HTML.

# Instalacion y Ejecucion

# Clonar el repositorio

-git clone https://github.com/DanGustavo1234/pruebaTecnicaTikee.git

-cd nombre-del-repositorio
# Instalar Dependencias
npm install

# configuracion de la base de datos.

Este proyecto utiliza Firebase como backend para la autenticación y almacenamiento de datos.
Para conectar el proyecto con Firebase, debes configurar tus credenciales en el archivo firebaseConfig.tsx debes crearlo en el siguiente directorio

/src/firebaseConfig.tsx

La estructura es la siguiente:

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const appReact = initializeApp(firebaseConfig);
export default appReact;

# Ejecutar la aplicacion

npm run dev

