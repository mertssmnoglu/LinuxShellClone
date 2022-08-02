console.log("Welcome to the shell!")
window.onload = function () {
    this.username = "username"
    this.hostname = "hostname"
    this.workingDirectory = "~"
    document.getElementById("shellinput").value = "";
    document.getElementById("uname-hname").innerText = `${username}@${hostname}:${workingDirectory}$`
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
