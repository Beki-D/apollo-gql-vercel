import app from "./api/index.js";
import consola from "consola";
import dotenv from "dotenv";

dotenv.config();
var port = 3002;
app.listen(port, () => consola.info(`Server started on port: ${port}`));
