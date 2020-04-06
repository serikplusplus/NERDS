var write__us = document.querySelector(".write__us");
var exit = document.querySelector(".exit");
var open_write = document.querySelector(".map_button");

open_write.addEventListener("click", function(evt){
    evt.preventDefault();
    write__us.classList.add("write__us--open");
});
exit.addEventListener("click", function(evt){
    write__us.classList.remove("write__us--open");
});