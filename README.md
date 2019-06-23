# “SocialCipherApp”👋

- Introducción
- Descripción del Proyecto
  - Usuarios
  - Objetivos
  - Resolución de Problemas
- Proceso de Diseño
  - Prototipado
  - Funcionalidad
- Pre-requisitos
- Instalación
- Herramientas de desarrollo
- Autor
- Agradecimientos
     

## Introducción👩‍🏫

“SocialCipherApp”, es un aplicación web que permite codificar y decodificar textos, ya sea una palabra, oraciones o frases, mediante la implementación del “Cifrado Cesar”, técnica de cifrado usada por el emperador romano Julio César para enviar órdenes secretas a sus generales en los campos de batalla.
Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.
Por ejemplo, si usamos un desplazamiento (offset) de 3 posiciones:
- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

## Descripción del proyecto🧐

### Usuarios de producto o Público Objetivo

Esta App está dirigida a adolescentes y jóvenes en etapa escolar. 

### Objetivos de los usuarios

Esta App fue desarrollada con fines recreativos, y pensando en la nostalgia escolar, en la comunicación entre compañeros(as) mediante el uso de “papelitos” y/o mensajes de texto, los cuales podían ser vistos o interceptados nuestros pares, profesores o padres.

### Resolución de problemas que propone este producto

Esta app proporciona al usuario la alternativa de escribir un mensaje privado para una segunda persona, ya que no puede ser entendido a simple vista por otra persona, y no puede ser descifrado por alguien que no conozca el mecanismo de encriptamiento. 
El mensaje solo podrá ser decodificado por la persona que el emisor estime, ya que el receptor aparte de tener el mensaje (codificado) deberá estar en conocimiento del número de desplazamiento u offset, que cumplirá a su vez la función de código de encriptamiento.

## Proceso de Diseño🖌️

### Prototipado

#### Flujo Preliminar

En la imagen siguiente se muestra el primer diseño de flujo.
Este muestra una página de inicio en común donde se entregan dos opciones que llevan a páginas diferentes.
Para volver a elegir una de las opciones, se debe volver al inicio.

![flujo1](https://i.ibb.co/7rLJMBN/flujo1.jpg)


#### Prototipo inicial

En la imagen siguiente se muestra el diseño de un prototipo de la interfaz siguiendo la diagramación de flujo de la imagen anterior.
Este diseño considera 3 pantallas diferentes, una de inicio, una para la función codificar y otra para decodificar.

![prototipo1](https://i.ibb.co/x3vdRCt/PROTOTIPO1.jpg)

#### Prototipo Corrección 

La siguiente imagen muestra una correción al prototipo de la interfaz anterior.
En esta versión se agrega un casillero para el ingreso de un valor "offset".

![prototipo2](https://i.ibb.co/wpbd6y6/PROTOTIPO2.jpg)

#### Flujo final

En la siguiente imagen se muestra el desarrollo de flujo final.
Se opta por un flujo lineal, pensando en ser desarrollado en una sola pantalla.

![flujofinal](https://i.ibb.co/xgLTL6n/flujo2.jpg)

#### Prototipo final

En la versión final se opta por el desarrollo de una sola pantalla en la cual se entregan las opciones de codificar y/o decodificar. Y la implementaciòn de los elementos offset, input y output de texto, para uso común.

![prototipofinal](https://i.ibb.co/HhxbVHX/PROTOTIPO3.jpg)


### Funcionalidad

La Interfaz de la App es sencilla e intuitiva en su funcionamiento.
Cuenta con un cuadro que permite el ingreso del texto para codificar y/o decodificar.
Un casillero que permite ingresar un número de desplazamiento (“offset”).
Un botón para activar la función ENCRIPTAR, que cifra el mensaje.
Un botón para activar la función DESENCRIPTAR, que descifra el mensaje.
Un segundo cuadro de texto donde se visualiza el resultado de la acción solicitada (codificar o decodificar).


## Pre-requisitos📋

Navegador Web.
Acceso a Internet.

## Instalación🔧

No requiere Instalación.

## Herramientas de desarrollo🛠️

Microsoft Visual Studio.

## Autor✒️

Natalia Jiménez.

## Agradecimientos🎁

- Squad #3 ❤️
- Lupita Agustina 🐾
- Coaches 👩‍🚀  










