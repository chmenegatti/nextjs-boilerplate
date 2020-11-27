import factor from '../data/factor.json';

function conversao (ingrediente: number, unidadeEntrada: string, unidadeSaida: string, quantidade: number): number {
  const dataFactor = `${unidadeEntrada}to${unidadeSaida}`;
  const data = factor.filter(item => item.factor === dataFactor);

  let valor = 0;

  switch (unidadeSaida) {
    case 'gramas':
      valor = ingrediente * data[0].value * quantidade;

      if (dataFactor === 'gramastogramas') {
        valor = data[0].value * quantidade;

        return Number(valor);
      }
      break;
    case 'sopa':
      valor = data[0].value * quantidade;
      break;

    case 'cha':
      valor = data[0].value * quantidade;
      break;

    case 'copo':
      valor = data[0].value * quantidade;
      break;

    case 'xicara':
      valor = data[0].value * quantidade;
      break;
  }

  return Number(valor.toPrecision(3));
}

export default conversao;
