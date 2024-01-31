import { Router, Request, Response } from 'express';
import fs from 'fs';

const router: Router = Router();

const removeExtension = (filename: string) => {
  return filename.split('.').shift();
};

fs.readdirSync(__dirname).forEach((file: string) => {
  const fileWithoutExtension = removeExtension(file);
  if (fileWithoutExtension !== 'index') {
    const routeMiddleware = require(`./${fileWithoutExtension}.routes`).default;
    if (typeof routeMiddleware === 'function') {
      router.use(`/${fileWithoutExtension}`, routeMiddleware);
      console.log('CHARGING ROUTE ------->', fileWithoutExtension);
    }
  }
});

router.get('*', (req: Request, res: Response) => {
  res.status(404).send({ error: 'Not Found' });
});

export default router;
