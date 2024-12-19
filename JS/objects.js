let info = {
    User_name : "Urooj Rehman",
    User_email : "urooj@gmail.com",
    User_age: 27,
    Destination: "Faculty Member"
};

document.write("<h1>Objects</h1>");
// document.write(info);
document.write("User Name: "+info.user_name+"<br>User Email: "+info.User_email+"<br>User Age: "+info.user_age);

document.write("<h2>Displaying objects using for-of Loop</h2>");
for(let value in info){
    document.write(value+": "+info[value]+"<br>");
}

let books = new Object();

books.Title = "Pakiza";
books.Author = "Abc";
books.Edition = "Second";
books.Year = 2023;
document.write("<h2>Another Objects</h2>");
// document.write(books.Title);
for(var a in books){
    document.write(a+": "+books[a]+"<br>");
}
