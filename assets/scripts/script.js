var color_display = document.getElementById("color-display");
var heading = document.querySelector(".heading");
var blocks = document.querySelectorAll(".block");
var text_display = document.getElementById("text-display");
var new_game_btn = document.getElementById("new-game-btn");
var easy_game_btn = document.getElementById("easy-level-btn");
var hard_game_btn = document.getElementById("hard-level-btn");
var level_collection = [easy_game_btn,hard_game_btn];
var isEasy = false;
var correct_color;
var block_colors;
var block_num;

//Run first instance of the game
game(isEasy);

//New game button event
new_game_btn.addEventListener("click", function()
{
    game(isEasy);
    text_display.textContent = "";
    heading.style.backgroundColor = "#2C4B69";
});

easy_game_btn.addEventListener("click", function()
{
    if(!isEasy)
    {
        toggleBtn();
        clearBlocks();
        isEasy = true;
        game(isEasy);
        text_display.textContent = "";
        heading.style.backgroundColor = "#2C4B69";
    }
});

hard_game_btn.addEventListener("click", function()
{
    if (isEasy) {
        toggleBtn();
        clearBlocks();
        isEasy = false;
        game(false);
        text_display.textContent = "";
        heading.style.backgroundColor = "#2C4B69";
    }
});

function game(isEasy) {
    removeListeners();
    block_num;
    if(isEasy)
    {
        block_num = 3;
    }
    else
    {
        block_num = 6;
    }
    //Randomly generate colors
    block_colors = generateBlockColors(block_num);
    //select a correct color from the randomly generated colors at random
    correct_color = block_colors[Math.floor(Math.random() * block_colors.length)];
    color_display.textContent = correct_color;
    //for each block
    for (var i = 0; i < block_num; i++) {
        //Set the color of the blocks?
        blocks[i].style.backgroundColor = block_colors[i];
        //set the event listeners for the blocks
        blocks[i].addEventListener("click", listener);
    }
}

function listener()
{
    //check if the block color is the correct color
    if (this.style.backgroundColor === correct_color) {
        //change the display
        changeDisplay(correct_color, block_num);
        heading.style.backgroundColor = correct_color;
        text_display.textContent = "Correct!"
    }
    else {
        this.style.backgroundColor = "#1F1F1F";
        text_display.textContent = "Try Again"
    }
}

function changeDisplay(correct_color, block_num)
{
    for(var i = 0; i < block_num; i++)
    {
        blocks[i].style.backgroundColor = correct_color;
    }
}

function generateBlockColors(numberOfBlocks) {
    var return_blocks_arr = [];
    for(var i = 0; i < numberOfBlocks; i++){
        return_blocks_arr.push(randomize());
    }
    return return_blocks_arr;
}

function randomize()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", "+ g +", "+ b +")";
}

function toggleBtn() 
{
    level_collection.forEach(function(btn) 
    {
       btn.classList.toggle("active-level"); 
    });
}

function clearBlocks()
{
    for(var i = 0; i < blocks.length; i++)
    {
        blocks[i].style.backgroundColor = "#1F1F1F";
    }
}

function removeListeners()
{
    for(var i = 0; i < blocks.length; i++)
    {
        blocks[i].removeEventListener("click", listener);
    }
}