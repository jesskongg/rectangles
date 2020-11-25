import http from 'http';
import express from 'express';
import rectangleRouter from './index';

const app = express();
// const hostname = '127.0.0.1';
const port = 3306;

app.use(express.json());
app.set("port", port);

app.use("/", rectangleRouter);
app.use("/update", rectangleRouter);
app.use("/delete", rectangleRouter);
app.use("/add", rectangleRouter);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  codenames.readWords();
});