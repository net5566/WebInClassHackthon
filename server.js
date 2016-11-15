/* eslint-disable no-console */

import path from 'path';
import express from 'express';
import webpack from 'webpack';

import api from './api';
import config from './webpack.config';

const port = process.env.PORT || 3000;

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}));

app.use('/api', api);

app.get('*', (req, res) => {
 // console.log('getin')
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((req, res) => {
 // console.log('404');
  res.status(404)
     .sendFile(path.join(__dirname, 'bad.html'));
});

// i have no idea that why it can get into bad.html 
// QAQ

app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);
});
