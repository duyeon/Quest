function makerectangle() {
			alert('make rectangle!');
			var rectangles = document.createElementNS("http://www.w3.org/2000/svg","rect");
			rectangles.setAttribute("width",40);
    		rectangles.setAttribute("height",40);
    		rectangles.id= 'myrectangle';
			rectangles.setAttribute('fill','#35aee3');
			makesvg().appendChild(rectangles);
		};
function makecircle(){
			alert('make circle!');
			var circles = document.createElementNS("http://www.w3.org/2000/svg","circle");
			circles.setAttribute("cx",20);
    		circles.setAttribute("cy",20);
    		circles.setAttribute("r",20);
    		circles.id = 'mycircle';
			circles.setAttribute('fill','#35aee3');
			makesvg().appendChild(circles);
		};
function maketriangle(){
			alert('make triangle!');
			var triangles = document.createElementNS("http://www.w3.org/2000/svg","polygon");
			triangles.setAttribute("points",'20,0 40,40 0,40');
    		triangles.id = 'mytriangle';
			triangles.setAttribute('fill','#35aee3');
			makesvg().appendChild(triangles);
		};
function makesvg(){
	
	var makesvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			makesvg.setAttribute('height',40);
			makesvg.setAttribute('width',40);
			makesvg.id = 'svg';
			makesvg.setAttribute('class','svgclass');
			makesvg.style.position = 'absolute';
			makesvg.style.left = 300+'px';
			makesvg.style.top = 300+'px';
			document.body.appendChild(makesvg);
			return makesvg;

};
function obj(evt){
	
	var obj = document.querySelector('#now');
	var kcode = evt.keyCode;
	
	if(kcode == 46){
		obj.remove();
	}
	else if(kcode == 37){
		obj.style.left = parseInt(obj.style.left)-20+'px';
	}
	else if(kcode == 38){
		obj.style.top = parseInt(obj.style.top)-20+'px';	
	}
	else if(kcode == 39){
		obj.style.left = parseInt(obj.style.left)+20+'px';
	}
	else if(kcode == 40){
		obj.style.top = parseInt(obj.style.top)+20+'px';
	}

	
};
function selectTarget(){
	$("*").removeAttr('id');
	this.id = 'now';

}
