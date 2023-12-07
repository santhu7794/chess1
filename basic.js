

a=10;
b=6;
console.log(a,b);
c= 15; 


//data types

var a=10;
var b="string"
console.log(a);
console.log(b);
console.log(a+b);
var c=true;//true and false boolean values
console.log(c);
//variables
var car="tata";
let price =200;
b=price++;
var a,b,c 
a=9;
b=10;
c=8;
console.log(a,b,c);
price++;
console.log(price+car);  // o/p is 202tata (this is concatinate of combined values price  and car)
//operators
var a=10;
var b='20';
console.log(typeof(a));
console.log(typeof(b));
console.log((a+b));
//arthimatic operator
var a=10;
var b='2';
console.log(typeof(a));
console.log(typeof(b));
console.log(a**b);
//Assignment Operators:
var a=10;
var b=9;
b=b+1;
//b+=1;
console.log(a);
console.log(b);
console.log(typeof(a));
console.log(typeof(b));
//comparission
var a=10;
var b=3;
console.log(a===b);
console.log(a==b);
console.log(a>b);
console.log(a>=b);
console.log(a<=b);
console.log(a<b);

//logical 
var a=10;
var b=3;
console.log(a==b&&b==a);
console.log(a>b&&b>a);
console.log(a>b||a<b);
console.log(a<b||b>a);
console.log(!(a==b));
//conditional operators
var a=10;
var b=3;
a<b?console.log("b is big"):console.log("a is big");
//implicit
var a="10";
var b=3;
console.log(a+b);//103
console.log(a-b);//7
console.log(a/b);//3.33333
var a="nami";
var b="name";
console.log(a+b);//naminame
console.log(a-b);//NaN
console.log(a/b);//NaN
//string to number
var a="456";

console.log(a);

a=Number(a);//456
console.log(typeof(a)) //number
// explicit
var a=10.786;
console.log(a);
console.log(parseInt(a));
console.log(parseFloat(a));
console.log(Math.floor(a));
//
a="1";
console.log(String(a));
console.log(typeof(a));
// if else
var a=20;
if(a%2==0){
  console.log("even number")
}
else{
  console.log("odd number")
}
//loop
var a=[1,2,3,4]
        for(i=0; i<a.length;i++){
            
        }
        console.log(a[1])
        //loop
sum=0;
for(i=1;i<=10;i++){
    sum=sum+i;
   
}
console.log(sum)
// if ladder
var a=2;b=10 ;c=14;
if(a>b){
    console.log( " a is coreect");
}
else if(b>c){
  console.log( "b  is correct ");
}
else{
    console.log("c is correct");
}

       //switch
       var Grade='B';
         var result;
        switch(Grade){
            case 'A':result="A Grade";
            break;
            case 'B': result="B Grade";
            break;
            case 'C':result:"C Grade";
            break; 
            default:result="fail";

        } 
        console.log(result);
