import http from 'http';
import express from 'express';
import router from './index';

const app = express();
// const hostname = '127.0.0.1';
const port = 8080;

app.use(express.json());
app.set("port", port);

app.use("/", router);
app.use("/update", router);
app.use("/delete", router);
app.use("/add", router);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  codenames.readWords();
});