import { ref, set } from 'firebase/database';
import { db } from '../services/connectionFirebase';
import { v4 as uuidv4 } from 'uuid';

class RateService {
  async createRate(rate) {
    try {
      const rateRef = ref(db, `rate/${  uuidv4()}`);
      await set(rateRef, {
        recommendation: rate.recommendation,
        environment: rate.location,
        collaborator: rate.collaborator,
        time: rate.time,
        comment: rate.comment,
        cpf: rate.cpf,
      });

      console.log('Avaliação salva com sucesso!');
      return true;
    } catch (e) {
      console.error('Erro ao salvar avaliação:', e);
      throw new Error(e);
    }
  }
}

export default new RateService();
