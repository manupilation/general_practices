function testEven(n) {
  if (typeof n !== 'number') {
    throw new Error('Número inválido!');
  }
  return n % 2 === 0;
}

module.exports = testEven;