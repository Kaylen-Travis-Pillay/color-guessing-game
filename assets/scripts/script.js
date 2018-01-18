var new_game_btn = document.getElementById("new-game-btn");
var easy_btn = document.getElementById("easy-level-btn");
var hard_btn = document.getElementById("hard-level-btn");
var block_list = document.getElementsByClassName("block");
var button_arr = [easy_btn, hard_btn];
var current_level = "easy";

hard_btn.addEventListener("click", function()
{
    if(current_level === "easy")
    {
        button_arr.forEach(function (btn) {
            btn.classList.toggle("active-level");
        });
        current_level = "hard";
    } 
});

easy_btn.addEventListener("click", function () 
{
    if(current_level === "hard")
    {
        button_arr.forEach(function (btn) {
            btn.classList.toggle("active-level");
        });
        current_level = "easy";
    }
});

for (var index = 0; index < block_list.length; index++) {
    block_list[index].addEventListener("click", function(){
        this.classList.remove("block");
    });
}