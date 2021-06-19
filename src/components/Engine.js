import Ball from './Ball'
import Polygon from './Polygon'
import Car from './Car'

const GRAV = 5/20

export default class Engine {
  constructor(ctx, w, h){
    console.log(`${w}, ${h}`)
    this.ctx = ctx
    this.w = w
    this.h = h
    this.paused = false

    let octagon = [
      {x:20,   y:60},
      {x:60,  y:20},
      {x:60,  y:-20},
      {x:20,   y:-60},
      {x:-20,  y:-60},
      {x:-60, y:-20},
      {x:-60, y:20},
      {x:-20,  y:60}
    ]
    let diamond = [
      {x:10, y:30},
      {x:30, y:-10},
      {x:-10, y:-30},
      {x:-30, y:10}
    ]
    let rect = [
      {x:-20, y: 30},
      {x: 20, y: 30},
      {x: 20, y:-30},
      {x:-20, y:-30}
    ]
    this.entities = [
      new Ball(ctx, {x: this.w/2, y: this.h/2}, {x: 2, y: 0}, {x: 0, y:GRAV}, .75, 'indianred', 30),
      new Car(ctx, {x: this.w/2, y: this.h/2}, {x: 0, y: 0}, {x: 0, y: 0}, 0, 'yellowgreen', rect)
    ]


    this.loop = this.loop.bind(this)
  }

  pause(){
    this.paused = !this.paused
  }

  draw(){
    let { entities } = this

    entities.map(ent => ent.draw())
  }

  loop(){
    if (this.paused){
      return
    }

    let { ctx, w, h, paused, entities } = this

    ctx.clearRect(0, 0, w, h)
    ctx.save()
    this.draw()
    ctx.restore()

    // update positions
    entities.forEach(ent => {
      ent.updatePos(w, h)
      ent.updateVel(w, h)
      ent.updateRotation()
      ent.updateRotVel()
    })

    // handle collisions HERE

    if (!paused){
      window.requestAnimationFrame(this.loop)
    }
  }
}