import Ball from './Ball'

export default class Engine {
  constructor(ctx, w, h){
    console.log(`${w}, ${h}`)
    this.ctx = ctx
    this.w = w
    this.h = h
    this.paused = false

    this.ball = new Ball(ctx, {x: this.w/2, y: this.h/2}, {x: 2, y: 0}, {x: 0, y:5/30}, .9, 30)

    this.loop = this.loop.bind(this)
  }

  pause(){
    this.paused = !this.paused
  }

  draw(){
    let { ball } = this

    ball.draw()
  }

  loop(){
    let { ctx, w, h, ball, paused } = this

    ctx.clearRect(0, 0, w, h)
    ctx.save()
    this.draw()
    ctx.restore()

    // update positions
    ball.updatePos(w, h)
    ball.updateVel(w, h)

    // handle collisions HERE

    if (!paused){
      window.requestAnimationFrame(this.loop)
    }
  }
}