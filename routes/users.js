import { Router } from 'express';

const router = Router();

/* GET users listing. */
router.get('/', function(req, res, _) {
  res.send('respond with a resource');
});

export default router;
