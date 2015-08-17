var score =0;

var countTime = function(){
  
  this.limit = 15;
  var e = setInterval(function(){
    
    document.getElementById('timecheck').innerHTML = this.limit;
    this.limit--;
    if(this.limit === 0){
      clearInterval(e);
      document.getElementById('timecheck').innerHTML = "GAMEOVER";
      document.getElementById('display').style.display = 'none';
      alert("당신의 점수는 "+score+" 입니다");
    }
    if(this.limit === 10){
      document.getElementById('timecheck').style.color = "red";
    }
      },1000);}
    


var Mole = function(dom){
  this.dom = document.getElementById(dom);
  this._gamestart();
  
};
var _ = Mole.prototype;
_._gamestart = function(){
  this.dom.addEventListener('click',this._hitmole);
  this._setInterval();
}

_._setInterval = function(){
  var that = this;
  var showtime = Math.random()*1000+2000;
  var e = setInterval(function(){
   
    if(!(that.dom.style.display == "none"))
      that.dom.style.display = "none";
    else that.dom.style.display = "inline-block";
  },showtime);

};

_._hitmole = function(){
  score += 5;
  console.log("hit!!!!!");
  
  document.getElementById("score").innerHTML = score;
  if(!(this.style.display == 'none')){
  this.style.display = 'none';
 
  }
};

