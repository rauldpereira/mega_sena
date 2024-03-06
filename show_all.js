const XlsxPopulate = require('xlsx-populate');

XlsxPopulate.fromFileAsync('./megasena.xlsx')
  .then(workbook => {

    const sheet = workbook.sheet(0);

    const usedRange = sheet.usedRange();

    const rowCount = usedRange.endCell().rowNumber();

   
    const columnH = 'H'.charCodeAt(0) - 'A'.charCodeAt(0) + 1;

    for (let row = 8; row <= rowCount; row++) {
      let rowData = ''; 
      for (let col = 1; col <= columnH; col++) { 
        const cellValue = sheet.cell(row, col).value();
        rowData += `${cellValue}\t`; 
      }
      console.log(rowData.trim()); 
    }
})
