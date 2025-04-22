import { cpf } from 'cpf-cnpj-validator';

export default function isValidCpf(cpfValue) {
    const cpfUnformatted = cpfValue.replace(/\D/g, '');
    return cpf.isValid(cpfUnformatted);
  }
  