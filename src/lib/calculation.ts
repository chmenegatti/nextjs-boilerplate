const units = {
  xicara: 'xicara-cha',
  gramas: 'gramas',
  sopa: 'colher-sopa',
  cha: 'colher-cha'
}

function calcula(medida: number, unitIn: string, unitsOut: string, measureIn: number): Number {
  var valor = 0;

  switch(unitIn) {
    case units.xicara:
      if (unitsOut === units.xicara) {
        valor = measureIn;
      } else if (unitsOut === units.gramas) {
        valor = measureIn * medida;
      } else if (unitsOut === units.sopa) {
        valor = measureIn * medida * 0.0625;
      } else if (unitsOut === units.cha) {
        valor = measureIn * medida * 0.02083333333;
      } else {
        valor = (measureIn * medida)/150;
      }

  }

  return Number(valor.toPrecision(2));
}

export default calcula;
