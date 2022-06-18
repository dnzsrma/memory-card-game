import { useEffect, useState } from "react";
function App() {
  const [cards,setCards] = useState([]);
  const [picked,setPicked] = useState([]);
  const [counter,setCounter] = useState(0);
  const [isloading,setIsloading] = useState(true);

  useEffect(() => {
    if(cards.length < 12){
      setIsloading(true);
      getCard();
    }
    else{
      setIsloading(false);
    }
  }, [cards])

  useEffect(() => {
    setCounter(picked.length);
    if(picked.length === 12){
      alert('Congrats! You won!');
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
  }, [picked.length])


  function getCard(){
    fetch('https://db.ygoprodeck.com/api/v7/randomcard.php')
    .then((cardJson) => cardJson.json())
    .then((json) => {
      let card = json.card_images[0].image_url
      setCards(arr => [...arr, card]);
  })
  }
function newGame(){
  setIsloading(true);
  setCards([]);
  setPicked([]);
  setCounter(0);
} 

function clicked(e){
  if(picked.includes(e)){
    alert('GAME OVER SCORE: ' + picked.length);
    newGame();
  }
  else{
    setPicked(arr => [...arr, e]);
    randomizeArray();
  }
}
function randomizeArray(){
  setCards(cards.sort(function(){ return Math.random() - 0.5}))
}

  return (
    <div className="App">
      <header>
      <div id="counter">
        <p> Score: </p>
        <p>{counter} / 12</p>
      </div>
      <h1>YU-GI-OH MEMORY GAME!</h1>
      </header>
      <div id="card-container" >
        <img {... (isloading ? {className: 'loader'} : {})} {... (!isloading ? {src: cards[0]} : '')} onClick={(e) => clicked(e.currentTarget.src)} id="1" alt=" "></img>
        <img {... (isloading ? {className: 'loader'} : {})} {... (!isloading ? {src: cards[1]} : '')}onClick={(e) => clicked(e.currentTarget.src)} id="2" alt=" "></img>
        <img {... (isloading ? {className: 'loader'} : {})} {... (!isloading ? {src: cards[2]} : '')} onClick={(e) => clicked(e.currentTarget.src)} id="3" alt=" "></img>
        <img {... (isloading ? {className: 'loader'} : {})} {... (!isloading ? {src: cards[3]} : '')}  onClick={(e) => clicked(e.currentTarget.src)} id="4" alt=" "></img>
        <img {... (isloading ? {className: 'loader'} : {})} {... (!isloading ? {src: cards[4]} : '')}  onClick={(e) => clicked(e.currentTarget.src)}id="5" alt=" "></img>
        <img {... (isloading ? {className: 'loader'} : {})} {... (!isloading ? {src: cards[5]} : '')} onClick={(e) => clicked(e.currentTarget.src)} id="6" alt=" "></img>
        <img {... (isloading ? {className: 'loader'} : {})} {... (!isloading ? {src: cards[6]} : '')} onClick={(e) => clicked(e.currentTarget.src)} id="7" alt=" "></img>
        <img {... (isloading ? {className: 'loader'} : {})} {... (!isloading ? {src: cards[7]} : '')} onClick={(e) => clicked(e.currentTarget.src)} id="8" alt=" "></img>
        <img {... (isloading ? {className: 'loader'} : {})} {... (!isloading ? {src: cards[8]} : '')} onClick={(e) => clicked(e.currentTarget.src)} id="9" alt=" "></img>
        <img {... (isloading ? {className: 'loader'} : {})} {... (!isloading ? {src: cards[9]} : '')} onClick={(e) => clicked(e.currentTarget.src)} id="10" alt=" "></img>
        <img {... (isloading ? {className: 'loader'} : {})} {... (!isloading ? {src: cards[10]} : '')} onClick={(e) => clicked(e.currentTarget.src)} id="11" alt=" " ></img>
        <img {... (isloading ? {className: 'loader'} : {})} {... (!isloading ? {src: cards[11]} : '')} onClick={(e) => clicked(e.currentTarget.src)} id="12" alt=" "></img>
      </div>
    </div>
  );
}

export default App;
