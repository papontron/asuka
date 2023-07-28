import { Request, Response } from 'express';
export default function homeController(req: Request, res: Response) {
  res.render('index');
}
