

$(document).ready(function(){

//================================================
// 			Declare Variables
//================================================
var randomNumber;

// rancom crystal number
var crystal1Number;
var crystal2Number;
var crystal3Number;
var crystal4Number;

// sum of all crystal clicks
var totalClickNumber=0;

var win = 0;
var lose = 0;

//================================================
// 			Random Number
//================================================

function getRandomNumber(){
	randomNumber =1;

	//while ensures no number under 19 are chosen
	while(randomNumber<19){ 
 		randomNumber = Math.floor(Math.random() * 120);
 	}
 	$(".randomNumber").text(randomNumber);
}


//================================================
// 			Crystal Random Numbers
//================================================

function crystalNumbers(){
	crystal1Number=0;
 	crystal2Number=0;
 	crystal3Number=0;
 	crystal4Number=0;
 	var numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

 	// while(crystal1Number === 0 || crystal2Number  === 0 || crystal3Number ===0 || crystal4Number===0){


		crystal1Number = numbers[Math.floor(Math.random() * numbers.length)];
		numbers.splice(numbers.indexOf(crystal1Number),1); // removing number from array

		crystal2Number = numbers[Math.floor(Math.random() * numbers.length)];
		numbers.splice(numbers.indexOf(crystal2Number),1); // removing number from array
		
		crystal3Number = numbers[Math.floor(Math.random() * numbers.length)];
		numbers.splice(numbers.indexOf(crystal3Number),1); // removing number from array
		
		crystal4Number = numbers[Math.floor(Math.random() * numbers.length)];
		numbers.splice(numbers.indexOf(crystal4Number),1); // removing number from array

	
	   	console.log("crystal 1:" + crystal1Number );
	   	console.log("crystal 2:" + crystal2Number );
	   	console.log("crystal 3:" + crystal3Number );
	   	console.log("crystal 4:" + crystal4Number );
	   	console.log(numbers);
   // }
}


//================================================
// 			Start Game
//================================================

// choses random numbers for crystals
crystalNumbers();

// choses random number for random number
getRandomNumber();


//================================================
// 			Crystal Clicks
//================================================

//crystal 1 click. adds random crystal number to total click number 
$(".crystal1").on("click",function(){   
	totalClickNumber += crystal1Number;
	$(".score").text(totalClickNumber);
	outcome(totalClickNumber); // sum of clicks is entered in outcome function
});

//crystal 2 click. adds random crystal number to total click number 
$(".crystal2").on("click",function(){
	totalClickNumber += crystal2Number;
	$(".score").text(totalClickNumber);
	outcome(totalClickNumber);// sum of clicks is entered in outcome function
});

//crystal 3 click. adds random crystal number to total click number 
$(".crystal3").on("click",function(){
	totalClickNumber += crystal3Number;
	$(".score").text(totalClickNumber);
	outcome(totalClickNumber);// sum of clicks is entered in outcome function
});

//crystal 4 click. adds random crystal number to total click number 
$(".crystal4").on("click",function(){
	totalClickNumber += crystal4Number;
	$(".score").text(totalClickNumber);
	outcome(totalClickNumber);// sum of clicks is entered in outcome function
});


//================================================
// 			Win or Lose (outcome)
//================================================

function outcome(total){

	if(total == randomNumber){  // total equals random number you win
		win++;
		$(".wins").text("Wins: " + win);

		reset();
	}else if(total > randomNumber){ // total is greater than random number you lose
		lose++;
		$(".losses").text("Losses: " +lose)
		reset();
	}

}

//================================================
// 			reset 
//================================================


//all crysal numbers, random number and total click sum
function reset(){
	crystalNumbers();
	getRandomNumber();
	totalClickNumber = 0;
	$(".score").text(totalClickNumber);

}


});
