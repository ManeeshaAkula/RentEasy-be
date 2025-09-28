import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

const ALLOWED_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:3000';

app.use(cors({ origin: ALLOWED_ORIGIN, credentials: false }));
// app.options('/*', cors({ origin: ALLOWED_ORIGIN, credentials: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  next();
});

app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({ ok: true });
});

app.use('/', routes);

app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Not Found' });
});

app.use((err: any, _req: any, res: any, _next: any) => {
  res.status(500).json({ status: 'error', message: 'Internal Server Error' });
});

export default app;
