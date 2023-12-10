# Starter: Vue 3 + TypeScript + Vite

Este _starter_ de Vue.js utiliza Vite para su proceso de desarrollo y creación (_building_). Incluye algunas herramientas esenciales para el desarrollo de front-end, como Vue, Sass, TypeScript, ESLint y Jest. El proyecto también incluye Cypress para pruebas de extremo a extremo. (_end-to-end_)

## Instrucciones

**1.1. Arrancar el proyecto con npm**

```
# Instalar las dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

**1.2. Arrancar el proyecto con yarn**

```
# Instalar las dependencias
yarn

# Iniciar el servidor de desarrollo
yarn dev
```

Una vez que el servidor de desarrollo esté en ejecución, se puede acceder a la aplicación en http://localhost:5173

**2. Para crear un nuevo componente con el script nuevocomponente.sh**

Este script crea un nuevo componente Vue.js en la carpeta `componentes`

```bash
cd src
chmod 700 nuevocomponente.sh
./nuevocomponente.sh [nombre-del-componente]
```

Por ejemplo, para crear un componente llamado `Micomponente`, ejecutaría el siguiente comando:

```
./nuevocomponente micomponente
```

Este comando capitalizaría el nombre del componente (la primera letra será mayúscula) crearía los siguientes archivos en la carpeta `componentes/Micomponente`:

-   `Micomponente.vue`
-   `micomponente.sass`

Adicionalmente crea un test unitario en la carpeta `__tests__`:

-   `__tests__/Micomponente/Micomponente.spec.ts`

**Enrutamiento**
Este proyecto usa vue-router para crear las siguientes rutas con sus respectivos componentes:
| Ruta | Componente |
|---|---|
| `/` | `InicioComponenteVue` |
| `/listado` | `ListadoComponenteVue` |
| `/detalle/:id` | `DetalleComponenteVue` |     

Cada componente está ubicado dentro del directorio /vistas

**Obtención de datos de una API.**
El archivo `apiCalls.ts` define una función asíncrona llamada `initialData` que se utiliza para obtener datos de la API `https://jsonplaceholder.typicode.com`

Primero, verifica si hay un elemento "data" existente en localStorage. Si se encuentra, lo analiza y devuelve los datos JSON.

Si no se encuentra en localStorage, realiza una solicitud de fetch a una URL para obtener datos JSON de marcador de posición de una API externa.

A continuación, analiza la respuesta en un objeto JavaScript, lo almacena en localStorage como una cadena y devuelve los datos.

Almacenar y recuperar de localStorage de esta manera implementa un mecanismo de caché simple. Las llamadas posteriores a `initialData` devolverán los datos en caché sin necesidad de volver a consultarlos de la API, lo que mejora el rendimiento.

La API de fetch se utiliza para realizar la solicitud asincrónica. Al esperar la respuesta y el análisis de datos, la función devuelve una promesa que se resuelve con los datos.

Esto permite que `initialData` se llame asíncronamente desde otro código, siguiendo la sintaxis async/await.

**Gestión del estado** 
El archivo `/store/index.ts` define un objeto (_store_) para la gestión centralizada del estado

El objeto se crea importando la función createStore de Vuex y pasando el estado inicial y el objeto de mutaciones.

El estado inicial es un objeto que contiene los datos que se compartirán entre los componentes de la aplicación.

Las mutaciones son funciones que se utilizan para actualizar el estado.

Una vez creado el objeto _store_, se puede acceder a él desde cualquier componente importándola y utilizando el método store.

Por ejemplo, para obtener el valor del estado "data", se puede utilizar el siguiente código:


```javascript
const data = store.state.data;
```

Esto devolverá el valor del array "data" del estado.

Para actualizar el estado, se puede utilizar una mutación. Por ejemplo, para agregar un nuevo elemento al array "data", se puede utilizar el siguiente código:


```javascript
store.commit("setData", {
  data: [...data, { id: 1, name: "Nuevo Item" }],
});
```

Esto agregará un nuevo elemento al array "data" con el ID 1 y el nombre "New item".

La gestión de estado centralizada con Vuex facilita el desarrollo de aplicaciones complejas, ya que permite compartir datos entre los componentes de la aplicación.


## Listado de scripts

