import express from 'express';
const router = express.Router();

import controllerWrapper from '../middlewares/controllerWrapper';
import connectingToDb from '../middlewares/connectingToDb';
import { CtrlClinics } from '../controllers/CtrlClinics';
const ctrl = new CtrlClinics();

router.get('/byCity', connectingToDb, controllerWrapper(ctrl.getClinicsByCity));
router.get('/byName', connectingToDb, controllerWrapper(ctrl.getClinicsByName));
router.get(
  '/byPostcode',
  connectingToDb,
  controllerWrapper(ctrl.getClinicsByPostcode),
);
router.get(
  '/byState',
  connectingToDb,
  controllerWrapper(ctrl.getClinicsByState),
);
router.get(
  '/bySuburb',
  connectingToDb,
  controllerWrapper(ctrl.getClinicsBySuburb),
);
router.get(
  '/searchClinicsName',
  connectingToDb,
  controllerWrapper(ctrl.getClinicNames),
);

export default router;
