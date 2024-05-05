# Weather app

[Actualmente en desarrollo]

En este repositorio encontrarás el código fuente de una aplicación web desarrollada con Vite y React que utiliza las APIs oficiales de OpenWeather para consultar el pronóstico del tiempo del día, de las próximas horas y de los 5 días futuros; tanto para tu ubicación como para otras ciudades.

## Reflexión del proyecto

En cuanto se abra, se pide la localización y se guarda en un objeto:
```javascript
const currentPosition = {
  label: 'My Location',
  value: `${crd.latitude} ${crd.longitude}`,
}
```
1. Tenemos current position.
  selectedCity = currentPosition (cuando carga la página).
  En la lista se resaltará My Location.
  Independientemente de la page, se hará la petición a selectedCity.
    Poner un spinner mientras carga.
    Si falla la petición poner un aviso de fallo.
  El nombre de la ciudad <h1> se sacará del data.name de la petición.
2. No tenemos current position.
  selectedCity será una ciudad al azar de la lista de favs. Si no hay favs selectedCity será Madrid.
  Independientemente de la page, se hará la petición a selectedCity.
    Poner un spinner mientras carga.
    Si falla la petición poner un aviso de fallo.
  El nombre de la ciudad <h1> se sacará del data.name de la petición.

-------
!! Arreglar/ investigar bug cuando carga la web por 1ª vez y pilla current location se ve el de Madrid 
feature: browser history [done]
1. cuando se recarga debe quedarse/ buscar el tiempo del :id? [Sí]
2. Cómo hacer para que al volver para atrás en el browser history carge los datos del anterior destino?
  Si ya se han cargado anteriormente, se han guardado en local storage, se pueden sacar de ahí con sólo el label.
  Sin embargo, si jsuto se acaba el timestamp... debería buscarse de nuevo por lo que se necesita el value.
  SOLUCIÓN: guardar también el value en el local storage y en caso de que el timestamp haya terminado, se haga fetch de la data.

- Los enlaces del search menu tienen Link to /today. SOLUCIONAR para que no sólo lleve a today sino que funcione en hours y days. Debe cambiar la url. 
- Qué pasa si se hace click desde una page distinta a esas 3?


## TODO LIST
1. Petición Today [✅]
2. Page Days [ ]
3. Page Hours [ ]
4. Cambiar fondo según temperatura. Establecer un Default. [✅]
5. Arreglar scroll searchMenu. Se tiene que ver las opciones del buscador. [✅]
6. Pensar en geolocalización en un tren (navigator.geolocation.watchPosition). [ ]

