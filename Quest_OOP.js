/* 아이콘 */
var Icon = function(dom) {
	this.dom = dom;

	this._initialize();
};

var _ = Icon.prototype;

_._initialize = function() {
	this._setDom();
	this._bindEvents();
};

_._setDom = function() {
	this.dom.classList.add('icon');
};

_._bindEvents = function() {
	var that = this;
	
	this.dom.addEventListener('mousedown', function(e) {
		var coord = [e.clientX, e.clientY];

		var movement = function(e) {
				var newCoord = [e.clientX, e.clientY];

				that.dom.style.left = that.dom.offsetLeft + (newCoord[0] - coord[0]) + 'px';
				that.dom.style.top = that.dom.offsetTop + (newCoord[1] - coord[1]) + 'px';

				coord = newCoord;
			},
			moveStop = function() {
				document.removeEventListener('mousemove', movement);
				document.removeEventListener('mouseup', moveStop);
				document.removeEventListener('mouseleave', moveStop);
			};

		document.addEventListener('mousemove', movement);
		document.addEventListener('mouseup', moveStop);
		document.addEventListener('mouseleave', moveStop);
	});
};

var Folder = function(dom) {
	this.dom = dom;
	this.popup = null;

	this._initialize();
	this._initializeFolder();
};

var _ = Folder.prototype = Icon.prototype;

_._initializeFolder = function() {
	this._setDomPopup();
	this._setDomFolder();
	this._bindEventsFolder();
};

_._setDomPopup = function() {
	this.popup = new Popup();
};

_._setDomFolder = function() {
	this.dom.classList.add('folder');
};

_._bindEventsFolder = function() {
	var that = this;

	this.dom.addEventListener('dblclick', function() {
		that.popup.show();
	});
};


var Popup = function() {
	this.dom = null;

	this._initialize();
};

var _ = Popup.prototype;

_._initialize = function() {
	this._setDom();
	this._bindEvents();
};

_._setDom = function() {
	var div = document.createElement('div');
	div.classList.add('popup');

	this.dom = div;
	document.querySelector('.back').appendChild(this.dom);
};

_._bindEvents = function() {
	var that = this;
	
	this.dom.addEventListener('mousedown', function(e) {
		var coord = [e.clientX, e.clientY];

		var movement = function(e) {
				var newCoord = [e.clientX, e.clientY];

				that.dom.style.left = that.dom.offsetLeft + (newCoord[0] - coord[0]) + 'px';
				that.dom.style.top = that.dom.offsetTop + (newCoord[1] - coord[1]) + 'px';

				coord = newCoord;
			},
			moveStop = function() {
				document.removeEventListener('mousemove', movement);
				document.removeEventListener('mouseup', moveStop);
				document.removeEventListener('mouseleave', moveStop);
			};

		document.addEventListener('mousemove', movement);
		document.addEventListener('mouseup', moveStop);
		document.addEventListener('mouseleave', moveStop);
	});
};

_.show = function() {
	this.dom.style.display = 'block';
};


// 	this.id = document.getElementById(ID);
// 	this.folderwindow = document.getElementById(window);
// 	this.count = false;
// 	this.id.addEventListener('mousedown', this.touchdown, false);
//     this.id.addEventListener('mousemove', this.touchmove, false);
//     this.id.addEventListener('mouseup', this.touchup, false);
//     this.id.addEventListener('dblclick', this.openWindow,false);
	
// 	this.firstx =0;
//     this.firsty =0;
//     this.movex =0;
//     this.movey =0;
//     this.objx=0;
//     this.objy=0;
//     this.width=0;
//     this.height=0;
//     this.cwidth=0;
//     this.cheight=0;
// }
// Folder.prototype = Icon.prototype;
// Folder.prototype.openWindow = function(){

// 	if(folderwindow.style.display==''||folderwindow.style.display=='block'){
// 		folderwindow.style.display = 'none';
		

// 	}/* question:true, false, ''*/
// 	else if(folderwindow.style.display=='none'){
// 		folderwindow.style.display = 'block';
// 		folderwindow.style.top = (event.pageY)+"px";
// 		folderwindow.style.left = (event.pageX)+"px";
		
	
// 	}
// };


// function Popup(ID) {
// 	this.id = document.getElementById(ID);	
// 	this.count = false;
	
// 	this.id.addEventListener('mousedown', this.touchdown);
//     this.id.addEventListener('mousemove', this.touchmove);
//     this.id.addEventListener('mouseup', this.touchup);
//     this.id.addEventListener('dblclick', this.closewindow);

//     this.firstx =0;
//     this.firsty =0;
//     this.movex =0;
//     this.movey =0;
//     this.objx=0;
//     this.objy=0;
//     this.width=0;
//     this.height=0;
//     this.cwidth=0;
//     this.cheight=0;
// };
// Popup.prototype = Icon.prototype;
// Popup.prototype.closewindow = function(){
// 	this.style.display='none';
// }
