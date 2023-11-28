import consultCep from "../api/consultCep.js";

export default class consultController {
  async handle(req, res) {
    const cep = await consultCep(req.params.cep);
    res.send(cep);
  }
  async handlebody(req, res) {
    const cep = await consultCep(req.body.cep);
    res.send(cep);
  }
}
