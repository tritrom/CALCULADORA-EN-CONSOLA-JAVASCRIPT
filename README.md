# Calculadora JavaScript

Aplicación de consola en JavaScript para realizar operaciones matemáticas básicas. Se ejecuta en el navegador.

## Funcionalidades

- Suma, resta, multiplicación y división
- Validación de división por cero (con alerta de error)
- Validación de entrada en modo interactivo (con alerta de error)
- Historial de operaciones
- Modo interactivo con `calculadora()`

## Archivos

- `app.js` - Código principal
- `index.html` - Página para cargar el script

## Cómo usar

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

## Funciones

| Función | Descripción |
|---------|-------------|
| `sumar(a, b)` | Suma dos números |
| `restar(a, b)` | Resta dos números |
| `multiplicar(a, b)` | Multiplica dos números |
| `dividir(a, b)` | Divide dos números (alert si b es 0) |
| `calculadora()` | Modo interactivo con prompt y validación |
| `historial` | Variable con el registro de operaciones |
