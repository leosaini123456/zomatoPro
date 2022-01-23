let pop = document.querySelector(".bg-model");
let body = document.getElementById("body");
let cross = document.getElementById("cross");

let count;

function popup()
{
   count =   setInterval(
        function()
        {
            pop.classList.add("active"); 
        },
        3000
    )
}

cross.addEventListener("click",function()
{   
    pop.classList.remove("active"); 
    clearInterval(count);
})
