
# BestDeal-Pal-App (Comparador y Alertas de Precios)

Aplicación web y script en Google Apps Script para comparar precios y recibir alertas automáticas cuando el precio baja.

## 🚀 Funcionalidades:
- Comparación de precios en múltiples tiendas.
- Web App que muestra los datos en JSON.
- Envío automático de emails cuando un producto alcanza el precio objetivo.
- Activadores automáticos para revisiones periódicas.

## 📋 Requisitos:
- Cuenta Google con acceso a Google Sheets y Google Apps Script.
- Hoja de cálculo con las siguientes columnas:

| producto | tienda | precio actual | precio objetivo | correo |

## 📄 Archivos:
- `Code.gs`: Código completo de Google Apps Script.
- `hoja_ejemplo.csv`: Ejemplo de la hoja de cálculo.
  
## ⚙️ Instalación:
1. Crea un proyecto en [Google Apps Script](https://script.google.com).
2. Copia el contenido de `Code.gs` en tu proyecto.
3. Configura tu hoja de cálculo según el ejemplo.
4. Ejecuta la función `forzarPermisos` para otorgar permisos.
5. Crea un activador (trigger) para la función `verificarPrecios` (cada hora o según tu preferencia).

## ✅ Activadores recomendados:
- Basado en tiempo: cada hora o una vez al día.

## 💡 Créditos:
Proyecto de automatización para comparación y alerta de precios, creado con Google Apps Script.