| Script      | Descripción                                                                                                                                                                                                                                                                                                           |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **prepare** | Instala las dependencias necesarias para el desarrollo del proyecto, incluyendo Husky y Conventional Commits. Se ejecuta automáticamente antes de ejecutar otros scripts que dependen de estas dependencias.                                                                                                          |
| **dev**     | Inicia el servidor de desarrollo de Vite en **localhost:5173**. Vite es un compilador de JavaScript y CSS rápido y moderno que se utiliza para compilar aplicaciones Vue.js. El servidor de desarrollo de Vite proporciona una interfaz de desarrollo interactiva y optimizada para el desarrollo de aplicaciones web |
| **test**    | Ejecuta las pruebas unitarias del proyecto utilizando Vitest. Vitest es un marco de pruebas unitario alternativo para aplicaciones Vue.js que es similar a Jest, otro marco de pruebas popular.                                                                                                                       |
| **test:w**  | Ejecuta las pruebas unitarias del proyecto en modo watch. Esto significa que las pruebas se ejecutarán automáticamente cada vez que se cambie el código.                                                                                                                                                              |
| **test:c**  | Ejecuta las pruebas unitarias del proyecto y genera un informe de cobertura de código. Esto permite ver qué partes del código se han probado y qué partes no.                                                                                                                                                         |
| **lint** | Verifica y corrige errores de sintáxis
| **build**   | Compila el código fuente del proyecto en un archivo bundle.js que se puede utilizar para distribuir la aplicación web.                                                                                                                                                                                                |
| **preview** | Inicia una vista previa de la aplicación compilada. Esto permite ver cómo se verá la aplicación en un navegador web sin tener que desplegarla en un servidor.                                                                                                                                                         |
| **cypress** | Ejecuta las pruebas de extremo a extremo del proyecto utilizando Cypress. Cypress es un marco de pruebas de extremo a extremo que permite probar la interacción de los usuarios con la aplicación web.                                                                                                                |
| **e2e**     | Ejecuta las pruebas de extremo a extremo del proyecto y la aplicación en modo de desarrollo simultáneamente. Esto permite ver cómo se comportan las pruebas en tiempo real mientras se desarrolla la aplicación.                                                                                                      |

## Tests Unitarios

[HelloWorld.spec.ts](src/__tests__/HelloWorld.spec.ts)

**El código seleccionado contiene pruebas para un componente Vue utilizando Vitest.**

Primero, se importa la función `mount` de Vue Test Utils para montar componentes y se importa el componente que se está probando: HelloWorld.vue

A continuación, se definen dos pruebas dentro de un bloque `describe`.

La primera prueba renderiza el componente con un prop y verifica que el valor del prop esté contenido en el texto renderizado.

La segunda prueba verifica que hacer clic en el botón incrementa un contador. Monta el componente, verifica que el texto inicial del botón contenga "count is 0", y toma una captura de pantalla. Luego, hace clic en el botón, verifica que el texto ahora contenga "count is 1", y toma otra captura de pantalla. Esto se repite para hacer clic en 2 y 3, verificando el texto y las capturas de pantalla cada vez.

Esto está probando que el componente se renderiza como se espera inicialmente y que una parte interactiva del componente: el clic del botón, actualiza correctamente el recuento mostrado. Las capturas de pantalla también sirven como una prueba de regresión para garantizar que los cambios futuros no rompan la salida renderizada.

## Tests end-to-end

[helloworld.cy.ts](cypress/e2e/helloworld.cy.ts)
El código seleccionado contiene una prueba de extremo a extremo para un componente Vue utilizando Cypress.

Define un bloque `describe` para probar la "especificación de plantilla". Dentro de este bloque hay un bloque `it` para probar la renderización.

Primero, visita la URL de la aplicación, luego verifica que el elemento del título esté visible.

Luego, desea hacer clic repetidamente en el botón de incremento n veces, donde n = 10. Utiliza un bucle `for` para iterar i de 0 a 9.

En cada iteración, hace clic en el botón y luego afirma que el texto del botón es igual a "count is i + 1".

Esto prueba que hacer clic en el botón incrementa correctamente el recuento que se muestra haciendo clic repetidamente en el botón.

Los aspectos clave son:

-   Utilizar Cypress para probar la renderización completa de la aplicación y las interacciones
-   Realizar clics repetidos para incrementar a través de todos los recuentos
-   Afirmar el texto actualizado del botón en cada iteración

## Listado de los componentes

1. **Vue.js:** El marco central para crear interfaces web interactivas.
2. **Vite:** Una herramienta de compilación moderna que proporciona compilaciones de desarrollo y producción rápidas.
3. **Sass:** Un preprocesador CSS que mejora las capacidades de CSS.
4. **TypeScript:** Un superconjunto de JavaScript que agrega soporte opcional para tipos estáticos.
5. **ESLint:** Un analizador de código con opiniones para JavaScript y TypeScript.
6. **Jest:** Un marco de pruebas unitarias popular para JavaScript.
7. **Cypress:** Un marco de pruebas de extremo a extremo potente para aplicaciones web.
8. **Vitest:** Un corredor de pruebas alternativo para aplicaciones Vue.
9. **Husky** es una herramienta de desarrollo que agrega Git hooks a un proyecto. Los Git hooks son scripts que se ejecutan antes o después de ciertos eventos de Git, como la creación de un commit o la fusión de un repositorio.

