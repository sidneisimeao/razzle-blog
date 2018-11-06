import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';

var compression = require('compression'); 
const allowCors = require('../cors')

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server.use(compression());
server.use(allowCors);
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );

    const helmet = Helmet.renderStatic();

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="pt-br">
    <head>
        <meta charset="utf-8" />              
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="google-site-verification" content="ATsGYZpFKonsLx_h0R5IyC0ntncQ2QYA6PQyknMpWe4" />
        <meta property="og:type" content="website" />           
        <meta property="og:locale" content="pt_BR" />      
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}        
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${markup}</div>
    </body>
    </html>`
      );
    }
  });

export default server;
