import { Request, Response } from 'express';
const keys = require('../keys');
export default function homeController(req: Request, res: Response) {
  res.render('index', { port: keys.port });
}
