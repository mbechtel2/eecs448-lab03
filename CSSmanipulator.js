function changeColors()
{
    var red = parseInt(document.getElementById("r1").value, 10);
    var green = parseInt(document.getElementById("g1").value, 10);
    var blue = parseInt(document.getElementById("b1").value, 10);
    var wide = parseInt(document.getElementById("width").value, 10); 
    var red2 = parseInt(document.getElementById("r2").value, 10);
    var green2 = parseInt(document.getElementById("g2").value, 10);
    var blue2 = parseInt(document.getElementById("b2").value, 10);    

    if(red < 16)
    {
	red = "0" + red.toString(16);
    }
    else
    {
	red = red.toString(16);
    }
    if(green < 16)
    {
	green = "0" + green.toString(16);
    }
    else
    {
	green = green.toString(16);
    }
    if(blue < 16)
    {
	blue = "0" + blue.toString(16);
    }
    else
    {
	blue = blue.toString(16);
    }

    if(red2 < 16)
    {
	red2 = "0" + red2.toString(16);
    }
    else
    {
	red2 = red2.toString(16);
    }

    if(green2 < 16)
    {
	green2 = "0" + green2.toString(16);
    }
    else
    {
	green2 = green2.toString(16);
    }

    if(blue2 < 16)
    {
	blue2 = "0" + blue2.toString(16);
    }
    else
    {
	blue2 = blue2.toString(16);
    }

    var colorBorder = "#" + red + green + blue;
    var colorBackground = "#" + red2 + green2 + blue2;
    
    document.getElementById('str').style.borderStyle = "solid";
    document.getElementById("str").style.borderColor = colorBorder;
    document.getElementById("str").style.borderWidth = wide;
    document.getElementById("str").style.backgroundColor = colorBackground;
}