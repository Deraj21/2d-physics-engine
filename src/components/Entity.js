/**
 * Class 'Entity':
 * 
**/

export default class Entity {
  constructor(ctx, pos, vel, acc, elast){
    this.ctx = ctx

    this.pos = {...pos}
    this.vel = {...vel}
    this.acc = {...acc}
    this.elast = elast
  }

  updateVel(w, h){
    let { vel, acc } = this
    let newVel = {
      x: vel.x + acc.x,
      y: vel.y + acc.y
    }

    this.vel = {...newVel}
  }

  updatePos(w, h){
    let { vel, pos, acc, elast, r } = this

    let newPos = {
      x: pos.x + vel.x,
      y: pos.y + vel.y
    }
    this.pos = {...newPos}

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

  }
}
