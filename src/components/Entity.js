/**
 * Class 'Entity':
 * 
**/

export default class Entity {
  constructor(ctx, pos, vel, acc, elast, color){
    this.ctx = ctx

    // linear
    this.pos = {...pos}
    this.vel = {...vel}
    this.acc = {...acc}

    // rotational
    this.rotation = 0
    this.rotVel = 0 // measured in radians per frame
    this.rotAcc = 0

    // other
    this.weight = 0
    this.elast = elast // % of velocity that the entitie keeps when it "bounces" off other entities
    this.frict = 0
    this.color = color
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
    let { vel, pos } = this

    let newPos = {
      x: pos.x + vel.x,
      y: pos.y + vel.y
    }
    this.pos = {...newPos}

    this.collisionDetection(w, h)
    
  }

  updateRotation(){
    this.rotation = this.rotation + this.rotVel
  }

  updateRotVel(){
    this.rotVel = this.rotVel + this.rotAcc
  }

  collisionDetection(w, h){
    
  }

  draw(){

  }
}
