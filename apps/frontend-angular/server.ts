import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import proxy from 'express-http-proxy';

const ENV_SETTINGS = {
  SSR_ENABLE_PERFORMANCE_PROFILER:
    process.env['SSR_ENABLE_PERFORMANCE_PROFILER'] === 'true',
  SSR_ENABLE_BACKEND_PROXY: process.env['SSR_ENABLE_BACKEND_PROXY'] === 'true',
  SSR_API_HOST: process.env['SSR_API_HOST'],
};

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine({
    enablePerformanceProfiler: ENV_SETTINGS.SSR_ENABLE_PERFORMANCE_PROFILER,
  });

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  if (ENV_SETTINGS.SSR_ENABLE_BACKEND_PROXY && ENV_SETTINGS.SSR_API_HOST) {
    server.use(
      '/api/',
      proxy(ENV_SETTINGS.SSR_API_HOST + '/api/', {
        proxyReqPathResolver: (req) => {
          console.warn('Proxy: ' + req.url);

          return '/api' + req.url;
        },
      }),
    );
    // TODO: Catch and proxy graphql
  } else {
    server.get('/api/**', (req, res) => {
      res.status(500).send({
        message: 'Proxy for API server is not configured.',
      });
    });
  }

  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(browserDistFolder, {
      maxAge: '1y',
    }),
  );

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(+port, () => {
    console.warn('*****************************************');
    console.warn('Starting server with environment params: \n');
    console.log(ENV_SETTINGS);
    console.warn('*****************************************\n');

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
