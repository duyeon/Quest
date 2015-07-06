var input = prompt("숫자를 입력하세요.");
var i = 1;
var sum = "*";
var blank ="";
while(i<=input){
    for(j=0;j<input-i;j++){
        blank += " ";
    }
    console.log(blank+sum);
    sum += "**";
    i++;
    blank = "";
}
