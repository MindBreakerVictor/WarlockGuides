window.onload = function ()
{
    if (localStorage.getItem("name") == undefined)
        localStorage.setItem("name", window.prompt("Enter your name."));

    var hello = "Hello, ";
    window.setTimeout(function()
    { 
        alert(hello.concat(localStorage.getItem("name").concat(".")));
    }, 500);

    window.setTimeout(alertUTCTime, 1000);
    window.setInterval(alternateColor, 10000, "warlock_guides_h1");

    var psParagraph = document.createElement("p");
    var psTextNode = document.createTextNode("P.S. This section need to be formatted.");
    psParagraph.appendChild(psTextNode);
    document.getElementById("cchanges").appendChild(psParagraph);
}

function alertUTCTime()
{
    alert(new Date().toUTCString());
}

function alternateColor(elementId)
{
    var colors = ["#8D38C9", "#FF9900", "#FF0000", "#00E600"];
    document.getElementById(elementId).style.color = colors[irand(0, 3)];
}

function irand(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

