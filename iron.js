class Iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
	var options={
		restitution:0.8,
		friction:0.9,
        density:30
	}
		this.x=x;
		this.y=y;
		this.width=50
        this.height=50
		this.body=Bodies.rectangle(this.x, this.y,50,50, options)
		World.add(world, this.body);

	}
	display()
	{
			var Ironpos=this.body.position;
            var angle=this.body.angle		
			push()
			translate(Ironpos.x, Ironpos.y);
            rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("grey");
			fill("black");
			//draw the ellipse here to display the rubber ball
            rect(0,0,this.width,this.height)
			pop()
	}

}