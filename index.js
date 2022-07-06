var ran1 = Math.floor(Math.random()*6)+1;

if (ran1===1){
  document.querySelectorAll("img")[0].setAttribute("src","https://cdn2.iconfinder.com/data/icons/gambling/32/dice-number-1-512.png")
}
else if (ran1===2){
  document.querySelectorAll("img")[0].setAttribute("src","https://cdn2.iconfinder.com/data/icons/gambling/32/dice-number-2-512.png")
}
else if (ran1===3){
  document.querySelectorAll("img")[0].setAttribute("src","https://cdn2.iconfinder.com/data/icons/gambling/32/dice-number-3-512.png")
}
else if (ran1===4){
  document.querySelectorAll("img")[0].setAttribute("src","https://cdn2.iconfinder.com/data/icons/gambling/32/dice-number-4-512.png")
}
else if (ran1===5){
  document.querySelectorAll("img")[0].setAttribute("src","https://cdn2.iconfinder.com/data/icons/gambling/32/dice-number-5-512.png")
}

var ran2 = Math.floor(Math.random()*6)+1;

if (ran2===1){
  document.querySelectorAll("img")[1].setAttribute("src","https://cdn2.iconfinder.com/data/icons/gambling/32/dice-number-1-512.png")
}
else if (ran2===2){
  document.querySelectorAll("img")[1].setAttribute("src","https://cdn2.iconfinder.com/data/icons/gambling/32/dice-number-2-512.png")
}
else if (ran2===3){
  document.querySelectorAll("img")[1].setAttribute("src","https://cdn2.iconfinder.com/data/icons/gambling/32/dice-number-3-512.png")
}
else if (ran2===4){
  document.querySelectorAll("img")[1].setAttribute("src","https://cdn2.iconfinder.com/data/icons/gambling/32/dice-number-4-512.png")
}
else if (ran2===5){
  document.querySelectorAll("img")[1].setAttribute("src","https://cdn2.iconfinder.com/data/icons/gambling/32/dice-number-5-512.png")
}

if(ran1>ran2){
  document.querySelector("h1").innerHTML="👻️Player-1 won!"
  document.body.style.backgroundImage = "url('https://media0.giphy.com/media/P9hygc0S8eVs4/giphy.gif')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "100%";
}

else if(ran1<ran2){
  document.querySelector("h1").innerHTML="👻️Player-2 won!"
}
else if(ran1===ran2)
{
  document.querySelector("h1").innerHTML="Draw!!"
}
