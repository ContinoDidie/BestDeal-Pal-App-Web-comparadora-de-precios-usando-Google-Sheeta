
/**
 * BestDeal-Pal-App: Comparador y Alerta Automática de Precios
 * Funciones:
 *  - doGet: Devuelve los productos de la hoja en JSON para la app web.
 *  - verificarPrecios: Envía emails automáticos si el precio baja.
 *  - forzarPermisos: Función auxiliar para activar los permisos.
 */

function doGet() {
  const hoja = SpreadsheetApp.getActive().getSheetByName("Sheet1");
  if (!hoja) {
    return ContentService.createTextOutput("Error: Hoja no encontrada");
  }

  const datos = hoja.getDataRange().getValues();
  const encabezados = datos.shift();
  const productos = datos.map(fila => {
    let producto = {};
    encabezados.forEach((col, i) => {
      producto[col.trim().toLowerCase()] = fila[i];
    });
    return producto;
  });

  return ContentService
    .createTextOutput(JSON.stringify(productos))
    .setMimeType(ContentService.MimeType.JSON);
}

function verificarPrecios() {
  const hoja = SpreadsheetApp.getActive().getSheetByName("Sheet1");
  const datos = hoja.getDataRange().getValues();
  const encabezados = datos.shift();

  datos.forEach((fila, idx) => {
    const producto = {};
    encabezados.forEach((col, i) => {
      producto[col.trim().toLowerCase()] = fila[i];
    });

    const precioActual = parseFloat(producto["precio actual"]);
    const precioObjetivo = parseFloat(producto["precio objetivo"]);
    const correo = producto["correo"];

    if (precioActual <= precioObjetivo && correo) {
      MailApp.sendEmail({
        to: correo,
        subject: `¡Oferta detectada para ${producto["producto"]}!`,
        body: `El producto "${producto["producto"]}" en la tienda "${producto["tienda"]}" ha alcanzado tu precio objetivo: ${precioActual}`
      });
    }
  });
}

function forzarPermisos() {
  const correo = "TU_CORREO@ejemplo.com"; // Sustituye por tu correo para activación inicial
  MailApp.sendEmail(correo, "Prueba de permisos", "Los permisos han sido activados correctamente.");
}
