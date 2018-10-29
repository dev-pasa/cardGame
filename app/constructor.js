
function Card(id, name,storyline, description){
  this.id = id;
  this.name = name;
  this.storyline = storyline;
  this.description = description;

  Card.allCards.push(this);
}
Card.allCards = [];
Card.cardDeck = [];
//++++++++++++++
//Nightmare Card
new Card(1, 'Meet Death', 'You are strong child, but I am beyond strength ', 'all survival stats set to zero');
function card1(){
  health = 0;
  hope = 0;
  resources = 0;
  protection = 0;
}
new Card(2, 'Get mauled','', 'Drop to 1 hp')
function card2(){
  updateHealth('set', 1);
}
new Card(3, 'find/witness bad thing' ,'', 'Drop to 1 hope');
function card3(){
  hope = 1;
}
new Card(4, 'Get Robbed', '', 'Drop to 1 resources');
function card4(){
  resources = 1;
}
new Card(5, 'Lose shelter','', 'Drop to 1 protection')
function card5(){
  protection = 1;
}

//++++++++++++++++++
//Net Positive Cards
new Card(6, 'Good night Sleep', 'You slept well despite your pains', '+health')
function card6(){
  health +=5;
}
new Card(7, 'Signs of Society' , 'You see signs of soceity', '+hope');
function card7(){
  hope += 5;
}
new Card(8, 'find primitive weapon', 'find a sharp rock or club like stick', '+resource')
function card8(){
  resource += 5;
}
new Card(9, 'Found shelter during storm', 'You find a place to weather to storm', '+ protection')
function card9(){
  protection +=5;
}
//++++++++++++++++++
//Net Negative Cards
new Card(10, 'Bear.', 'The local wildlife', '--hp')
function card10(){
  health -= 15;
}
new Card(11, 'Solitude', 'you miss another human being' , '--hope')
function card11(){
  hope -= 15;
}
new Card(12, 'Banditos', 'Your stash was pilfered', '--resources')
function card12(){
  resources -= 15;
}
new Card(13, 'Shelter destroyed', '', '--Protection')
function card13(){
  protection -= 15;
}
//++++++++++++++++++++++++++++++++++
//Mostly Negative Hybrid Value Cards
new Card(14, 'Meet merchant','He is selling apples', '-- resource + hp')
function card14(){
  resources -= 20;
  health += 10
}
new Card(15, 'Build fire', 'You prepare for the elements', '--resource +protection')
function card15(){
  resources -= 15;
  protection += 15;
}
new Card(16, 'Bad Water ','--hope +hp')
function card16(){
  hope -= 25;
  health += 10;
}
new Card(17, 'Chased fun thing','','--protection +hope')
function card17(){
  protection -= 30;
  hope += 20;
}
new Card(18, 'Find corpse' ,'Ew', '--hope +resources')
function card18(){
  hope -= 20;
  resources += 15
}
//++++++++++++++++++++++++++++++++++
//Mostly Positive Hybrid Value Cards
new Card(19, 'Exhausting Hunt', 'You spend hours running down a deer', '++nutriton -hp')
function card19(){
  resources += 25;
  health -= 10;
}


//++++++++++++++++++
//Triple Value Cards
new Card(20, 'Meet merchant', 'He is selling warm clothes', '--- resource + protection +hope')
function card20(){
  resource -= 30;
  proteciton += 5;
  hope += 5;
}
//++++++++++++++++++
//Random Chance Card
// new Card('Approach stranger', 'make friend or get robbed' , '++ socialization OR -hope -socializtion')

// function approachStranger(){
//     var temp = Math.round(Math.random);
//     if(temp === 1){
//         ++ socializiton
//     }
//     else{ -hope -socializiton}
// }
