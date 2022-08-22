import 'dotenv/config';
import { Server } from 'http';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import expressSession from 'express-session';
import cors from 'cors';

import { httpOptions } from 'configuration/http';
import { sessionOptions } from 'configuration/session';

import { authGuard } from 'guard/auth';
import { instrumentsGuard } from 'guard/instruments';

import { getInstrument } from 'route/get-instrument';
import { getInstruments } from 'route/get-instruments';
import { login } from 'route/login';
import { register } from 'route/register';
import { sessionVerify } from 'route/session-verify';

import { userValidation } from 'validation/user';

const app: Express = express();
const server: Server = new Server(app);

app.use(cors());
app.use(expressSession(sessionOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/instruments', instrumentsGuard, getInstruments);
app.get('/instruments/:instrument_symbol', instrumentsGuard, getInstrument);
app.post('/users/register', userValidation, register);
app.post('/users/login', userValidation, login);
app.get('/users/session-verify', authGuard, sessionVerify);

server.listen(httpOptions.port, httpOptions.hostname);