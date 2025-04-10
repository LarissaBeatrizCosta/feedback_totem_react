export default class RateModel {
  recommendation;
  location;
  collaborator;
  time;
  comment;
  cpf;

  constructor({ recommendation, location, collaborator, time, comment, cpf }) {
    this.recommendation = recommendation ?? 0;
    this.location = location ?? 0;
    this.collaborator = collaborator ?? 0;
    this.time = time ?? 0;
    this.comment = comment ?? "";
    this.cpf = cpf ?? "";
  }
}
