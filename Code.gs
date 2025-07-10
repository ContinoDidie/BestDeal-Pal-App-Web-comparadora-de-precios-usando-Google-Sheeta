
function doGet() {
  const hoja = SpreadsheetApp.getActive().getSheetByName("Sheet1");  // Cambia si tu hoja tiene otro nombre
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
