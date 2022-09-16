const sum = require('../functions/sum');
const isEven = require('../functions/IsEven');

describe('Testa a funcionalidade de Sum', () => {
  it('Testa a sum', () => { 
    expect(sum(2, 5)).toBe(7);
  });
  
  it('Testa se retorna o erro', () => {
    expect(sum(1, [])).toBe('Erro: número inválido');
  });
})

describe('Testes aleatórios', () => {
  let objetorus = {
    'ori': 1,
    'gami': 2,
  }

  let nulurus = null;
  let undefineres = undefined;
  let falsianeres = false;

  it('Testa toEqual', () => {
    expect(objetorus).toStrictEqual({ori: 1, gami: 2});
    expect(objetorus).toBeDefined()
  });

  it('Testa nulos', () => {
    expect(nulurus).toBeNull();
  });
  it('Testa undefineds', () => {
    expect(undefineres).toBeUndefined();
  });
  it('Testa falses', () => {
    expect(falsianeres).toBeFalsy();
  });
});

describe('Testa strings', () => {
  it('Testes de match', () => {
    expect('Morgana').not.toMatch(/h/i);
  });
  it('Existe Ana em Morgana', () => {
    expect('Morgana').toMatch(/AnA/i);
  });
});

describe('Testa arrays', () => {
  const brumas = [
    'Morgana',
    'Arthur',
    'Kevin',
    'Gwenhwyfar',
    'Lancelote',
  ];

  it('Testa a existencia de alguns personagens', () => {
    expect(brumas).toContain('Morgana');
    expect(brumas).toContain('Arthur');
    expect(brumas).not.toContain('Viviane');
  });
});

describe('Testa exceções', () => {
  afterAll(() => jest.resetAllMocks());

  function ErrorHandler(param) {
    if (param !== '') {
      throw new Error('Caiu.');
    }
    return 1;
  }

  it('Testa o erro', () => {
    const err = jest.fn(() => ErrorHandler(''))
    err()
    expect(() => ErrorHandler('123')).toThrow('Caiu.');
    expect(err).toHaveReturned();
  });
});

describe('Testa a funcionalidade de IsEven', () => {
  describe('Em casos naturais', () => {
    it('Testa se retorna um booleano em caso de Par', () => {
      expect(isEven(4)).toBeTruthy();
    });
    it('Testa se retorna um booleano false em caso de ímpar', () => {
      expect(isEven(5)).toBeFalsy();
    });
  })
  describe('Em caso de erro', () => {
    it('Testa se um não numeral aciona um erro', () => {
      expect(() => isEven(['abacaxi'])).toThrow('Número inválido!');
    });
  });
})
