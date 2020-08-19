$("button").on("click",buttonClicked);



function buttonClicked() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var phno = document.forms["myForm"]["number"].value;
    var desc = $("#desc").val();

    if (name == "") {
        alert("Full name must be filled out");
        return false;
    }

    else if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    else if (phno == "") {
        alert("Phone number must be filled out");
        return false;
    }

    else if (desc == "") {
        alert("Message must be filled out");
        return false;
    }

    else {
        alert("Input OK")
    }
}

// function validateForm() {
//     var x = document.forms["myForm"]["name"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }