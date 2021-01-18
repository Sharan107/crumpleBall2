class Ground{
   constructor(x,y){

    var options={
        isStatic:true
    }

    this.x=x;
    this.y=y;
    this.width=1600;
    this.height=15;

    this.body=Bodies.rectangle(x,y,1600,10,options);
    World.add(world,this.body);

   }
  
   display(){
  
    var pos=this.body.position;
     
    push()
    rectMode(CENTER);
    fill(255,255,255);
    rect(pos.x,pos.y,1600,15);
    pop()
   }
}