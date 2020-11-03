
let button = document.getElementById('menu-btn')
let dropdown = document.getElementById('dropdown')

button.addEventListener("click", function(){
    if(dropdown.className == "show"){
        dropdown.classList.toggle("hidden")
        dropdown.classList.remove("show")
    }else{
        dropdown.className = "show"
    }
}) 

