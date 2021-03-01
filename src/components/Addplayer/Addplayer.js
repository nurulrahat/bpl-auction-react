import React from 'react';
import Playerlist from '../PlayerList/Playerlist';
import './addplayer.css'
const Addplayer = (props) => {
    const players = props.playerAdd;
    console.log(players);
    //let totalPlayer=0;
    let totalSalary = 0;
    let allName = "";
    for (let i = 0; i < players.length; i++) {
        totalSalary = totalSalary + players[i].salary;
        allName = allName + players[i].name + ",";
    }

    return (

        <div>
            <h1>Selected Players:{players.length}</h1>
            <table className="table">
                <thead className="table-info">
                    <th className="tableWidth"><h2>Name</h2></th>
                    <th><h2>Salary</h2></th>
                </thead>

            </table>
            {
                players.map(players =>
                    <Playerlist players={players}></Playerlist>
                )
            }
            <table className="table">
                <tfoot className="">
                    <td className="tableWidth"><h2>Total Cost:</h2></td>
                    <td><h4>{totalSalary}$</h4></td>
                </tfoot>
            </table>

        </div>
    );
};

export default Addplayer;