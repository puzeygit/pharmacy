import express from 'express'

const pageRouter = express.Router();

pageRouter.get('/registration', (req, res) => {
    res.render('Layout', {})
})

pageRouter.get('/authorization', (req, res) => {
    res.render('Layout', {})
})

pageRouter.get('/personalacc', (req, res) => {
    res.render('Layout', {})
})

pageRouter.get('/orger', (req, res) => {
    res.render('Layout', {})
})

export default pageRouter;