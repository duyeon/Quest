
/* 아이콘 */
function Icon(ID) {
	this.id = document.getElementById(ID);	
	this.count = false;
	
	this.id.addEventListener('mousedown', this.moveDistance);
    this.id.addEventListener('mousemove', this.touchmove);
    this.id.addEventListener('mouseup', this.touchup);

    this.firstx =0;
    this.firsty =0;
    this.movex =0;
    this.movey =0;
    this.objx=0;
    this.objy=0;
    this.width=0;
    this.height=0;
    this.cwidth=0;
    this.cheight=0;
  	
};

Icon.prototype.touchdown = function(){
	this.count = true;
	this.movex=event.pageX;
	this.movey=event.pageY;
	this.firstx = this.movex;
	this.firsty = this.movey;
	this.objx = this.offsetLeft;
	this.objy = this.offsetTop;
	this.width = document.body.offsetWidth;
	this.height = document.body.offsetHeight;
	event.preventDefault();


};
Icon.prototype.touchmove = function(){
	
	if(this.count == true){
		this.movex = event.pageX;
		this.movey = event.pageY;
		
		this.style.left = (this.movex - this.firstx + this.objx)+'px'; 
		this.style.top = (this.movey - this.firsty + this.objy)+'px';
	}else return false;
	event.preventDefault();
};
Icon.prototype.touchup = function(){
	this.count = false;
	this.objx = this.offsetLeft;
	this.objy = this.offsetTop;
	this.cwidth = this.offsetWidth;
	this.cheight = this.offsetHeight;

};


function Folder(ID,window) {
	this.id = document.getElementById(ID);
	this.folderwindow = document.getElementById(window);
	this.count = false;
	this.id.addEventListener('mousedown', this.touchdown, false);
    this.id.addEventListener('mousemove', this.touchmove, false);
    this.id.addEventListener('mouseup', this.touchup, false);
    this.id.addEventListener('dblclick', this.openWindow,false);
	
	this.firstx =0;
    this.firsty =0;
    this.movex =0;
    this.movey =0;
    this.objx=0;
    this.objy=0;
    this.width=0;
    this.height=0;
    this.cwidth=0;
    this.cheight=0;
}
Folder.prototype = Icon.prototype;
Folder.prototype.openWindow = function(){

	if(folderwindow.style.display==''||folderwindow.style.display=='block'){
		folderwindow.style.display = 'none';
		

	}/* question:true, false, ''*/
	else if(folderwindow.style.display=='none'){
		folderwindow.style.display = 'block';
		folderwindow.style.top = (event.pageY)+"px";
		folderwindow.style.left = (event.pageX)+"px";
		
	
	}
};


function Popup(ID) {
	this.id = document.getElementById(ID);	
	this.count = false;
	
	this.id.addEventListener('mousedown', this.touchdown);
    this.id.addEventListener('mousemove', this.touchmove);
    this.id.addEventListener('mouseup', this.touchup);
    this.id.addEventListener('dblclick', this.closewindow);

    this.firstx =0;
    this.firsty =0;
    this.movex =0;
    this.movey =0;
    this.objx=0;
    this.objy=0;
    this.width=0;
    this.height=0;
    this.cwidth=0;
    this.cheight=0;
};
Popup.prototype = Icon.prototype;
Popup.prototype.closewindow = function(){
	this.style.display='none';
}
