import { Router } from 'express';
import homeController from '../controllers/home.controller';
module.exports = (router: Router) => {
  router.get('/', homeController);
};
