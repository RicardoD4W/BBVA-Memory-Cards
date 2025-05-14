# Enunciado

Queremos que crees una app móvil web progresiva basada en el juego de “Memory Cards”. Si no lo conoces no pasa nada, a continuación te detallamos el funcionamiento del mismo.

La aplicación debe tener una primera vista “home” en la que el usuario introducirá su nombre para registrarse y empezar el juego. Esta primera vista deberá ser la ruta por defecto y cualquier acceso a una ruta que no exista debería redirigir a dicha vista.

La vista “home” contendrá al menos un campo de texto para introducir el nombre del jugador y un botón para iniciar el juego. El botón validará que se ha introducido un nombre de usuario válido antes de iniciar el juego.

Una vez se ha creado el usuario, se transiciona a la vista de juego “game” siendo ésta una nueva ruta dentro de la app.

La vista “game” mostrará el nombre del jugador, los puntos que tiene, la selección de nivel de dificultad “bajo”, “medio”, “alto” y un botón para comenzar el juego.

Cada vez que se haga click en el botón comenzar, se mostrarán 9 cuadros donde aparecen números del 1-9 sin repetirse y en posiciones aleatorias. El valor de cada cuadro aparecerá visible en función del nivel de dificultad durante N segundos.

| Nivel de dificultad | Tiempo | Puntos |
| ------------------- | ------ | ------ |
| Bajo                | 10s    | 10     |
| Medio               | 5s     | 20     |
| Alto                | 2s     | 30     |

Una vez se cumpla el tiempo, los números desaparecen, y el jugador tiene que seleccionar la posición donde se encuentra el número que se le pide. Si acierta, el fondo de la casilla se marcará en verde, se actualizarán los puntos y el juego continuará generando otro cuadro con otros nuevos números. Si por el contrario falla, la casilla mostrará el número que contiene con fondo rojo y la partida terminará.

# Video ejemplo

![Video de ejemplo](https://bbvaengineering.github.io/challenges/assets/images/memory.gif)

La aplicación deberá funcionar offline, es decir, si en nuestro dispositivo activamos el modo avión y volvemos a la app tras haberla abierto al menos una vez, se podrá acceder a la misma sin problemas.

La aplicación deberá estar desplegada y disponible públicamente.

# Requisitos

- La aplicación deberá contener funcionalmente, como mínimo, las instrucciones detalladas en el enunciado.
- El código debe ser público.
- Se deberán realizar tests unitarios de las vistas y de los componentes de la aplicación.
- Se podrá utilizar cualquier infraestructura de alojamiento pública como, por ejemplo, Vercel, Netlify o Github Pages.
- Se debe subir un fichero `README.md` al repositorio con las instrucciones para hacer funcionar la aplicación en local. Puedes añadir cualquier otro dato que consideres necesario.

# Otras consideraciones

Se puede utilizar cualquier herramienta, librería o framework, dentro del ecosistema de JavaScript.

Si crees que lo anterior no es suficiente y quieres demostrarnos todo lo que sabes, se valorarán muy positivamente otros puntos como:

- La calidad, claridad y limpieza del código.
- El uso de componentes reutilizables.
- La realización de otro tipo de tests.
- Herramientas de análisis estático y formateo de código que mejoren la experiencia del desarrollador.
- Mejoras en el flujo y la metodología de desarrollo, construcción y despliegue.
- Otras características que consideres importantes para una aplicación web progresiva.

# Entregable

Envíanos un enlace al repositorio en el que se encuentre el código de la aplicación y un enlace con la aplicación desplegada.

# Bonus points

Si crees que te ha sabido a poco el ejercicio, por aquí te dejamos algunas ideas para mejorarlo, aunque puedes inspirarte en otras aplicaciones similares. ¡Valoraremos muy positivamente cualquier característica adicional! Y… ¡no te olvides de documentar las nuevas funcionalidades!

- Incluir un contador de tiempo indicando los segundos restantes para visualizar los números.
- Incluir vibración en el dispositivo cada vez que el usuario pierda.
- Aumentar la complejidad del juego recordando 3 números en vez de 1.

**¡Buena suerte!**
