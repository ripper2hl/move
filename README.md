
# Move XML

![move ](move.svg)


# Objetivo

Mover archivos con un tipo de extensión que se encuentran
dentro de una estructura de carpetas a una ruta predeterminada sin anidarlos dentro de otras carpetas.

El programa tiene un rendimiento de **70.3870967741** archivos por segundo, moviendo en la red local.

# Uso

* Obtener el ejecutable para tu plataforma

* En la misma ruta del ejecutable crear un archivo `configuration.json` con la siguiente estructura:

```json
{
  "from" : "carpeta donde estan los archivos",
  "to" : "carpeta a donde se copiaran los archivos",
  "suffix" : "extension"
}
```

Ejemplo de un archivo Windows:

```json
{
  "from" : "C:\\test\\",
  "to" : "C:\\Users\\some\\move\\",
  "suffix" : "xml"
}
```
# Recomendaciones

* Lanzar la ejecución desde el CMD, Bash o shell de tu sistema operativo para monitorear el progreso.

* Descargar siempre el ultimo ejecutable almancenado en los jobs de Jenkins
