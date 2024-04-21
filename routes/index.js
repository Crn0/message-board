import { Router } from 'express';
import messages from '../models/db/messages.js';

const router = Router();

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

/* GET home page. */
router.get('/', (req, res, _) => {
    res.render('index', { messages, options, title: 'Message board' });
});

// GET form
router.get('/new', (req, res, _) => {
    res.render('form', { title: 'form' });
});

// Create new message
router.post('/new', (req, res) => {
    messages.push({
        user: req.body.user,
        text: req.body.message,
        added: new Date(),
    });

    res.redirect('/');
});

export default router;
