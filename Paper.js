class Paper{
      constructor(x,y,r){
          var options={
              restitution:0.3,
              friction:0.5,
              density:1.2
          }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(this.x, this.y,this.r, options)
      World.add(world, this.body);
      }
      display()
      {
          var paperpos=this.body.position;
         
          ellipseMode(RADIUS);
          strokeWeight(3);
          fill(255,0,255);
          ellipse(paperpos.x,paperpos.y,this.r,this.r);
         
      }
}
