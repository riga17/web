function validation(){

    var name = document.getElementById("name").value;

    var valid_name_regex = /^[A-Za-z]+$/;

    var age = document.getElementById("age").value;

    var valid_age_regex = /^[0-9]+$/;

    var city = document.getElementById("city").value;

    var gmail = document.getElementById("gmail").value;

    var valid_gmail_regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if(!(name.match(valid_name_regex)) || !(age.match(valid_age_regex)) || (city == "")){

        if(!(name.match(valid_name_regex))){
            document.getElementById("name_error").style.visibility = "visible";
            document.getElementById("name").style.borderColor = "red";
        }else{
            document.getElementById("name_error").style.visibility = "hidden";
            document.getElementById("name").style.borderColor = "black";
        }

        if(!(age.match(valid_age_regex))){
            document.getElementById("age_error").style.visibility = "visible";
            document.getElementById("age").style.borderColor = "red";
        }else{
            document.getElementById("age_error").style.visibility = "hidden";
            document.getElementById("age").style.borderColor = "black";
        }

        if(city == ""){
            document.getElementById("city_error").style.visibility = "visible";
            document.getElementById("city").style.borderColor = "red";
        }else{
            document.getElementById("city_error").style.visibility = "hidden";
            document.getElementById("citiy").style.borderColor = "black";
        }

        if(!(gmail.match(valid_gmail_regex))){
            document.getElementById("gmail_error").style.visibility = "visible";
            document.getElementById("gmail").style.borderColor = "red";
        }else{
            document.getElementById("gmail_error").style.visibility = "hidden";
            document.getElementById("gmail").style.borderColor = "black";
        }


        return false;
    
        
    }else{
    document.getElementById("name_error").style.visibility = "hidden";
    document.getElementById("name").style.borderColor = "black";
    document.getElementById("age_error").style.visibility = "hidden";
    document.getElementById("age").style.borderColor = "black";
    document.getElementById("city_error").style.visibility = "hidden";
    document.getElementById("citiy").style.borderColor = "black";
    document.getElementById("gmail_error").style.visibility = "hidden";
    document.getElementById("gmail").style.borderColor = "black";

    }


}