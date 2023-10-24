
//import TCPlayer from 'tcplayer.js';
//import 'tcplayer.js/dist/tcplayer.min.css';
//import EventEmitter from './common/EventEmitter.js'

import './controls.scss'
export default class WmPlayer /*extends EventEmitter*/ {
  constructor(conf) {
    //super()
	this.conf = conf
  }
  play(){
	console.log('11play')
  }
  stop(){
	console.log('11stop') 
  }
}