import Document, { Main, NextScript } from 'next/document'
import Head from 'next/head';
import React from 'react';

export default class MyDocument extends Document {
  static getInitialProps (ctx) {
    return Document.getInitialProps(ctx)
  }

  render () {
    return (
     <html>
     <head>
       <meta name="robots" content="noindex nofollow" key="robots" />
     </head>

     <body>
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
