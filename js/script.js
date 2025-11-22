welcomeMessage();

function welcomeMessage() {
    let userName = prompt("Please enter your name:");


    if (!userName || userName.trim() === "") {
        userName = "Guest";
    }

    document.getElementById("Hallo").innerText = "Hallo, " + userName + "!";
}

function validateForm() {
    
}
