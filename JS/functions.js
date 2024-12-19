//Functions
//Function without Parameter

document.write("<h1>Functions</h1>");
document.write("<h2>Functions without Parameter</h2>");

//function definition
function calculation(){
    let x = 10;
    let y = 12;
    let sum = x+y;
    let sub = x-y;
    let mul = x*y;
    let div = x/y;
    let rem = x%y;
    document.write("The value of x is : "+x+"<br>");
    document.write("The value of y is : "+y+"<br>");
    document.write("Addition of x and y is: "+sum+"<br>");
    document.write("Subtraction of x and y is: "+sub+"<br>");
    document.write("Product of x and y is: "+mul+"<br>");
    document.write("Division of x and y is: "+div+"<br>");
    document.write("And the remainder is: "+rem+"<br>");
}

//function calling
calculation();
//Multidimensional Array
document.write("<h2>Multidimensional Array</h2>");
 students = [
    ["Usama", 24, "DISM"],
    ["Ali Shan", 20, "DISM"],
    ["Maheen",19,"HDSE-I"],
    ["Asra",18,"HDSE-I"]
 ];

 document.write(students+"<br>");
document.write(students[0][1]);

document.write("<h3>display Multidimensional array using nested loop</h3>");
document.write("<table border='1' cellpadding='20px' cellspacing='0'>");
document.write("<tr><th>Std_Name</th><th>Std_Age</th><th>Semester</th></tr>");
for(i=0; i<students.length; i++){
    document.write("<tr>")
    for(j=0; j<3; j++){
        document.write("<td>"+students[i][j]+"</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

document.write("<br><br>");
calculation();

// document.write("<br><br>");
// calculation();
// document.write("<br><br>");
// calculation();
// document.write("<br><br>");
// calculation();

//functions with Parameter
function cal(a,b){
    document.write("<h2>Functions with Parameter</h2>");
    let sum = a+b;
    let sub = a-b;
    let mul = a*b;
    let div = a/b;
    let rem = a%b;
    document.write("The value of a is : "+a+"<br>");
    document.write("The value of b is : "+b+"<br>");
    document.write("Addition of a and b is: "+sum+"<br>");
    document.write("Subtraction of a and b is: "+sub+"<br>");
    document.write("Product of a and b is: "+mul+"<br>");
    document.write("Division of a and b is: "+div+"<br>");
    document.write("And the remainder is: "+rem+"<br>");
}

cal(8,9);
cal(60,12);

//functions with return type

function add(val1, val2){
    document.write("<h2>Functions with Return type</h2>");

    // let val1 = 12;
    // let val2 = 24;
    let result = val1 + val2;
    return result;
}

let answer = add(24,27);
document.write(answer);

//Arrow function

let arrowfunc= ()=>{
    document.write("<h2>Arrow Function</h2>");

    document.write("Arrow Function");
}

arrowfunc();

