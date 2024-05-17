import express from 'express';
const router = express.Router();
import {
  getGoals,
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
} from '../controllers/goalController.js';

router.get('/', getGoals);

router.get('/:id', getGoal);

router.post('/', createGoal);

router.put('/:id', updateGoal);

router.delete('/:id', deleteGoal);

export default router;
