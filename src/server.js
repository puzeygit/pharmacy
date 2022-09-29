import express from 'express';
import morgan from 'morgan';
import path from 'path';
import apiRouter from './routes/apiRouter';
import indexRouter from './routes/indexRouter';
import customRender from './utils/customRender';
import pageRouter from './routes/pageRouters'
import { localsMiddle } from './middlewares';
// import orderRouter from './routes/orderRouter';

const session = require('express-session');
const FileStore = require('session-file-store')(session);

require('dotenv').config();

const PORT = process.env.PORT ?? 3005;

const app = express();

app.engine('jsx', customRender);
app.set('views', path.join(__dirname, 'components'));
app.set('view engine', 'jsx');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(session({
  name: 'sid',
  store: new FileStore(),
  secret: 'lolkekcheburek',
  saveUninitialized: false,
}));

app.use(localsMiddle);

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/page',pageRouter);
// app.use('/order', orderRouter);



app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
