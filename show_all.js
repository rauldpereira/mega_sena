const XlsxPopulate = require('xlsx-populate');


XlsxPopulate.fromFileAsync('./megasena.xlsx')
  .then(workbook => {

    const sheet = workbook.sheet(0);

    const usedRange = sheet.usedRange();

    const rowCount = usedRange.endCell().rowNumber();
    const columnCount = usedRange.endCell().columnNumber();

    for (let row = 1; row <= rowCount; row++) {
      for (let col = 1; col <= columnCount; col++) {
        const cellValue = sheet.cell(row, col).value();
        console.log(`Célula (${row}, ${col}): ${cellValue}`);
      }
    }
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo:', error);
  });
