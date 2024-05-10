# Weather app

[![nasa-retro](https://img.shields.io/badge/Website%20Link-%23f26b47.svg?&style=for-the-badge&logoColor=white)](https://weatherdelta.vercel.app)

## Características

En este repositorio encontrarás el código fuente de una aplicación web desarrollada con Vite y React que utiliza las APIs oficiales de OpenWeather y GeoDB Cities para consultar el pronóstico del tiempo: del día, de las próximas horas y de los 5 días futuros; tanto para tu ubicación como para otras ciudades.

En caso de no querer dar permisos de geolocalización, no te preocupes, podrás buscar ciudades con el buscador o seleccionar una ciudad de la lista. Y tranquilo, es posible añadir y quitar ciudades de la lista para adaptarla a tus gustos.

Además de esto, podrás cambiar los ajustes de la unidad de temperatura entre Fahrenheit y Celsius.

El proyecto está desplegado en Vercel.

## Estructura

La aplicación consta las siguientes partes:

- **/:** En la página principal, encontrarás datos del tiempo actual ya ssea en tu localización o de la ciudad escogida.

- **Hours:** Aquí encontrarás una lista con datos de la prevision meteorológica de las siguientes horas. Cada una se puede expandir para mostrar más detalles.

- **Days:** Aquí encontrarás una cuadrícula con datos de la prevision meteorológica de los siguientes días. Se puede seleccionar cada día para ver los datos en horas.

- **Not Found:** En caso de poner una ruta errónea, se cargará por defecto esta página donde podrás redirigirte a la home.

## Configuración del proyecto

Si te interesa modificar este proyecto, ya sea para practicar o hacer un pull request con cambios o sugerencias, asegúrate de seguir estos pasos:

1. Genera una API Key en la [página oficial de OPEN Weather](https://openweathermap.org) y otra en [la página de Rapidapi](https://rapidapi.com/wirefreethought/api/geodb-cities/). Estas serán necesaria para realizar las peticiones a la APIs.

2. Clona este repositorio a tu computadora local usando el siguiente comando:

3. Accede al directorio del proyecto:

4. Crea un archivo `.env` en el directorio raíz del proyecto y agrega tu API Key de la NASA de la siguiente manera:

```env
VITE_PUBLIC_WEATHER_API_KEY=TU_API_KEY
VITE_PUBLIC_RAPID_GEO_API_KEY=TU_API_KEY
```

5. Instala las dependencias del proyecto ejecutando:

```bash
npm install
```

6. Una vez que hayas configurado el proyecto, puedes iniciar la aplicación localmente utilizando el siguiente comando:

```bash
npm run dev
```

La aplicación estará disponible en localhost en tu navegador.
