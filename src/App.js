import { useEffect, useState } from 'react';
import './App.css';
import Addplayer from './components/Addplayer/Addplayer';
import Player from './components/Players/Player';
import playersData from './fakeData/playerData.json';

function App() {
  //const player = playersData;
  const [players, setPlayers] = useState([]);
  useEffect(()=>{
setPlayers(playersData);
  },[])
  const [playerAdd, setplayerAdd] = useState([]);
  const countPlayer = (addedPlayer) => {
   // console.log(addedPlayer);
    const playerNum = [...playerAdd, addedPlayer];
    setplayerAdd(playerNum);
   }
  console.log(playerAdd.length);
  // players=setPlayers(playersData);
  // console.log(players);
  return (
    <div className="main-container">

      <div className="player-container" >
      
        {
          players.map(players =>
            <Player players={players} countPlayer={countPlayer}></Player>)
        }
      </div>
      <div className="selected-container">
        <Addplayer playerAdd={playerAdd}></Addplayer>
      </div>
    </div>
  );
}

export default App;
