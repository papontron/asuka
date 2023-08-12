import { Router } from 'express';
import homeController from '../controllers/home.controller.js';
module.exports = (router: Router) => {
  router.get('/', homeController);
};