En el proyecto, Husky se utiliza para dos propósitos principales:

-   **Validar los mensajes de commit**. Husky se configura para utilizar **commitlint**, una herramienta que verifica que los mensajes de commit cumplan con una convención específica. En este caso, la convención utilizada es **Conventional Commits**.
-   **Ejecutar scripts antes de realizar un commit**. Husky se puede utilizar para ejecutar scripts antes de que se realice un commit. En este caso, el script se utiliza para ejecutar ESLint y Jest para asegurar la calidad del código. **Conventional Commits** es una convención para escribir mensajes de commit en Git. La convención define una estructura específica para los mensajes de commit que facilita su comprensión y seguimiento. Los mensajes de commit de Conventional Commits tienen la siguiente estructura:

```
<tipo>[alcance opcional]: <descripción> [cuerpo opcional] [footer opcional]
```

El **tipo** del commit indica el tipo de cambio que se realizó. Los tipos comunes de commits incluyen:

-   **feat:** Agregar una nueva función o característica.
-   **fix:** Corregir un error.
-   **docs:** Actualizar la documentación.
-   **refactor:** Mejorar el código sin cambiar su funcionalidad.
-   **perf:** Mejorar el rendimiento del código.
-   **style:** Cambiar el estilo del código sin cambiar su funcionalidad.
-   **test:** Agregar o actualizar las pruebas.

El **alcance opcional** del commit proporciona más contexto sobre el cambio. El alcance puede ser un módulo, una función, una clase, etc.

La **descripción** del commit proporciona una breve descripción del cambio.

El **cuerpo opcional** del commit proporciona más detalles sobre el cambio.

El **footer opcional** del commit puede contener información adicional, como el número de la tarea o el enlace a un problema.

El uso de Conventional Commits tiene varios beneficios, entre los que se incluyen:

-   **Mejora la legibilidad del historial del repositorio**.
-   **Facilita la colaboración entre desarrolladores**.
-   **Ayuda a generar automáticamente un CHANGELOG**.

10. **Dockerfile**

Un Dockerfile es un archivo de texto que describe cómo crear una imagen de Docker. Las imágenes de Docker son paquetes de software listos para usar que se pueden utilizar para crear contenedores.

El Dockerfile del proyecto utiliza la imagen de base **node:18-alpine** para crear una imagen que incluye todas las herramientas necesarias para desarrollar aplicaciones Vue.js.

El Dockerfile tiene los siguientes pasos:

-   **FROM:** Especifica la imagen de base que se utilizará para crear la imagen personalizada.
-   **RUN:** Ejecuta un comando en la imagen de base. En este caso, el comando se utiliza para instalar las herramientas necesarias.
-   **COPY:** Copia los archivos del proyecto a la imagen personalizada.
-   **ENTRYPOINT:** Especifica el comando que se ejecutará cuando se inicie la imagen personalizada. En este caso, el comando se utiliza para iniciar el servidor de desarrollo de Vite.

**Devcontainer**

Un Devcontainer es una configuración de desarrollo que se utiliza para crear un entorno de desarrollo aislado en un contenedor de Docker.

El Devcontainer del proyecto utiliza el archivo **.devcontainer.json** para configurar el entorno de desarrollo.

El archivo **.devcontainer.json** tiene los siguientes campos:

-   **name:** El nombre del Devcontainer.
-   **image:** La imagen de Docker que se utilizará para crear el Devcontainer.
-   **extensions:** Las extensiones de Visual Studio Code que se instalarán en el Devcontainer.
-   **settings:** Las configuraciones de Visual Studio Code que se aplicarán al Devcontainer.

En este caso, el Devcontainer utiliza la imagen de Docker **node:18-alpine** y las siguientes extensiones de Visual Studio Code:

-   **ESLint**
-   **Jest**
-   **Vitest**

El Devcontainer también aplica las siguientes configuraciones de Visual Studio Code:

-   **Editor.formatOnSave:** Se establece en true para formatear automáticamente el código al guardar.
-   **eslint.enable:** Se establece en true para habilitar ESLint.
-   **jest.enable:** Se establece en true para habilitar Jest.
-   **vitest.enable:** Se establece en true para habilitar Vitest.

**Autor**: Carlos Marchena
**Licencia**: [Creative Commons BY 4.0 Atribución 4.0 Internacional](https://creativecommons.org/licenses/by/4.0/deed.en)
[Detalle licencia](https://creativecommons.org/licenses/by/4.0/legalcode.es)
