# Fluid Boards - Online Store


![image](https://github.com/gchiantore/34685-react/blob/master/public/assets/gif/navegacion.gif)



Este Proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

Fluid es una tienda de productos de deportes extremos tales como windsurf, kitesuf, snowboard, y todo lo relacionado a la indumentaria tecnica para parcticarlos. Nace con la necesidad de acercar la tienda fisica a los potenciales clientes en todas partes del pais. 

Para lo cual se penso en un desarrollo en React JS valiendose de la programacion orientada a complementos que nos brinda la herramienta. 

Por una cuestion de practicidad se utilizo el servicio de Firebase de google como back end.

Los script dispionibles para replicar este proyecto en su computadora son 

## Scripts Disponibles

Para poner este proyecto en marcha, deberia clonar el repositio en su computadora y posteriormente correr el comando para instalar las dependencias.

### `npm install`

Para ejecutarlo el siguiente comando 

### `npm start`

Esto va a correr el proyecto en modo desarrollo abriendolo en 
[http://localhost:3000](http://localhost:3000) en su navegador predeterminado

Para poner en produccion este proyecto correr el siguiente comando 

### `npm run build`

Este pondra el proyecto en produccion en la carpeta `build` \

## Clonar el proyecto en tu equipo

1. Crear una carpeta en donde va a ser alojado el proyecto 
2. verificar que git esta instalado, ejecuntando el siguiente comando 
    ### `git --version` 
3. clonar el proyecto del repositorio de github con el siguiente comando 
    ### `git clone https://github.com/gchiantore/34685-react.git`
4. posicionarse en la carpeta y ejecutar 
    ### `npm install`
5. una vez que el proceso haya terminado solamente debemos ejecutar el script 
    ### `npm start` 

## Dependencias Utilizadas 
[Font Awesome](https://fontawesome.com) : 
para la los Iconos

[React Bootstrap](https://react-bootstrap.github.io) : 
para botones, crousel, cards y contenido del layout y todo lo que tenga que ver con la maquetacion y el css.

[React Router Dom](https://v5.reactrouter.com/web/guides/quick-start) : Para todo manear los enlaces 

Todas esta librerias se encuentra en el package.json por lo que al ejecutar el scrip npm install se instalaran automaticamente. 

## Detalle del proyecto

Basicamente los productos estan divididos en categorias las cuales contienen los productos relacionados, se puede navegar entre categorias, ingresar al detalle de cada producto, en donde se permite seleccionar la cantidad deseada y agregar al carrito de compras. 
