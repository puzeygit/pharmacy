import express from 'express'

const userRouter = express.Router();

userRouter.get('/registration', (req, res) => {
    res.render('Layout', {})
})

userRouter.get('/authorization', (req, res) => {
    res.render('Layout', {})
})

userRouter.get('/personalacc', (req, res) => {
    res.render('Layout', {})
})

userRouter.get('/orger', (req, res) => {
    res.render('Layout', {})
})
