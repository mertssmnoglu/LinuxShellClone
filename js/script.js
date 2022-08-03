console.log("Welcome to the shell!")
window.onload = function () {
    this.username = "username"
    this.hostname = "hostname"
    this.workingDirectory = "~"
    document.getElementById("shellinput").value = "";
    document.getElementById("uname-hname").innerText = `${username}@${hostname}:${workingDirectory}$`
}

window.onclick = function() {
    let input = document.getElementById("shellinput")
    input.focus()
}

const commands = [
    {
        name: "clear",
        description: "Clears the console",
        run: function () {
            document.getElementById("terminal").innerHTML = "";
            console.log("Cleared the console")
        }
    }
]

function run(commandInput) {
    let input = commandInput.value
    let command = commands.filter(function (command) {
        return command.name === input;
    })
    if(command === null || command.length === 0) {
        return console.log(`Command ${input} not found`)
    }
    command[0].run()
}

function detectEnter(event,input) {
    let keyCode = event.keyCode ? event.keyCode : e.which;
    if(keyCode == 13) {
        run(input)
        createNewInput(input, {username: 'username', hostname: 'hostname', workingDirectory: '~'});
    }
}

function createNewInput(old_input, uhw){
    // Set the input as old_input to create a new input
    old_input.disabled = true;
    old_input.setAttribute('value', old_input.value);
    old_input.setAttribute('id', 'old_input');
    
    document.getElementById('terminal').innerHTML += `
        <div>
        <span id="uname-hname">${uhw.username}@${uhw.hostname}:${uhw.workingDirectory}$</span>
        <input type="text" class="shellinput" name="shell" id="shellinput" onKeyPress="detectEnter(event, this)">
        </div>
    `

    document.getElementById('shellinput').focus();
}   