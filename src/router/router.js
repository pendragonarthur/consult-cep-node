import express from "express";
import consultController from "../controller/consultController.js";

const router = express.Router();

router.get("/cep/:cep", (req, res) => {
  const cep = new consultController();
  cep.handle(req, res);
});
export default router;
