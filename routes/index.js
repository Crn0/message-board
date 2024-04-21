import { Router } from 'express'

const router = Router()

/* GET home page. */
router.get('/', (req, res, _) => {
    res.render('index', { title: 'Message board' })
})

export default router
