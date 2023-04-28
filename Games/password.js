function Checked(){
    var text = document.getElementsByName("Password")[0].value;
    if(text == "33108") {
        window.location.href = "gamesHome.html"
    }
    else if(text == "33801") {
        window.location.href = "../InProgress/Minecraft.html"
    }
    else{
        alert("Password Incorrect")
    }
}