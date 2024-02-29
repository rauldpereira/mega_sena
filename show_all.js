const XlsxPopulate = require('xlsx-populate');

// Carregue o arquivo Excel
XlsxPopulate.fromFileAsync('./megasena.xlsx')
  .then(workbook => {
    // Obtenha a primeira planilha
    const sheet = workbook.sheet(0);

    // Obtenha o intervalo de células com dados
    const usedRange = sheet.usedRange();

    // Obtenha as dimensões do intervalo de células
    const rowCount = usedRange.endCell().rowNumber();
    const columnCount = usedRange.endCell().columnNumber();

    // Iterar sobre todas as células e exibir o conteúdo
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
