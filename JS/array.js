//Array
//Single dimensional Array
//method 1
document.write("<h1>Array</h1>");
document.write("<h2>Single Dimensional Array</h2>");
var arr=[23,78,9,54,12,67,34,"Hello"];
document.write(arr+"<br>");
document.write(arr[3]+"<br><br>");
for(m=0; m<arr.length; m++){
    document.write(arr[m]+"<br>");
}
document.write("<br>"+arr.length+"<br>");
//method 2
var arr1=new Array();
arr1[0]="Urooj Rehman";
arr1[1]="Faculty Member";
document.write("<br>"+arr1);

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