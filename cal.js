function santhu(val){
   document.getElementById('result').value+=val;
}
function ans(val){
   let x=document.getElementById("result").value  // x= 2;
   let y=eval(x)//+3
   document.getElementById("result").value=y; //y=5;
}
function clr()
{
   document.getElementById("result").value=""
}