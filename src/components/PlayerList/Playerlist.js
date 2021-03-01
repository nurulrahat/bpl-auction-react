import React from 'react';
import './playerlist.css';
const Playerlist = (props) => {
    console.log(props.players)
    const players = props.players;


    return (
        <div>
            <table className="table table-hover table-bordered">
                <tbody>
                    <tr>
                        <td className="playerNameWidth">{players.name}</td>
                        <td>{players.salary}$</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Playerlist;