const firstPlayer=Math.floor(Math.random()*6 +1)

const player1Image="images/"+"dice"+firstPlayer+".png"

const secondPlayer=Math.floor(Math.random()*6 +1)

const player2Image="images/"+"dice"+secondPlayer+".png"

const firstPlayerimage=document.querySelectorAll("img")[0].setAttribute("src",player1Image)



const secondPlayerimage=document.querySelectorAll("img")[1].setAttribute("src",player2Image)
// console.log(player1Image)
// console.log(player2Image)
if(firstPlayer>secondPlayer){
    document.querySelector("h1").innerHTML="Player 1 wins"
}else if(secondPlayer>firstPlayer){
    document.querySelector("h1").innerHTML="Player 2 wins"
}else{
    document.querySelector("h1").innerHTML="draw" 
}