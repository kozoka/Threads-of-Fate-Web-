var deck = angular.module('deck', []);

deck.controller('deckController', function($scope){

	Deck = [];
	deckMap = {};
	for (i = 0; i < 78; i++){
		Deck.push(i.toString() + ' the og');
		deckMap[Deck[i]] = "description of " + i.toString();
	}

	var remainingCards = 78;
	var currentDescription = "asf";
	//$scope.currentDescription = currentDescription;


	function printStuff(ele){
		//check if the card wasnt clicked yet
		if ( ele.css('background-image').indexOf('cardback.png') >= 0 ){
			index = (Math.round(Math.random()*(remainingCards -1 )));
			randomCardName = Deck.splice(index, 1)[0];
			remainingCards--;
			currentDescription = deckMap[randomCardName];
		}
		else{
			currentDescription = ((ele.css("background-image")).split('/').pop()).slice(0, -2);
			console.log(currentDescription);
		}
		$scope.currentDescription = deckMap[randomCardName];
		$scope.$apply();
	}

	$(".myCard").on('click', function(){

		printStuff($(this));
		$(this).css('background-image','url("images/bg.jpg")');
		$(".displayCard").css('background-image','url("images/bg.jpg")');
		//currentDescription = (($(this).css("background-image")).split('/').pop()).slice(0, -2)
		if (checkIfGameOver($(this))){
			// game is over
		}
	});
	

	function checkIfGameOver(ele){
		var cardGrid = document.getElementsByClassName('cardGrid')[0];
		var ExistingCardsArray = cardGrid.childNodes;
		var count = 0;
		for (i=0; i<3; i++){
			for (j=0; j<4; j++){
				tempIndex = j + i*4;
				tempCard = $(ExistingCardsArray[tempIndex]);
				//console.log(i, j, tempCard[0]==ele[0]);
				// check every card except the one we just clicked
				if ((globalRows[i])[j] == 1 && tempCard[0] != ele[0]){				
					if (tempCard.css('background-image').indexOf('cardback.png') >= 0 ){
						//console.log(tempCard === ele);
						console.log(i,j);
						return false; //comment
					}
					count++;
				}
			}
		}
		return true;
	}


});

