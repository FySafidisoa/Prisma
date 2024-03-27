import { Router } from 'express';
import {
  addMedecin,
  updateMedecin,
  deleteMed,
  getMedecin,
  getOneMed,
} from './controller.js';

const router = Router();

router.route('/').post(addMedecin);
router.route('/').get(getMedecin);
// router.route('/min').get(minPrestation);
router.route('/:unique').get(getOneMed);
router.route('/:id').put(updateMedecin);
router.route('/:val').delete(deleteMed);
export default router;
