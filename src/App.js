import React, { Component } from 'react';
import './App.css';

import Engine from './components/Engine'

class App extends Component {
  constructor(){
    super()
    this.w = 200
    this.h = 600
    this.canvas = null
    this.ctx = null
    this.engine = null
  }

  componentDidMount(){
    // start
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.engine = new Engine(this.ctx, this.w, this.h)

    window.requestAnimationFrame(this.engine.loop)
    
  }
  
  start(){
    // let fps = 1000/2
    // setInterval(engine.loop, fps)
  }

  pause(){
    this.engine.pause()
    this.engine.loop()
  }

  render() {
    let {w, h} = this
    
    return (
      <div className="App">
        <canvas onClick={() => this.pause()} id="canvas" width={w} height={h}></canvas>
      </div>
    );
  }
}

export default App;
