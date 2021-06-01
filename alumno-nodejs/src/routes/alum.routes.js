import { Router } from 'express'

const router = Router();

import * as alumCtr from '../controllers/alum.controller'

router.get('/', alumCtr.readAllAlums);
router.get("/:id", alumCtr.readAlum);
router.delete("/:id", alumCtr.delAlum)
router.post("/", alumCtr.createAlum);
router.put("/:id", alumCtr.updateAlum)

export default router;