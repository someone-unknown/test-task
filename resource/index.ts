import { Server } from 'http';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import expressSession from 'express-session';

import { httpOptions } from 'configuration/http';
import { sessionOptions } from 'configuration/session';

import { authGuard } from 'guard/auth';
import { instrumentsGuard } from 'guard/instruments';

import { getInstrument } from 'route/get-instrument';
import { getInstruments } from 'route/get-instruments';
import { login } from 'route/login';
import { register } from 'route/register';
import { sessionVerify } from 'route/session-verify';

import { userValidator } from 'validator/user';

const app: Express = express();
const server: Server = new Server(app);

app.use(expressSession(sessionOptions));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/instruments', instrumentsGuard, getInstruments);
app.get('/instruments/:instrument_symbol', instrumentsGuard, getInstrument);
app.post('/users/register', userValidator, register);
app.post('/users/login', userValidator, login);
app.get('/users/session-verify', authGuard, sessionVerify);

server.listen(httpOptions.port, httpOptions.hostname);