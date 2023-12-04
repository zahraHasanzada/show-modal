"use strict"
let model = document.querySelector(".model");
let show_model = document.querySelectorAll(".show-model");
let clos_model = document.querySelector(".clos-model");
let overlay = document.querySelector(".overlay");

const hidemodel =function(){
    model.classList.add("hidden");
    overlay.classList.add("hidden");
};

const displauModel = function(){
    model.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
for(let i = 0;i<show_model.length;i++){
    show_model[i].addEventListener("click",function(){
       displauModel();
    });
    clos_model.addEventListener("click",function(){
        hidemodel();   
    })
    overlay.addEventListener("click",function(){
        hidemodel();
    })
}
document.addEventListener("keydown",function(event){
    if(event.key=="Escape" && !model.classList.contains("hidden"))
   hidemodel();

})

   

