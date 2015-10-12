var svgcount = 1;
var reccount = 1;
var circount = 1;
var tricount = 1;

function _makesvg(svgW,svgH){
  var _svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  _svg.setAttribute('width',svgW);
  _svg.setAttribute('height',svgH);
  _svg.id = 'svg'+svgcount;;
  _svg.setAttribute('class','unselected');
  _svg.style.position = 'absolute';
  _svg.style.left = 300+'px';
  _svg.style.top = 300 +'px';
  document.body.appendChild(_svg);
  svgcount++;
  return _svg;
};
function _makerec(recwidth,recheight){
  var rectangles = document.createElementNS("http://www.w3.org/2000/svg","rect");

  rectangles.setAttribute('width',recwidth);
  rectangles.setAttribute('fill','#35aee3');
  rectangles.setAttribute('height',recheight);
  rectangles.id = 'rec'+reccount;
  rectangles.setAttribute('class','unselected');
  reccount++;
  _makesvg(recwidth,recheight).appendChild(rectangles);
};
function _makecir(data){
  var circles = document.createElementNS("http://www.w3.org/2000/svg","circle");
  var radius = data;
  circles.setAttribute("cx",radius);
  circles.setAttribute("cy",radius);
  circles.setAttribute("r",radius);
  circles.id = 'cir'+circount;
  circles.setAttribute('fill','#fa79c9');
  _makesvg(radius*2,radius*2).appendChild(circles);
}
function _maketri(data){
  var triangles = document.createElementNS("http://www.w3.org/2000/svg","polygon");
  var _x1 = data._x1;
  var _y1 = data._y1;
  var _x2 = data._x2;
  var _y2 = data._y2;
  var _x3 = data._x3;
  var _y3 = data._y3;
  var svgwidth = CalsizeX(_x1,_x2,_x3);
  var svgheight = CalsizeY(_y1,_y2,_y3);
  coor = _x1+','+_y1+' '+_x2+','+_y2+' '+_x3+','+_y3;
  triangles.setAttribute("points",coor);
  triangles.id = 'tri'+tricount;
  triangles.setAttribute('fill','#e1f47a');
  _makesvg(svgwidth*3,svgheight*3).appendChild(triangles);

}
function CalsizeX(x1,x2,x3){
	var lx = Math.min(x1,x2,x3);
	var rx = Math.max(x1,x2,x3);
	var width = rx-lx;

	return width;
}
function CalsizeY(y1,y2,y3){
	var ty = Math.max(y1,y2,y3);
	var by = Math.min(y1,y2,y3);
	var height = ty-by;

	return height;
}
function clearText(field){
	if(field.defaultValue==field.value)
		field.value="";
}
