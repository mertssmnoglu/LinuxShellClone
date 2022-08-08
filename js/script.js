console.log("Welcome to the shell!")
let username = "username"
let hostname = "hostname"
let workingDirectory = "~"
window.onload = function () {
    document.getElementById("shellinput").value = "";
    document.getElementById("uname-hname").innerText = `${username}@${hostname}:${workingDirectory}$`
}

window.onclick = function() {
    let input = document.getElementById("shellinput")
    input.focus()
}

function run(commandInput) {
    let params = commandInput.value.split(" ")
    let command = params[0]
    if ( findCommandByName(command) == undefined ){
        return { "status": "Command not found" }
    } else if (typeof(findCommandByName(command) == "object")){
        findCommandByName(command).run(params)
        return { "status": "OK" }
    }
}

function detectEnter(event,input) {
    let keyCode = event.keyCode ? event.keyCode : e.which;
    if (keyCode == 13) {
        run(input)
        createNewInput(input, {username: username, hostname: hostname, workingDirectory: workingDirectory});
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

function findCommandByName(param) {
    let command = commands.filter(function (command) {
        return command.name === param;
    })
    if(command === null || command.length === 0) {
        return undefined
    }
    return command[0]
}
