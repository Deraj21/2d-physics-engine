import Entity from './Entity'

export default class Ball extends Entity {
  constructor(ctx, pos, vel, acc, elast, color, r){
    super(ctx, pos, vel, acc, elast, color)
    this.r = r
  }

  collisionDetection(w, h){
    let { pos, vel, elast, r } = this
    // collision detection Y
    if (pos.y + r >= h){ // bottom
      this.vel.y = -1 * (vel.y * elast)
      this.pos.y = h - r - 1
    } else if (pos.y <= r){ // top
      this.vel.y = -1 * (vel.y * elast)
      this.pos.y = r + 1
    }
    // collision detection X
    if (pos.x + r >= w) { // right
      this.vel.x = -1 * (vel.x * elast)
      this.pos.x = w - r - 1
    } else if (pos.x <= r) { // left
      this.vel.x = -1 * (vel.x * elast)
      this.pos.x = r + 1
    }
  }

  draw(){
    let { ctx, pos, r, color } = this

    ctx.beginPath()
    ctx.arc(pos.x, pos.y, r, 0, (Math.PI*2), false)
    ctx.fillStyle = color
    ctx.fill()
    ctx.stroke()

  }
}