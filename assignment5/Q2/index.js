function result() {
    var form = document.form;
    var firstName = form.firstname.value;
    var lastName = form.lastname.value;
    var city = form.city.value;


    var person = {
        "Firstname": firstName,
        "Lastname": lastName,
        "City": city,
        "Bills": ["Rent", "Internet", "Water", "Electricity"]
    };

    var bills = '';
    for (i in person.Bills) {
        bills +="\n" + person.Bills[i];
    }

    alert("Hello, " + person.Firstname +".\nYour pending bills are:" + bills);
}