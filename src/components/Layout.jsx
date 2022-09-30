import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export default function Layout({ initState }) {
  delete initState.settings;
  delete initState._locals;
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.initState=${JSON.stringify(initState)}`,
          }}
        />
        <script defer src="/js/app.js" />
        <script defer src="/js/vendor.js" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <link href="/style/style.css" rel="stylesheet" />
        <link rel="shortcut icon" href="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/344/external-capsules-pharmacy-rabit-jes-outline-color-rabit-jes.png" type="image/x-icon" />
        <title>Medicines</title>
      </head>
      <body>
        <div id="root">
          <StaticRouter location={initState.path}>
            <App {...initState} />
          </StaticRouter>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossOrigin="anonymous" />
      </body>
    </html>
  );
}
