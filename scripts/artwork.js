window.onload = function ()
{
    var mainDiv = document.getElementById("artgallery");
    var childrenArray = Array.from(mainDiv.childNodes);

    for (let child of childrenArray)
    {
        if (child.nodeType != 1)
            continue;

        var subChildrenArray = Array.from(child.childNodes);

        for (let subChild of subChildrenArray)
        {
            if (subChild.nodeType != 1)
                continue;

            var sibling;
            
            switch (subChild.tagName)
            {
                case "INPUT":
                    sibling = subChild;
                    break;
                case "IMG":
                    sibling.addEventListener("click", function() { createOverlayImage(subChild.src); });
                    break;
                default:
                    break;
            }
        }
    }

    var artworkCanvasContext = document.getElementById("artwork_canvas").getContext("2d");
    artworkCanvasContext.font = "30px Arial";
    artworkCanvasContext.fillStyle = "#ffffff";
    
    var hello = "Hello, ";
    artworkCanvasContext.fillText(hello.concat(localStorage.getItem("name").concat(".")), 10, 50);
}

function createOverlayImage(src)
{
    var overlayDiv = document.createElement("div");
    overlayDiv.style.position = "fixed";
    overlayDiv.style.left = 0;
    overlayDiv.style.top = 0;
    overlayDiv.style.width = "100%";
    overlayDiv.style.height = "100%";
    overlayDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    overlayDiv.id = "overlay_div";
    
    document.body.appendChild(overlayDiv);

    document.getElementById("overlay_div").addEventListener("click", function()
    {
        this.parentNode.removeChild(this);
    });

    var overlayImage = document.createElement("img");
    overlayImage.src = src;
    overlayImage.style.width = "95%";
    overlayImage.style.height = "95%";
    overlayImage.style.top = "2.5%";
    overlayImage.style.left = "2.5%";

    document.getElementById("overlay_div").appendChild(overlayImage);
}

