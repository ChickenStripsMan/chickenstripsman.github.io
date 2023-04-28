function Checked(){
    var text = document.getElementsByName("Password")[0].value;
    if(text == "33108") {
        window.location.href = "../Games/gamesHome.html"
    }
    else if(text == "33801") {
        alert("Work In Progress Games")
        window.location.href = "../InProgress/inProgressHome.html"
    }
    else{
        alert("Password Incorrect")
        window.location.href = "../index.html"
    }
}