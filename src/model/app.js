import http from 'http';
import express from 'express';
import router from './index.js';
import setHeaders from "./middlewares/setHeaders.js";

const app = express();
// const hostname = '127.0.0.1';
const port = 3000;

// app.use(setHeaders);
app.use(express.json());
app.set("port", port);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://34.122.18.31:8080/');
  next();
});

app.use("/", router);
app.use("/api/update", router);
app.use("/api/delete", router);
app.use("/api/add", router);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});