
import * as express from 'express';
import routes from './routes';
import * as path from 'path';
import * as cors from 'cors';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads' )));

app.listen(3333);

console.log(`App started on port 3333`);