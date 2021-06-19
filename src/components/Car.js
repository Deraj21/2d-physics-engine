import Entity from './Entity'
import Polygon from './Polygon';

export default class Car extends Polygon {
  constructor(ctx, pos, vel, acc, elast, color, points){
    super(ctx, pos, vel, acc, elast, color, points)

    window.addEventListener('keydown', e => this.handleKeyDown(e))
  }

  handleKeyDown(e){
    let { keyCode } = e;
    let { vel, acc, rotation, rotVel, rotAcc } = this

    switch(keyCode){
      case 38:
      case 87: // w - acc forward
        let nX = vel.x + 1
        let nY = vel.y + 1
        this.vel = { nX, nY }
        return
      case 37:
      case 65: // a - rotate counter-clockwise -rad
        this.rotVel -= Math.PI/1200
        return
      case 40:
      case 83: // s - acc backward
        
        return
      case 39:
      case 68: // d - rotate clockwise +rad
      this.rotVel += Math.PI/1200
        return
      default:
        console.log(`ERROR: key #${keyCode} not recognized`)
        return
    }
  }

}