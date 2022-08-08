const commands = [
    {
        name: "clear",
        description: "Clears the console",
        run: function (params) {
            document.getElementById("terminal").innerHTML = "";
        }
    }
]