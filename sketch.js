function setup() {
	createCanvas(1580, 765);
}

function draw() {
	if(mouseIsPressed) {
		fill(0);
	} else {
		noStroke();
        noFill();
	}
    
	ellipse(mouseX, mouseY, 40, 40);
}

window.addEventListener('keyup', (e) => {
   if(e.which === 32) { //space code
   	  alert('Рисунок очищен');
   	  background(255);
   } 
});