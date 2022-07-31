const shellCommands = [
    {
        name: "help",
        description: "Gets informations about commands",
        usage: "help [command]",
        handler: helpHandler
    }
]

console.log("Welcome to the shell!")
let shellInput = document.getElementById("shellinput")
function myFunction() {
    console.log("a")
}