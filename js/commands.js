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