import "reflect-metadata";
import express,{Express} from 'express';
import router from './src/routes/index';

const app: Express = express();
let port:any=80;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.use(express.json()) //Para que permita recibir datos por medio de Post

app.use("/api/v1",router);