class Ground{
   constructor(x,y){

    var options={
        isStatic:true
    }

    this.x=x;
    this.y=y;
    this.width=1000;
    this.height=15;

    this.body=Bodies.rectangle(x,y,1000,10,options);
    World.add(world,this.body);

   }
  
   display(){
  
    var pos=this.body.position;
     
    push()
    rectMode(CENTER);
    fill("black");
    rect(pos.x,pos.y,this.width,this.height);
    pop()
   }
}