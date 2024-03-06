let dados = 10;
 
let sorteio = dados + 7;

let mostrar = 'A8:H'+sorteio;


const XlsxPopulate = require('xlsx-populate');

XlsxPopulate.fromFileAsync('./megasena.xlsx')
  .then(workbook => {
    const sheet = workbook.sheet(0);
    const range = mostrar;
    const data = sheet.range(range).value();
    const numericData = [];

    data.forEach(row => {
      row.forEach(cell => {
        if (typeof cell === 'number' && !isNaN(cell)) {
          numericData.push(cell);
        }
      });
    });

    function exibirArquivos(lista){
      for(let i = 0; i < lista.length; i += 7){
        const grupo = lista.slice(i, i + 7);
        console.log(grupo.join(' | '));
      }
    }

    exibirArquivos(numericData);
  })

  .catch(error => {
    console.error('Erro ao carregar o arquivo:', error);
  });
