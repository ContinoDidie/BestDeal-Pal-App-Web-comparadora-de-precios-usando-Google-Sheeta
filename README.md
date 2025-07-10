
# BestDeal-Pal App (Versión para cuenta personal de Gmail)

Este proyecto permite mostrar productos de una hoja de Google Sheets en una app web pública, usando Google Apps Script.

## 🚀 Funcionalidades:
- App Web que muestra productos desde Google Sheets.
- Lectura automática de los siguientes campos:
  - nombre, tienda, precio, enlace, imagen, categoria, disponibilidad.

## 📋 Pasos para Configuración:
1. Abre [Google Apps Script](https://script.google.com) con tu cuenta personal de Gmail.
2. Crea un nuevo proyecto y pega el contenido de `Code.gs`.
3. Conecta tu hoja de Google Sheets con los encabezados correctos.
4. Despliega como Web App:
   - Ejecutar como: tú mismo.
   - Quién tiene acceso: **Cualquiera, incluso anónimo**.
5. Copia la URL pública y colócala en tu archivo `index.html` (en la variable `API_URL`).

## ✅ Estructura de la Hoja de Datos:
| nombre | tienda | precio | enlace | imagen | categoria | disponibilidad |

## 📄 Archivos incluidos:
- `Code.gs`: Script de Apps Script.
- `index.html`: Interfaz web conectada.
- `hoja_ejemplo.csv`: Ejemplo de hoja de datos.
