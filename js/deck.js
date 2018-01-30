
Deck = []
for (i = 0; i < 78; i++){
	Deck.push(i.toString() + ' the og');
}

var remainingCards = 78;

flipped = [[0,0,0,0][0,0,0,0][0,0,0,0]]

function printStuff(ele){
	//check if the card wasnt clicked yet
	if ( ele.css('background-image').indexOf('cardback.png') >= 0 ){
		index = (Math.round(Math.random()*(remainingCards -1 )));
		randomCardName = Deck.pop(index);
		remainingCards--;
		console.log('first time clicked!');
	}
	if (checkIfGameOver()){
		console.log('game over');
	}
}

$(".myCard").on('click', function(){
	$(this).css('background-image','url("images/bg.jpg")');
	$(".displayCard").css('background-image','url("images/bg.jpg")');
	printStuff($(this));
});

function checkIfGameOver(){
	var cardGrid = document.getElementsByClassName('cardGrid')[0];
	var ExistingCardsArray = cardGrid.children();
	var count = 0;
	for (j=0; j<4; j++){
		if (globalRows[i][j] == 1){
			if (ExistingCardsArray[count].css('background-image').indexOf('cardback.png') >= 0 ){
				return false;
			}
			count++;
		}
	}
	return true;
}