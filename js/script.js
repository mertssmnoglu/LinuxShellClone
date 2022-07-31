console.log("Welcome to the shell!")
window.onload = function () {
    document.getElementById("shellinput").value = "";
}

function run(command) {
    
}

function detectEnter(event,input) {
    let keyCode = event.keyCode ? event.keyCode : e.which;
    if(keyCode == 13) {
        run(input)
        document.getElementById("shellinput").value = "";
    }
}
