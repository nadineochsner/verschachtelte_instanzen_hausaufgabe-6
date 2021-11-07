class Ellipses {

    constructor(x, y, height, weight, colour) { // werte werden übergeben
        this.xAchse = x
        this.yAchse = y
        this.w = height
        this.h = weight
        this.fillcolour = colour

    }
    display() {
        fill(this.fillcolour);
        ellipse(this.xAchse, this.yAchse, this.h, this.w);
    }

    changeColour(colour){ //methode
    this.fillcolour = colour
} 

}

class Schnitzel{ 
    constructor(w, h, s, s2, firstangle, secondangle, width, height){
        this.w = w
        this.h = h   
        this.s = s
        this.s2 = s2
        this.firstangle = firstangle
        this.secondangle = secondangle
     }

    display(){
        fill('pink')
        arc(this.w * width/ 4, this.h * height/ 4, size, size, angle + this.firstangle, angle + this.secondangle); 
    }

    changeAngle(mouseX,mouseY){ //methode
        this.secondangle = mouseX
        this.firstangle = mouseY
    }

    changeFill(color) {
        fill(color)
    }
}
