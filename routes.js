import express from 'express'
const router = express.Router()

import {
    controller,
    protect,
    get
} from './controller.js'

router.post('/get-token',controller)
router.get('/get',get)


export default router