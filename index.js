let cards=[]
let sum=0
let blackJack=false
let gameStatus=true
let message=""



//funcao para trazer randomizadas
function getRandonCard(){
   let randomNumb=Math.floor(Math.random()*14)+1
   if (randomNumb===1){//convertendo Ace to 11 
      return 11
   }else if(randomNumb>10){//convertendo DAMA REI e VALETE para 10
      return 10
   }else{
      return randomNumb
   }
   return randomNumb
}
//iniciar jogo/renderizar
function startGame(){
   let firstCard = getRandonCard()
   let secondCard = getRandonCard()
   sum=firstCard+secondCard
   cards=[firstCard,secondCard]
   renderNewGame()
}
//funcao do jogo base
function renderNewGame(){
    let messageEl=document.getElementById("message-el")
    let sumEl=document.getElementById("sum-el")
    let cardsEl=document.getElementById("cards-el")
    cardsEl.innerHTML="Cards: "+cards+" "
    sumEl.innerHTML="Sum: "+sum

 if(sum===21){
   message="BLACK JACK"
   blackJack=true
   gameStatus=false
   window.alert("GANHOU!!!!")

 }else if(sum<21){
    message="Do You Want To Draw New Cards?"
    gameStatus=true
 }else{
    message="You are out of the GAME!!"
    gameStatus=false
    window.alert("PERDEUU!!")
 }
 messageEl.innerHTML=message
}
//Funcao para obter nova carta
function newCard(){
   if(blackJack===false || gameStatus===true){
      message.innerHTML="Drawing New Card From The Deck!"
      let drawCards=getRandonCard()
      sum+=drawCards
      cards.push(drawCards)
      //cardsEl.innerHTML=cards+" "
      //cardsEl.innerHTML="Cards: "+firstCard+" "++" "+drawCards
      //sumEl.innerHTML="Sum: "+sum
      //renderizar os novos dados 
     renderNewGame()

   }else{

   }
}