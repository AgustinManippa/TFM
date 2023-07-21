`Documentación para Desarrolladores:`

## Estructura del Proyecto
La aplicación sigue una estructura de directorios bien definida para mantener un código organizado y modular. A continuación se muestra una descripción general de los directorios principales:

`Front: angular-15-client` 
src/: Contiene el código fuente de la aplicación.
app/: Contiene los componentes principales de la aplicación, este se encuentra dentro de src.
Dentro de app podemos encontrar directorios como:
models/: Define los modelos de datos utilizados en la aplicación.
_services/: Contiene los servicios utilizados para la comunicación con el servidor.
pages/: Contiene las paginas principales del nav en la aplicaion.
_helpers/: Contiene funciones de utilidad y helpers.

assets/: Almacena los recursos estáticos como imágenes y archivos de configuración.
entre otros.

Y tambien encontraremos el index.html, main.ts, styles.css que son nuestros puntos de entrada de la app.

`Back: node-js-server`
app/: Contiene los componentes principales de la aplicación, este se encuentra dentro de src.
Dentro de app podemos encontrar directorios como:
config/: Contiene la configuracion de la seguridad y base de datos utilizados por el servidor.
controllers/: Contiene los controladores que usamos para manejar las solicitudes HTTP entrantes.
middlewares/: Contiene los middlewares donde en ellos se implementa la lógica que se ejecuta antes o después de que una solicitud HTTP llegue a su destino final.
models/: Define los modelos de datos utilizados en la aplicación.
routes/: Se encuentran las rutas que se utilizan para definir las diferentes URL o endpoints a los que se puede acceder en la API.

Y tambien encontraremos el server.js donde estan las configuraciones principales de nuestro servidor.

## Dependencias
La aplicación utiliza las siguientes dependencias de terceros:

Angular v12.0.0: Framework de desarrollo web.
Bootstrap v5.0.0: Framework CSS para estilos y componentes.
SweetAlert2 v11.0.0: Biblioteca para mostrar alertas y diálogos interactivos.
HttpClientModule v12.0.0: Módulo de Angular para realizar peticiones HTTP.
Rxjs": "~7.5.0": Librería para programación reactiva usando obvservables que hacen más fácil la creación de código asincrono o basado en callbacks.

## Configuración del Entorno
Antes de comenzar a desarrollar en la aplicación, asegúrese de tener lo siguiente configurado en su entorno de desarrollo:

Node.js v14.17.0 o superior instalado.
Angular CLI v12.0.0 o superior instalado.
Mongodb "version": "6.0.6" o superior instalado.
Consola de mongo "mongoshell" (opcional).
Editor de código como Visual Studio Code.
Instalación y Configuración

## Siga estos pasos para instalar y ejecutar la aplicación localmente:

Clone el repositorio de la aplicación desde GitHub: git clone https://github.com/AgustinManippa/TFM.git.
Navegue al directorio de la aplicación: cd TFM.
Luego navegue al directorio del front y back de la aplicación(no importa cual de los dos primero):
cd angular-15-client para el front y cd node-js-server para el back.
Ejecute el comando npm install para instalar las dependencias (). (primero en uno y luego en el otro)
Ejecute los comandos para levantar el servidor y el cliente.
## Run
### Node.js Server
Run `node server.js` para una API de exportación de servidor de desarrollo en http://localhost:8080/.

### Angular Client
Run `ng serve --port 8081`. Navegar a `http://localhost:8081/#/`.

Por ultimo abra su navegador web y navegue a http://localhost:8081/#/ para ver la aplicación en ejecución.

## Contacto
Si tiene alguna pregunta o problema relacionado con el desarrollo de la aplicación, no dude en comunicarse conmigo manippaagustin@gmail.com.

## Otros elementos como posibles scrips de bases de datos
Las colecciones se crean automáticamente en MongoDB a través de Mongoose cuando se guardan instancias de los modelos. En resumen, las colecciones "users" ,"roles" y "messages" se crearán automáticamente en la base de datos "agustinTFM_db" cuando se guarden instancias de los modelos User , Role y Messages respectivamente.

¡Gracias por ver el proyecto!