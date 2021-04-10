class Sling{
	constructor(body,anchor)
	{
		
		var options={ 
            bodyA:body,			 
			pointB:anchor, 
			stiffness:0.001, 
			 length:10
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.sling=Constraint.create(options)
		World.add(world,this.sling)
	}

	display()
	{
		if(this.sling.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			//stroke(240,240,240);
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
	fly()
	{
		//World.remove(world,this.rope)
		this.sling.bodyA=null;
	}

}