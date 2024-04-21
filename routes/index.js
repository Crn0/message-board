import { Router } from 'express';
import messages from '../models/db/messages.js';

const router = Router();

/* GET home page. */
router.get('/', (req, res, _) => {
    res.render('index', { messages, title: 'Message board'});
});

export default router;
