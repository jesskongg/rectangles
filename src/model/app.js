import http from 'http';
import express from 'express';
import router from './index.js';

const app = express();
// const hostname = '127.0.0.1';
const port = 3000;

app.use(express.json());
app.set("port", port);

app.use("/api/all", router);
app.use("/api/update", router);
app.use("/api/delete", router);
app.use("/api/add", router);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});