var images = ["ku1.jpg", "ku2.jpg", "ku3.jpg", "ku4.jpg", "ku5.jpg"];
var index = 0;

function next()
{    
    if(index == images.length - 1)
    {
	index = 0;
    }
    else
    {
	index++;
    }
    
    document.getElementById("image").src = images[index];

   
}

function previous()
{   
    if(index == 0)
    {
	index = images.length - 1;
    }
    else
    {
	index--;
    }
    
    document.getElementById("image").src = images[index];

    
} 
