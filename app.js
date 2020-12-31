import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import routes from './index';

const cors = require('cors');

const app = express();
const port = process.env.PORT || '9595';
/**
 * Connect to the database
 */

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/wobblemakers');

/**
 * Middleware
 */

app.use(bodyParser.urlencoded({ extended: true, limit: '16mb' }));
app.use(bodyParser.json({ extended: true, limit: '16mb' }));
app.use(cors());

app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// catch 400
app.use((err, req, res, next) => {
  res.status(400).send(`Error: ${res.originUrl} not found`);
  next();
});

// catch 500
app.use((err, req, res, next) => {
  res.status(500).send(`Error: ${err}`);
  next();
});

app.use(routes);
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
