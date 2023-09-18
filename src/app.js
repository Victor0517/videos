import express from 'express';
import morgan from 'morgan';
import authRouter from './router/auth.routes.js'

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use("/api", authRouter);


export default app;