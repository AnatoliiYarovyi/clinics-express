import express from 'express';
const router = express.Router();

import controllerWrapper from '../middlewares/controllerWrapper';
import connectingToDb from '../middlewares/connectingToDb';
import { CtrlCities } from '../controllers/CtrlCities';
const ctrl = new CtrlCities();

router.get('/searchName', connectingToDb, controllerWrapper(ctrl.getCities));
router.get('/searchState', connectingToDb, controllerWrapper(ctrl.getState));

export default router;
