import Entity from './Entity'

export default class Ball extends Entity {
  constructor(ctx, pos, vel, acc, elast, r){
    super(ctx, pos, vel, acc, elast)
    this.r = r
  }

  // updateVel(w, h){
  //   let { vel, acc } = this
  //   let newVel = {
  //     x: vel.x + acc.x,
  //     y: vel.y + acc.y
  //   }

  //   this.vel = {...newVel}
  // }

  // updatePos(w, h){
  //   let { vel, pos, acc, elast, r } = this

  //   let newPos = {
  //     x: pos.x + vel.x,
  //     y: pos.y + vel.y
  //   }
  //   this.pos = {...newPos}

  //   // collision detection Y
  //   if (pos.y + r >= h){ // bottom
  //     this.vel.y = -1 * (vel.y * elast)
  //     this.pos.y = h - r - 1
  //   } else if (pos.y <= r){ // top
  //     this.vel.y = -1 * (vel.y * elast)
  //     this.pos.y = r + 1
  //   }
  //   // X
  //   if (pos.x + r >= w) { // right
  //     this.vel.x = -1 * (vel.x * elast)
  //     this.pos.x = w - r - 1
  //   } else if (pos.x <= r) { // left
  //     this.vel.x = -1 * (vel.x * elast)
  //     this.pos.x = r + 1
  //   }

  // }

  draw(){
    let { ctx, pos, r } = this

    ctx.beginPath()
    ctx.arc(pos.x, pos.y, r, 0, (Math.PI*2), false)
    ctx.fillStyle = "blue"
    ctx.fill()
    ctx.stroke()

  }
}