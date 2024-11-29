import path from 'path';
import querystringEs3 from 'querystring-es3';
import { fileURLToPath } from 'url';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

//  Para __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Importa los polyfills que necesitas (¡usando require.resolve!)
import browserifyZlib from 'browserify-zlib';
import pathBrowserify from 'path-browserify';
import cryptoBrowserify from 'crypto-browserify';
import streamBrowserify from 'stream-browserify';
import streamHttp from 'stream-http';
// import url from 'url';  // Ya no es necesario importar 'url'
import buffer from 'buffer';
import util from 'util';

export default (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    // ... (entry, output, module) ...

    resolve: {
        extensions: ['.js', '.jsx', '.json'], 
        fallback: {
          "zlib": browserifyZlib, 
          "querystring": querystringEs3,
          "path": pathBrowserify,
          "crypto": cryptoBrowserify,
          "stream": streamBrowserify,
          "fs": false, 
          "http": streamHttp,
          "net": false, 
          "url": url,
          "buffer": buffer,
          "util": util
        }
      },

    // ... (devServer, optimization, plugins) ...
  };
};