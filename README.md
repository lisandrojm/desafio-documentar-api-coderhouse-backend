# DESAFÍO ENTREGABLE - Documentar Api - Coderhouse/Backend

Este repositorio contiene el desafío "Documentar Api" con las siguientes características:

# Objetivos

## Swagger

Configuración necesaria para tener documentado tu proyecto final a partir de Swagger.

- El link del correo expira después de 1 hora de enviado.
- Se impide reestablecer la contraseña con la misma contraseña del usuario y se le indica que no se puede colocar la misma contraseña.
- Cuando el link expira se redirige al usuario a una vista que le permite generar nuevamente el correo de restablecimiento, el cual cuenta con una nueva duración de 1 hora.

<small>Directorio/s de referencia</small>

- `/src/index.js`: Configuración de Swagger en el inicion de la app

  - Ruta de Swagger:
    - /api/docs

- `/src/components/utils/swagger/swagger.js` : Configuración de swagger y rutas de los archivos .yaml

- `/src/docs`

  - `/src/docs/carts/carts.yaml`: Módulo de documentación de carritos.
  - `/src/docs/products/products.yaml`: Módulo de documentación de productos.

### Video "Documentación de Api"

---

## Requisitos

Asegúrate de tener los siguientes requisitos instalados en tu entorno de desarrollo:

- Node.js
- MongoDB

## Instrucciones de instalación

Sigue estos pasos para instalar y configurar el proyecto:

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/lisandrojm/desafio_documentar_api
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd desafio_documentar_api
   ```

3. Instala las dependencias del proyecto ejecutando el siguiente comando:

   ```bash
   npm install
   ```

4. Configura la conexión a la base de datos MongoDB y todas las variables de entorno en el archivo `.env`. Puedes copiar el archivo `.env.example` y renombrarlo a `.env`, luego actualiza los valores con tu configuración:

   ```bash
   cp .env.example .env
   ```

   Asegúrate de tener MongoDB en ejecución , la URL de conexión correcta y todas las variables de entorno configuradas en el archivo `.env`.

5. Inicia la aplicación con el siguiente comando:

   ```bash
   npm start
   ```

   Esto iniciará el servidor Node.js y estará escuchando en el puerto especificado en el archivo `.env`.

6. Accede a la aplicación en tu navegador web ingresando la siguiente URL:

   ```
   http://localhost:<PUERTO_DE_LA_APP>
   ```

   Asegúrate de reemplazar `<PUERTO_DE_LA_APP>` con el número de puerto especificado en el archivo `.env`.

## Dependencias

El proyecto utiliza las siguientes dependencias:

- **Express.js (v4.18.2):** Framework de Node.js para construir aplicaciones web.
- **UUID (v9.0.0):** Biblioteca para generar identificadores únicos.
- **Cors (v2.8.5):** Middleware para permitir peticiones HTTP entre diferentes dominios.
- **Dotenv (v16.3.1):** Carga variables de entorno desde un archivo .env.
- **Express-handlebars (v7.0.7):** Motor de plantillas para Express.js.
- **MongoDB (v5.6.0):** Driver de MongoDB para Node.js.
- **Mongoose (v7.3.1):** Modelado de objetos de MongoDB para Node.js.
- **Multer (v1.4.5-lts.1):** Middleware para manejar datos de formulario multipart/form-data.
- **Socket.io (v4.6.2):** Biblioteca para la comunicación en tiempo real basada en WebSockets.
- **Sweetalert2 (v11.7.12):** Biblioteca para mostrar mensajes y alertas personalizadas.
- **Connect-mongo (v5.0.0):** Middleware para almacenar sesiones de Express.js en MongoDB.
- **Cookie-parser (v1.4.6):** Middleware para analizar cookies en las solicitudes de Express.js.
- **Express-session (v1.17.3):** Middleware para manejar sesiones en Express.js.
- **Mongoose-paginate-v2 (v1.7.1):** Plugin de paginación para Mongoose.
- **Bcrypt (v5.1.0):** Biblioteca para el hashing seguro de contraseñas.
- **Passport (v0.6.0):** Middleware para autenticación en Node.js.
- **Passport-github2 (v0.1.12):** Estrategia de autenticación para Passport usando OAuth 2.0 con GitHub.
- **Passport-local (v1.0.0):** Estrategia de autenticación para Passport basada en credenciales locales.
- **Jsonwebtoken (v9.0.1):** Biblioteca para generar y verificar tokens JWT.
- **Passport-jwt (v4.0.1):** Estrategia de autenticación para Passport que utiliza tokens JWT (JSON Web Tokens) para la autenticación de usuarios.
- **Commander (v11.0.0):** Biblioteca para crear interfaces de línea de comandos interactivas en Node.js.
- **Twilio (v4.16.0):** Biblioteca para enviar y recibir mensajes de texto y realizar llamadas telefónicas a través de la API de Twilio.
- **Nodemailer (v6.9.4):** Biblioteca para enviar correos electrónicos desde una aplicación Node.js.
- **Faker (v5.5.3):** Biblioteca para generar datos falsos como nombres, direcciones, correos electrónicos, etc., útil para pruebas y desarrollo.
- **@hapi/boom (v10.0.1):** Biblioteca para manejar errores HTTP de una manera más consistente y amigable.
- **winston (v3.10.0):** Biblioteca para el registro de registros (logs) en Node.js.
- **Swagger-jsdoc (v6.2.8):** Biblioteca para generar documentación de API utilizando comentarios en el código fuente.
- **Swagger-ui-express (v5.0.0):** Biblioteca para renderizar la documentación de Swagger de forma interactiva en una aplicación Express..

  "swagger-jsdoc": "^6.2.8",
  "swagger-ui-express": "^5.0.0",

## DevDependencies

El proyecto utiliza las siguientes devDependencies:

- Nodemon (v2.0.22): Utilidad que monitoriza cambios en los archivos y reinicia automáticamente la aplicación.

Estas dependencias pueden ser instaladas ejecutando el comando `npm install` en el directorio del proyecto.
