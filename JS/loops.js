//Loops
//While Loop
document.write("<h1>Loops</h1>");
document.write("<h2>While Loop</h2>");
let i = 0;
while(i<=10){
    document.write(i+". JavaScript<br>");
    i++;
}

//Do-while Loop
document.write("<h2>Do_While Loop</h2>");

let j = 10;
do{
    document.write(j+"<br>");
    j--;
}while(j>0);

//For Loop
document.write("<h2>For Loop</h2>");
for(k=0; k<=10; k++){
    document.write(k+"<br>");
}

//even number
document.write("<h3>Display Even Numbers using For Loop</h3>");
for(num=0; num<=20; num++){
    if(num%2==0){
        document.write(num+"<br>");
    }
}

