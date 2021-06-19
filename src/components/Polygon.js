import Entity from './Entity'

export default class Polygon extends Entity {
  constructor(ctx, pos, vel, acc, elast, color, points){
    super(ctx, pos, vel, acc, elast, color)
    this.points = points
  }

  collisionDetection(w, h){
    
  }

  draw(){
    let { ctx, pos, color, points} = this
    let {x, y} = pos

    ctx.translate(x, y)
    ctx.rotate(this.rotation)
    
    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)
    points.forEach((p, i, arr) => {
      let ind = (i+1) % (arr.length)
      ctx.lineTo(arr[ind].x, arr[ind].y)
    })
    
    ctx.fillStyle = color
    ctx.fill()
    ctx.stroke()


  }
}