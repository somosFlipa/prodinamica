const close = document.querySelector("#cierre");
const popup = document.querySelector("#popup");
const postular = document.querySelector("#postular");

postular.addEventListener("click",()=>{
    popup.classList.remove("none");
})
close.addEventListener("click",()=>{
    popup.classList.add("none");
})

