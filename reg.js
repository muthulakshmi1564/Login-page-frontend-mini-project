function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;

    if (name === "" || email === "" || phone === "" || pass === "" || cpass === "") {
        alert("All fields are required!");
        return false;
    }

   
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Enter a valid Email address!");
        return false;
    }

    
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Enter a valid 10-digit phone number!");
        return false;
    }

    
    if (pass !== cpass) {
        alert("Passwords do not match!");
        return false;
    }

    alert("Registration Successful!");
    return true;
}
