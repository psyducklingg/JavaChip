// This function will create the menu in Google Sheets
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('POS System')
    .addItem('Open POS Interface', 'openPOS')
    .addToUi();
}

// This function will open the POS HTML interface
function openPOS() {
  const html = HtmlService.createHtmlOutputFromFile('POS')
      .setWidth(1000)
      .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'POS System');
}

// This function retrieves the product list from the spreadsheet
function getProducts() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Products');
  const data = sheet.getDataRange().getValues();
  return data.slice(1);
}

// This function records a transaction in the 'Transaction' sheet
function recordTransaction(transData) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Transaction');
  sheet.appendRow([
    new Date(),
    transData.productId,
    transData.productName,
    transData.quantity,
    transData.totalPrice
  ]);
}
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('POS');
}
