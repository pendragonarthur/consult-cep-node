import express from "express";
import dotenv from "dotenv";
import router from "./router/router.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
