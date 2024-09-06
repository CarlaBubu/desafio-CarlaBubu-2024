export class RecintosZoo {
    constructor() {
      this.recintos = [
        { id: 1, espacoLivre: 5, total: 10 },
        { id: 2, espacoLivre: 3, total: 5 },
        { id: 3, espacoLivre: 2, total: 7 },
      ];
    }
  
    ehValido(animal) {
      const validAnimals = ['MACACO', 'CROCODILO'];
      return validAnimals.includes(animal.toUpperCase());
    }
  
    analisaRecintos(animal, quantidade) {
      if (!this.ehValido(animal)) {
        return { erro: 'Animal inválido', recintosViaveis: [] };
      }
      if (quantidade <= 0) {
        return { erro: 'Quantidade inválida', recintosViaveis: [] };
      }
  
      const recintosViaveis = this.recintos.filter((recinto) => {
        return recinto.espacoLivre >= quantidade;
      });
  
      if (recintosViaveis.length === 0) {
        return { erro: 'Não há recinto viável', recintosViaveis: [] };
      }
  
      return { recintosViaveis: recintosViaveis.map((recinto) => {
        return `Recinto ${recinto.id} (espaço livre: ${recinto.espacoLivre} total: ${recinto.total})`;
      }) };
    
    }
}