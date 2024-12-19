let day = prompt("Enter Day Name: ");
switch(day){
    case "Monday": case "monday": case "MONDAY":
        document.write("<h2 style='color:maroon;'>Today is Monday<h2>");
        document.write("Begining of new week");
        break;
    case "Tuesday": case "tuesday":
        document.write("Today is Tuesday<br>");
        document.write("Another busy day");
        break;
    case "Wednesday": case "wednesday":
        document.write("Today is Wednesday<br>");
        document.write("Headache");
        break;
    case "Thursday": case "thursday":
        document.write("Today is Thursday<br>");
        document.write("Same as wednesday");
        break;
    case "Friday": case "friday":
            document.write("Today is Friday<br>");
            document.write("Bless Day");
         break;
    case "Saturday": case "saturday":
            document.write("Today is Saturday<br>");
            document.write("Weekend");
          break;
    case "Sunday": case "sunday":
                 document.write("Today is Sunday<br>");
                 document.write("Holiday");
            break;
    default:
        document.write("Invalid value");

}