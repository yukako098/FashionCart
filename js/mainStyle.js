// signup.html
var hasAccount = false;
function change_form() {
    console.log(hasAccount);
    hasAccount = !hasAccount;
    console.log(hasAccount);
    var form = document.getElementById("movable-rectangle");
    if (hasAccount) {
        form.style.left = "32%";
        document.getElementById("signup-form-container").style.display = "none";
        document.getElementById("login-form-container").style.display = "block";
    } else {
        form.style.left = "68%";
        document.getElementById("login-form-container").style.display = "none";
        document.getElementById("signup-form-container").style.display =
            "block";
    }
}
