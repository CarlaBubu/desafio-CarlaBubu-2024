import { RecintosZoo } from './recintos-zoo';

describe('Recintos do Zoologico', () => {
  it('Deve rejeitar animal inválido', () => {
    const recintosZoo = new RecintosZoo();
    const resultado = recintosZoo.analisaRecintos('UNICORNIO', 1);
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.recintosViaveis).toEqual([]);
  });

  it('Deve rejeitar quantidade inválida', () => {
    const recintosZoo = new RecintosZoo();
    const resultado = recintosZoo.analisaRecintos('MACACO', 0);
    expect(resultado.erro).toBe('Quantidade inválida');
    expect(resultado.recintosViaveis).toEqual([]);
  });

  it('Não deve encontrar recintos para 10 macacos', () => {
    const recintosZoo = new RecintosZoo();
    const resultado = recintosZoo.analisaRecintos('MACACO', 10);
    expect(resultado.erro).toBe('Não há recinto viável');
    expect(resultado.recintosViaveis).toEqual([]);
  });

  it('Deve encontrar recinto para 1 crocodilo', () => {
    const recintosZoo = new RecintosZoo();
    const resultado = recintosZoo.analisaRecintos('CROCODILO', 1);
    expect(resultado.recintosViaveis).toEqual([
      'Recinto 1 (espaço livre: 5 total: 10)',
      'Recinto 2 (espaço livre: 3 total: 5)',
      'Recinto 3 (espaço livre: 2 total: 7)',
    ]);
  });

  it('Deve encontrar recintos para 2 macacos', () => {
    const recintosZoo = new RecintosZoo();
    const resultado = recintosZoo.analisaRecintos('MACACO', 2);
    expect(resultado.recintosViaveis).toEqual([
        'Recinto 1 (espaço livre: 5 total: 10)',
        'Recinto 2 (espaço livre: 3 total: 5)',
        'Recinto 3 (espaço livre: 2 total: 7)',
      ]);
  });
});

