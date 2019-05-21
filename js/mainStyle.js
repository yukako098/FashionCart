//index.html
var isClicked = false;
function open_myBags_popup() {
    isClicked = !isClicked;
    if (isClicked) {
        document.getElementById("my_bag_popup").style.display = "block";
    } else {
        document.getElementById("my_bag_popup").style.display = "none";
    }
}

// signup.html
var hasAccount = false;
function change_form() {
    hasAccount = !hasAccount;
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
