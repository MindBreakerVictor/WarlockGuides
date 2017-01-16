window.onload = function ()
{
    var note = document.getElementById("glyphs").getElementsByTagName("p")[0];

    note.setAttribute("data-activated", "0");
    
    note.addEventListener("mouseenter", function()
    {
        if (this.getAttribute("data-activated") == "0")
            note.innerHTML = note.innerHTML.concat(" Acestea au fost alese dupa uzabilitate.");
    });

    note.addEventListener("mouseleave", function()
    {
        if (this.getAttribute("data-activated") == "0")
        {
            this.setAttribute("data-activated", "1");
            note.innerHTML = note.innerHTML.slice(0, note.innerHTML.search(" Acestea"));
        }
    });
}

