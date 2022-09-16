function sum(num, num2) {
  if(typeof num !== 'number') {
    return 'Erro: número inválido';
  }

  if(typeof num2 !== 'number') {
    return 'Erro: número inválido';
  }

  return num + num2;
}

module.exports = sum;