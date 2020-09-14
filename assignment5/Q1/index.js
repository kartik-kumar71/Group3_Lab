function result() {
    var form = document.form;
    var firstName = form.firstname.value;
    var lastName = form.lastname.value;
    var city = form.city.value;

    var originalJSON = {"Firstname": firstName, "Lastname": lastName, "City": city};
    var stringifiedJSON = JSON.stringify(originalJSON);
    $("#form").append("<h4>In JSON format: " + stringifiedJSON +"</h4><br>");

    var parsedJSON = JSON.parse(stringifiedJSON);
    $("#form").append("<h4>Each value in the JSON object<br>Firstname: " + parsedJSON.Firstname + ", Lastname: " + parsedJSON.Lastname + ", City: " + parsedJSON.City + "</h4>");
}