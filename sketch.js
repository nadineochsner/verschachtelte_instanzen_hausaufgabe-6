

let grid = [] // array
let schnitzelgrid = []
let angle = 0;
let atarget = 0;
let atargetoff = -360;
let g = 0;
let gtarget = 0;
let size;
let colour = 'green'
let w = 0
let h = 0
let firstangle = 90
let secondangle = 180


function setup () {
    createCanvas(windowWidth,windowHeight)
    angleMode(DEGREES)
    size = height / 4;
    
	for (let y = height / 4; y < height; y += height / 4) {
		for (let x = width / 4; x < width; x += width / 4) {
            let newEllipses= new Ellipses(x, y, size, size, colour)
            newEllipses.display()
   
        
           grid.push(newEllipses)
		}
    }
 
    for (let y = 1 ; y < 4; y += 1 ) {
		for (let x = 1 ; x < 4; x += 1) {
            let schnitzel = new Schnitzel(x, y, size, size, firstangle, secondangle)
            console.log(x)
            schnitzelgrid.push(schnitzel)
		}
    }
}


 function draw() {
    background(0);
    for (let i = 0; i < grid.length; i += 1) {
        let currentCell = grid[i]
        currentCell.display()
        // grid[4].changeColour('yellow')
 
    }  
   
    atarget = map(mouseX, 0, width, -180, 180);	
	if (abs(mouseX - width / 2) < 50) {
		angle = lerp(angle, atargetoff, 0.05);
	} else {
		angle = lerp(angle, atarget + atargetoff, 0.05);
	}

	gtarget = map(mouseY, 100, height - 100, 0, 255);
	g = lerp(g, gtarget, 0.02);
	
    
     for (let i = 0; i < schnitzelgrid.length; i += 1) {
        let currentCell = schnitzelgrid[i]
        currentCell.display()
        schnitzelgrid[i].changeAngle(atarget,gtarget)
        schnitzelgrid[i].changeFill(g)
 
     }
}