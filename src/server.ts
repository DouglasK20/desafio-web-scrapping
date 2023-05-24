import { errorMiddleware } from "./middlewares/error";
import router from "./routers/routes"

const express = require('express');

const app = express();

app.use(express.json());

app.use(router);

app.use(errorMiddleware);

app.listen(3000, () => {console.log("Server is running")});