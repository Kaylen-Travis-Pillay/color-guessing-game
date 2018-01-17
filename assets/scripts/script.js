var new_game_btn = document.getElementById("new-game-btn");
var easy_btn = document.getElementById("easy-level-btn");
var hard_btn = document.getElementById("hard-level-btn");
var current_level = "hard";

//This performs the mouse events on the new game button
new_game_btn.addEventListener("mouseover", function()
{
    this.classList.add("button-hover");
});
new_game_btn.addEventListener("mouseout", function () 
{
    this.classList.remove("button-hover");
});
new_game_btn.addEventListener("mousedown", function () 
{
    this.classList.remove("button-hover");
    this.classList.add("active-level");
});
new_game_btn.addEventListener("mouseup", function () 
{
    this.classList.remove("active-level");
    this.classList.add("button-hover");
});

//This performs the events on the easy button
easy_btn.addEventListener("mouseover", function()
{
    if(current_level !== "easy")
    {
        this.classList.add("button-hover");
    }
});
easy_btn.addEventListener("mouseout", function()
{
    if(current_level !== "easy")
    {
        this.classList.remove("button-hover");
    }
});
easy_btn.addEventListener("mousedown", function()
{
    if(current_level !== "easy")
    {
        this.classList.remove("button-hover");
        this.classList.add("active-level");
    }
});
easy_btn.addEventListener("mouseup", function()
{
    if(current_level !== "easy")
    {
        this.classList.remove("active-level");
        this.classList.add("button-hover");
    }    
});
easy_btn.addEventListener("click", function()
{
    if(current_level !== "easy")
    {

    }
});