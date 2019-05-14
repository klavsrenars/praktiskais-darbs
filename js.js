







function myFunction() {
    var text;
    var grade = document.getElementById("myInput").value;
  
    switch(grade) {
      case "1":
     text = "😭";
      break;

      case "2":
      text = "😔";
      break;

     case "3":
     text = "🙄 ";
     break;


     case "4":
     text = "😑";
     break;



     case "5":
     text = "😐";
     break;



    case "6":
    text = "😪";
    break;


    case "7":
    text = "😏";
    break;


    case "8":
    text = "😌";
    break;

    case "9":
    text = "😃";
    break;


    case "10":
    text = "🤪";
    break;


      default:
      text = "I have never heard of that fruit...";
    }
    document.getElementById("demo").innerHTML = text;
  }