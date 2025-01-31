---
title: Course Node.js / Vue.js
description: 'Información sobre Node.js para el certificado de profesionalidad de Desarrollo de Aplicaciones con Tecnologías Web'
dates: 04/2025
---

- [Fundamentos de Node.JS](#fundamentos-de-nodejs)
  - [Entorno de ejecución](#entorno-de-ejecución)
  - [Características: Node en la práctica](#características-node-en-la-práctica)
  - [Historia](#historia)
    - [Creación de Node.js](#creación-de-nodejs)
    - [Evolución de NodeJS](#evolución-de-nodejs)
  - [Node.js: utilización](#nodejs-utilización)
- [Preparación del Entorno de Desarrollo](#preparación-del-entorno-de-desarrollo)
  - [Creación de un proyecto con Node.js, TS, ESLint y Prettier \& Vitest (como herramienta de testing)](#creación-de-un-proyecto-con-nodejs-ts-eslint-y-prettier--vitest-como-herramienta-de-testing)
    - [Primera demo en Node.js](#primera-demo-en-nodejs)
    - [Código bloqueante](#código-bloqueante)
- [El Event Loop](#el-event-loop)

## Fundamentos de Node.JS

Node es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.

Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente.

El ecosistema de paquetes de Node, npm, es el ecosistema mas grande de librerías de código abierto en el mundo.

### Entorno de ejecución

Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.

- V8:
  - Motor de JavaScript de código abierto
  - Escrito en C++
  - Define la sintaxis de JavaScript
  - Como funciona:
    - Compila el código JavaScript a código máquina
    - Ejecuta el código máquina
- Node, más allá de V8:
  - Proporciona módulos y APIs para interactuar con el sistema operativo
    - Mecanismos para interactuar con el exterior
    - Librería estándar (consola, ficheros, red, etc.)
    - Utilidades (intérprete, depurador, paquetes, etc.)

### Características: Node en la práctica

- Plataforma de desarrollo de software creada en 2009
- JavaScript en el lado del servidor
- Basado en la máquina virtual de Chrome V8: escrito en C++ = muy rápido
- Multiplataforma (Windows, Macintosh, Linux, etc.)
- Aunque es una marca registrada de Joyent, es open source
- Asíncrono y orientado a eventos (no bloqueante)
- Ideal para aplicaciones que consumen datos en tiempo real y que se ejecutan a través de dispositivos distribuidos
- Lo usan muchas empresas (Walmart, PayPal, Yahoo, LinkedIn, eBay, Uber, etc.)

### Historia

- Origen del lenguaje JS
- 1995 - Netscape incorpora un JS desarrollado por Brendan Eich
  - Objetivo: validación de formularios en cliente (Respuesta a la lentitud de las conexiones)
- 1996 – Microsoft desarrolla lenguajes de Script similares
  - VBScript
  - JScript, que incorpora a Internet Explorer
- 1997 – Aparece ECMAScript como estándar respaldado por la European Computer Manufacturers Association

- 1988 - OWA incorpora XMLHttp (AJAX), desarrollado por Alex Hopmann
- 1999 - ES3, primer estándar de ECMAScript utilizado mayoritariamente por los navegadores
- 2004 - GMail utiliza JS incorporando AJAX masivamente
- 2005 - John Resig crea JQuery
- 2006 - Aparece NodeJS, JS en el servidor, de mano de Ryan Dahl
- 2009 - Google Chrome incorpora V8, motor de JS de NodeJS
- 2010 - NPM, gestor de paquetes de NodeJS
- 2011 - ES5, nuevo estándar de ECMAScript
- 2012 - Windows 8 incorpora JS como lenguaje nativo
- 2014 (2015) - Nuevo estándar ES6 / ES2015 marca un punto de inflexión en el lenguaje

![Time line de los primeros años de JS, hasta 2014](./assetts/timeline-js.png)

#### Creación de Node.js

Tiene su origen en un proyecto de Ryan Dahl y sus colaboradores en la empresa Joyent, que fue presentado en una conferencia en la JSConf de 2009.
<https://youtu.be/ztspvPYybIY>
Objetivo: escribir aplicaciones muy eficientes en E/S con el lenguaje dinámico más rápido (v8) para soportar miles de conexiones simultáneas
Planteamiento: sin complicaciones innecesarias

- Concurrencia sin paralelismo
- Asincronía apoyándose en Eventos y Callbacks
- Lenguaje sencillo y muy extendido: JavaScript
- API muy pequeña y muy consistente

¿Por qúe JS?

> JavaScript has certain characteristics that make it very different than other dynamic languages, namely that it has no concept of threads. Its model of concurrency is completely based around events
> Ryan Dahl <https://youtu.be/ztspvPYybIY>

En la búsqueda de una comunicación asíncrona para optimizar las tareas ligadas a I/O (I/O bound tasks) se pensó en un sistema de socket servers (algo similar a nano or microservices) denominados NODOS, comunicándose entre si con baja latencia y alto rendimiento.

La necesidad de un **event loop** para organizar estos nodos llevo a sustituir Ruby, usado en la implementación inicial, por **JS V8**, que ya disponía del event loop.

#### Evolución de NodeJS

- La empresa [Joyent](https://www.joyent.com/) trata de aprovechar su propiedad de la marca registrada NodeJS y dirigir su desarrollo y su ritmo de actualización
- En 2014, parte de la comunidad responde con un fork denominado **IO.JS** desarrollado bajo un modelo open governance
  - Su desarrollo es muy activo con liberaciones semanales llegando pronto hasta la 3.x
  - Paralelamente, al cabo de dos años, Joyent lanza la versión 0.12.x que recupera la paridad con las características de IO.JS
- En septiembre 2015 se produce la **reconciliación** entre ambos grupos con una nueva versión de Node.JS, que al adoptar el versionado semántico, se numera como 4.0.0

### Node.js: utilización

- Creación rápida de servidores HTTP o TCP ….
- Aplicaciones Web con frameworks como Express (<http://expressjs.com/es/>) y plantillas como las de Jade/Pug <(http://jade-lang.com/>)
- Aplicaciones en tiempo real, como los chats
- Servicios Web e.g. Restify (<http://mcavage.me/node-restify/>)
- Conexión con bases de datos (MySQL, MongoDB, SQLite)
- Scripting y conversiones en local o en servidor
- Manejo de flujos binarios, e.g. para Web RTC (<http://lynckia.com/>) o para streaming de audio y video
- Herramientas de desarrollo, e.g. Grunt, Gulp, Yeoman
- Herramientas de testing, e.g. Mocha, Jasmine, Karma
- Herramientas de análisis, e.g. JSHint, JSLint, ESLint
- Herramientas de documentación, e.g. JSDoc, YUIDoc
- Dispositivos diversos: IoT, Raspberry Pi, Arduino, e.g. Johnny-Five (<http://johnny-five.com/>).

## Preparación del Entorno de Desarrollo

- Git <https://git-scm.com/> y una cuenta en un hosting de repositorios (GitHub) <https://github.com/>
- Editor de código: Visual Studio Code <https://code.visualstudio.com/>
- Terminal (Linea de commandos)
- Administrador de versiones de Node.js: NVM <https://github.com/coreybutler/nvm-windows>
- Node.js y el gestor de paquetes npm <https://nodejs.org/es/>

Instalación de Node.js y npm, después de instalar NVM:

```bash
nvm install 23.6.0
nvm install latest
nvm list
nvm use 23
```

- Nodemon <https://nodemon.io/>: `npm install -g nodemon`
- Alternativa actual `node -w`

### Creación de un proyecto con Node.js, TS, ESLint y Prettier & Vitest (como herramienta de testing)

- Creación de un proyecto con Node.js: `npm init -y`
- Instalación de TypeScript <https://www.typescriptlang.org/>: `npm install -D typescript`
- Instalación de Prettier <https://prettier.io/>: `npm install -D prettier`
- Configuración de Prettier en package.json
- Instalación de ESLint <https://eslint.org/>: `npm init @eslint/config@latest`
- Configuración de TypeScript: `npx tsc --init`
- Ajustes de la configuración de TypeScript en `tsconfig.json`
- Instalación de Vitest <https://vitest.io/>: `npm install -D vitest`
- Configuración de Vitest en `vitest.config.js` y `tsconfig.json`
- Incorporación de scripts en `package.json`

#### Primera demo en Node.js

```typescript
console.log('Hello World');
```

#### Código bloqueante

La operaciones entrada/salida (I/O o E/S) bloqueantes impactan en el rendimiento debido a la alta latencia de ese tipo de operaciones

Latencia de operaciones I/O

| Medio    | Latencia (ciclos) |
| -------- | ----------------- |
| Cache L1 | 3                 |
| Cache L2 | 14                |
| RAM      | 250               |
| Disco    | 41.000.000        |
| Red      | 240.000.000       |

El modelo tradicional de programación emplea programación secuencial
Las operaciones I/O bloquean el flujo de ejecución del programa que las invoca impidiendo que la siguiente instrucción comience hasta que la anterior haya terminado.

```typescript
// Código bloqueante
```

## El Event Loop

Arquitectura del core refleja el objetivo principal del proyecto NodeJS: **Eficiencia en la E/S**, es decir, escribir aplicaciones muy eficientes con un modelo de operaciones E/S Sin bloqueo y orientado a eventos.

Ver JS Asíncrono.md

- Multiplicidad de tareas
  - Paralelismo
  - Concurrencia sin paralelismo
    - Medida del tiempo
  - Concurrencia y código bloqueante
- Asincronía en JS
  - Asincronía, tiempo y ejecución en segundo plano
  - Event Loop

JS emplea concurrencia sin paralelismo, es decir, la capacidad de ejecutar múltiples tareas de forma concurrente, pero no simultánea. Esto se consigue mediante la programación asíncrona, que permite que una tarea se ejecute en segundo plano mientras el programa principal sigue su ejecución.

Para implementar la asincronía, JS emplea el Event Loop, un bucle de eventos que se encarga de gestionar las tareas asíncronas y de mantener la ejecución del programa principal.

![Event Loop de Node](./assetts/event-loop.png)

Este modelo da muy buena respuesta mara gestionar un elevado numero de operaciones I/O de forma concurrente (I/O Bound Applications)
No es lo mas adecuado para operaciones CPU-intensive (CPU Bound Applications)
