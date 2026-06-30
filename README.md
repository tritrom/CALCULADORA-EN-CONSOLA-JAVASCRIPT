# Calculadora JavaScript

## DOCUMENTACIÓN TÉCNICA

### 1. Descripción

Aplicación de consola en JavaScript que permite realizar operaciones matemáticas básicas (suma, resta, multiplicación y división) desde la consola del navegador.

### 2. Estructura del código

- **Variables**: Se usan `let`.
  - `historial`: arreglo que almacena las operaciones realizadas.

- **Funciones**:
  - `sumar(a, b)` - Retorna a + b
  - `restar(a, b)` - Retorna a - b
  - `multiplicar(a, b)` - Retorna a * b
  - `dividir(a, b)` - Retorna a / b. Si b es 0: muestra "Error" en consola y alert()
  - `calculadora()` - Modo interactivo con prompt(). Si la entrada no es válida: alert()

- **Arreglos**:
  - `historial`: guarda cada operación como string con `push()`.

### 3. Conceptos aplicados

- Variables (`let`)
- Funciones con parámetros y retorno
- Condicionales (`if`)
- Arreglos y método `push()`
- `console.log()` para salida en consola
- `prompt()` para entrada de datos
- `alert()` para errores

### 4. Manejo de errores

- División por cero: `alert("¡Error! revisar y reintentar.")`
- Entrada no numérica en `calculadora()`: `alert("¡Error! revisar y reintentar.")`

---

## FUNCIONALIDADES

- Suma, resta, multiplicación y división
- Validación de división por cero (con alerta de error)
- Validación de entrada en modo interactivo (con alerta de error)
- Historial de operaciones
- Modo interactivo con `calculadora()`

## ARCHIVOS

- `app.js` - Código principal
- `index.html` - Página para cargar el script

## CÓMO USAR

1. Abrir `index.html` en el navegador
2. Presionar F12 y abrir la pestaña Consola
3. Usar las funciones directamente:

```
sumar(10, 5)
restar(10, 5)
multiplicar(10, 5)
dividir(10, 5)
historial
```

O ejecutar el modo interactivo:

```
calculadora()
```

## FUNCIONES

| Función | Descripción |
|---------|-------------|
| `sumar(a, b)` | Suma dos números |
| `restar(a, b)` | Resta dos números |
| `multiplicar(a, b)` | Multiplica dos números |
| `dividir(a, b)` | Divide dos números (alert si b es 0) |
| `calculadora()` | Modo interactivo con prompt y validación |
| `historial` | Variable con el registro de operaciones |

## EJEMPLOS DE USO

```
> sumar(8, 3)
8 + 3 = 11

> restar(10, 4)
10 - 4 = 6

> dividir(5, 0)
Error: No se puede dividir por cero
(aparece alert: "¡Error! revisar y reintentar.")

> historial
["8 + 3 = 11", "10 - 4 = 6"]

> calculadora()
(modo interactivo con ventanas emergentes)
```
https://github.com/tritrom/CALCULADORA-EN-CONSOLA-JAVASCRIPT