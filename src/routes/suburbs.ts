import express from 'express';
const router = express.Router();

import controllerWrapper from '../middlewares/controllerWrapper';
import connectingToDb from '../middlewares/connectingToDb';
import { CtrlSuburbs } from '../controllers/CtrlSuburbs';
const ctrl = new CtrlSuburbs();

router.get(
  '/searchSuburbs',
  connectingToDb,
  controllerWrapper(ctrl.getSuburbs),
);
router.get(
  '/searchPostcode',
  connectingToDb,
  controllerWrapper(ctrl.getPostcode),
);

export default router;
