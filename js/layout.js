function makeCard(i, j){
	leftValue = (180).toString() + 'px';
	topValue = (90).toString() + 'px';
	var temp = document.createElement('div');
	temp.setAttribute('class','myCard gameCard');
	temp.style.left = leftValue;
	temp.style.top = topValue;
	return temp;
}
	
function makeLayout(givenRows){
	var rows = [[0,1,0,1],[1,1,1,1],[0,1,0,1]];
	console.log(rows);
	var temp;
	for (i=0; i<3; i++){
		var columns = [];
		for (j=0; j<4; j++){
			temp = makeCard(i,j);
			cardGrid = document.getElementsByClassName('cardGrid')[0];
			if (temp != null){
				cardGrid.appendChild(temp);
			}
			if (rows[i][j] == 0){
				temp.style.visibility = 'hidden';
			}
		}
		rows[i] = columns;
	}
	
}
makeLayout(globalRows);