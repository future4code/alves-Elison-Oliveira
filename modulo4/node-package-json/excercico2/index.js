const operacoes = process.argv[2];

const n1 = Number(process.argv[3]);
const n2 = Number(process.argv[4]);

if (operacoes && n1 && n2 != undefined) {
  switch (operacoes) {
    case "soma":
      return console.log(`resultado ${n1 + n2}`);
    case "sub":
      return console.log(`resultado ${n1 - n2}`);
    case "mult":
      return console.log(`resultado ${n1 * n2}`);
    case "div":
      return console.log(`resultado ${n1 / n2}`);
    default:
      break;
  }
} else {
  console.log("erro ;(");
}
