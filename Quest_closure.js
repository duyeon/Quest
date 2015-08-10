var Obj = function(ID){
  this.id = document.getElementById(ID)
  this.id.addEventListener('click',this.registerEvents);

  };

Obj.prototype.registerEvents = function(){
  this.strTexts = "은 정말 몸에 좋아요 ^^";
  console.log(this.id+this.strTexts);

};
