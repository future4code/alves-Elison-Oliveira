function tipo(variavel: any): void {
  let tipoVariavel: string = typeof variavel;
  return console.log(tipoVariavel);
}

tipo("moiss");
tipo(25);
tipo(true);
