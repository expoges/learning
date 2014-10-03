document.write("nahuelsss");


function random(min, max)
{
	var number = Math.floor(Math.random() * (max - min + 1) + min);
	return number;
}


var rock 		= 0;
var paper 		= 1;
var scissors 	= 2;
var lizard 		= 3;
var spock		= 4;


var options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];


var optionUser 			= prompt("What would you choose?\n\nRock: 0\nPaper: 1\nScissors: 2\nLizard: 3\nSpock: 4", "0");
var optionJavaScript 	= random(0,4);


alert ("You Choose: " + options[optionUser]);
alert ("JavaScript Choose: " + options[optionJavaScript]);


if (optionJavaScript == optionUser)
{
	alert("Tie!!");
}
else if(optionUser == rock)
{
	if(optionJavaScript == scissors || optionJavaScript == lizard)
	{
		alert("You Win!!!");
	}
	else
	{
		alert("LOOSER!!!");
	}
}
else if (optionUser == paper)
{
	if(optionJavaScript == rock || optionJavaScript == spock)
	{
		alert("You Win!!!");
	}
	else
	{
		alert("LOOSER!!!");
	}
}
else if (optionUser == scissors)
{
	if(optionJavaScript == paper || optionJavaScript == lizard)
	{
		alert("You Win!!!");
	}
	else
	{
		alert("LOOSER!!!");
	}
}
else if (optionUser == lizard)
{
	if(optionJavaScript == spock || optionJavaScript == paper)
	{
		alert("You Win!!!");
	}
	else
	{
		alert("LOOSER!!!");
	}
}
else if (optionUser == spock)
{
	if(optionJavaScript == scissors || optionJavaScript == rock)
	{
		alert("You Win!!!");
	}
	else
	{
		alert("LOOSER!!!");
	}
}