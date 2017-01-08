window.onload = main;

function main()
{
    var name = window.prompt("Enter your name.");
    var hello = "Hello, ";
    window.setTimeout(function() { alert(hello.concat(name)); }, 500);
    window.setTimeout(alertUTCTime, 2000);
    window.setInterval(alternateColor, 10000, "warlock_guides_h1");
}

function alertUTCTime()
{
    var dateAndTime = new Date();
    alert(dateAndTime.toUTCString());
}

function alternateColor(elementId)
{
    var element = document.getElementById(elementId);
    var colors = ["#8D38C9", "#FF9900", "#FF0000", "#00E600"];
    element.style.color = colors[irand(0, 3)];
}

function irand(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

