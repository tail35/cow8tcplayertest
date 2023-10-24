/*
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import path from 'path'
// import { terser } from 'rollup-plugin-terser'
import camelCase from 'lodash.camelcase'
import babel from '@rollup/plugin-babel'
import pkg from '../package.json'
import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import cleaner from 'rollup-plugin-cleaner'
import injectCss from './rollup-plugin-inject-css'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { eslint } from 'rollup-plugin-eslint';
import os from 'os'
const libraryName = 'WmPlayer'
const isDev = process.env.NODE_ENV==='dev'
const getIpAddress = () => {
  let networkObj = os.networkInterfaces()
  const getIp = (newworks) => {
    for (let i =0; i < newworks.length; i++) {
      const obj = newworks[i]
      if (obj.family=='IPv4' && obj.address !== '127.0.0.1' && !obj.internal ) {
        return obj.address
      }
    }
    return 'localhost'
  }
  if (networkObj.WLAN) {
    return getIp(networkObj.WLAN)
  }
  for (let devName in networkObj) {
    let newworks = networkObj[devName]
    return getIp(newworks)
  }
}
export default {
  input: 'src/wmplayer/wmplayer.js',
  output: [
    {
      file: pkg.main,
      name: camelCase(libraryName),
      format: 'umd',
      sourcemap: true,
    },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  plugins: [
    resolve(),
    eslint(),
    commonjs(),
    json(),
    cleaner(),
    babel({
      babelHelpers: 'runtime',
      //  runtimeHelpers: true,
      exclude: '**/node_modules/**',
    }),
    scss({//// will output compiled styles to ${output.file}.css
      outputStyle: 'compressed',
      processor: () => postcss([autoprefixer()]),
      includePaths: [
        path.join(__dirname, '../../node_modules/'),
        'node_modules/',
      ],
    }),
    injectCss('STYLE__CSS__INJECT', pkg.main),
    isDev && serve({
      open: true,
      verbose: true,
      openPage: '/vod.html',
      contentBase: '',
      port: 8081,
      host: getIpAddress(),
      https: false
    }),
    isDev && livereload('dist')
  ]
}
