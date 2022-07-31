console.log("Welcome to the shell!")
window.onload = function () {
    document.getElementById("shellinput").value = "";
}

const commands = [
    {
        name: "clear",
        description: "Clears the console",
        run: function () {
            document.getElementById("shellinput").value = "";
            console.log("Cleared the console")
        }
    }
]

function run(commandInput) {
    for (const command of commands) {
        if(command.name == commandInput.value){
            return command.run()
        }
    }
}

function detectEnter(event,input) {
    let keyCode = event.keyCode ? event.keyCode : e.which;
    if(keyCode == 13) {
        run(input)
    }
}
