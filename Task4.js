let displayEl = document.getElementById("display");
let buttonEl = Array.from(document.getElementsByClassName("button"));

buttonEl.map(button =>
    {
        button.addEventListener("click",function(event)
        {
            let valueEl = event.target.innerText;
            if(valueEl === "AC")
            {
                displayEl.innerText = "";
            
            }
            if(valueEl === "del")
            {
                displayEl.innerText = displayEl.innerText.slice(0,-1);
            }
            if(valueEl === "=")
            {
                try
                {
                    displayEl.innerText = eval(displayEl.innerText);
                }
                catch
                {
                    displayEl.innerText = "Error!";
                }
            }
            else
            {
                displayEl.innerText += event.target.innerText;
            }
        })
    })