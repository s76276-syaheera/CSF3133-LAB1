function validateForm() {
    let fname = document.forms["myForm"]["fname"].value;
    
    //check if the input is a numeric
    if (fname === "") {
        alert("First Name must be filled out");
        return false;
    }

}
