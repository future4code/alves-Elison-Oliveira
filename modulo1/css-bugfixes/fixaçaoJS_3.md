```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let somaNotas = ex + p1 + p2
  let divideNotas = somaNotas / 3
  if(divideNotas >= 9){
    return "A"
  }else if(divideNotas < 9 && divideNotas>=7.5 ){
  return "B"
  }else if (divideNotas < 7.5 && divideNotas >=6 ){
    return "C"
  }else{
    return "D"
  }
```
