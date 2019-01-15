
var numberofSquares=6;
var colors=[];
var pickcolor;
var squares=document.querySelectorAll(".square");
var pickedcolor=document.querySelector("#colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var modes=document.querySelectorAll(".mode");

init();

function init()
{

	setupModeButtons();
	setupSquareButtons();
	resetfunc();
}

function setupSquareButtons()
{
	for(var i=0;i<squares.length; i++)
	{
	squares[i].addEventListener("click", function(){
		var clickedcolor=this.style.backgroundColor;

		if(clickedcolor === pickcolor)
		{
			messagedisplay.textContent="CORRECT!!";
			reset.textContent="PLAY AGAIN ?";
			changeColors(clickedcolor);
			h1.style.background=clickedcolor;
		}
		else
		{
			this.style.background="#232323";
			messagedisplay.textContent="TRY AGAIN";
		}
	});
	}

}

function setupModeButtons()
{
	for(var i=0;i<modes.length;i++)
	{
	modes[i].addEventListener("click",function() {
		modes[0].classList.remove("selected");
		modes[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numberofSquares=3 : numberofSquares=6;

		resetfunc();
	});
	}

}

function resetfunc() {
	
	colors=generateRandomColors(numberofSquares);
	pickcolor=pickColor();
	pickedcolor.textContent=pickcolor;
	reset.textContent="NEW COLORS";
	for(var i=0;i<squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else
			squares[i].style.display="none";
	}
	 h1.style.backgroundColor="steelblue";
	 messagedisplay.textContent="";	
}


reset.addEventListener("click", function() {
	resetfunc();
});

pickedcolor.textContent=pickcolor;



function changeColors(color)
{
	for(var i=0;i< squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function generateRandomColors(num)
{
	var arr=[]

	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function pickColor()
{
	var ran=Math.floor(Math.random()*colors.length);
	return colors[ran];
}

function randomColor() {
	var r=Math.floor(Math.random()* 256);
	var g=Math.floor(Math.random()* 256);
	var b=Math.floor(Math.random()* 256);
	return "rgb("+r+", "+g+", "+b+")";

}

