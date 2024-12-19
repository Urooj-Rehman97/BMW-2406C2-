document.write("<h1>Operators</h1>");
document.write("<h2>Arithmetic Operators</h2>");
let num1 = 10;
let num2 = 5;
let sum = num1+num2;
let sub = num1-num2;
let mul = num1*num2;
let div = num1/num2;
let rem = num1%num2;
let exp = num1**num2;

document.write("The value of num1 is: "+num1+"<br>");
document.write("The value of num2 is: "+num2+"<br>");
document.write("The addition of num1 and num2 is: "+sum+"<br>");
document.write("The subtraction of num1 and num2 is: "+sub+"<br>");
document.write("The multiplication of num1 and num2 is: "+mul+"<br>");
document.write("The division of num1 and num2 is: "+div+"<br>");
document.write("The remainder of num1 and num2 is: "+rem+"<br>");
document.write("The exponential of num1 and num2 is: "+exp+"<br>");

document.write("<h2>Unary Operators</h2>");

//Unary Operators
num1++;
document.write("Now current value of num1 is: "+num1+"<br>");

num2--;
document.write("Now current value of num1 is: "+num2+"<br>");

//Relational Operators and if statement
document.write("<h2>Relational Operatoprs</h2>");
let a = 24;
let b =23;
if(a!=b){
    document.write("Value of a is not equals to value of b<br>");
}else{
    document.write("Value of a is equals to value of b<br>");
}

let c = 27;
let d = 27;
if(c === d){
    document.write("You are right c is strickly equals to d");
}else{
    document.write("No, c is not strickly equals to d");
}

// Assignment Operators

document.write("<h2>Assignment Operators</h2>");

let number = 6;
document.write("number is: "+number+"<br>");

number+=7;
document.write("Now the value of number is: "+number+"<br>");

number-=4;
document.write("Now the value of number is: "+number+"<br>");
number*=2;
document.write("Now the value of number is: "+number+"<br>");
number/=3;
document.write("Now the value of number is: "+number+"<br>");
number%=2;
document.write("Now the value of number is: "+number+"<br>");

// Logical Operators
//AND Operator
document.write("<h2>Logical Operators</h2>");
document.write("<h3>Displaying Grade using AND Operator</h3>");

let per=prompt("Enter your percentage: ");
if(per>=80 && per<=100){
    document.write("Your percentage is: "+per+". Your grade is A-One");
}else if(per>=70 &&per<=79){
    document.write("Your percentage is: "+per+". Your grade is A");

}else if(per>=60 && per<=69){
    document.write("Your percentage is: "+per+". Your grade is B");

}else if(per>=50 && per<=59){
    document.write("Your percentage is: "+per+". Your grade is C");

}else if(per>=40 && per<=49){
    document.write("Your percentage is: "+per+". Your grade is D");

}else{
    document.write("Your percentage is: "+per+". You are fail");

}
//built-in function prompt
// let name=prompt("Enter your Name: ");
// document.write("<h1>"+name+"</h1>");

//OR Operator
document.write("<h3>OR Operator</h3>");

let maths = 89;
let phy = 39;
let chem = 78;
if(maths <40 || phy <40 || chem<40){
    document.write("you are Fail");
}else{
    document.write("You are Pass the Exam");
}

//NOT Operator
document.write("<h3>NOT Operator</h3>");

let i=4;
let j=3;
if(!(i!=j)){
    document.write("i is not equals to j");
}

//Ternary Operator

document.write("<h2>Ternary Operator</h2>");

a= 45;
b=34;
let result = (a>b)?"a is greater than b":"a is not greater than b";
document.write(result);