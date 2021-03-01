import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './player.css';
import '../Addplayer/Addplayer';
const Player = (props) => {
    const { id, name, about, image, salary } = props.players;
    //console.log(props.players)
    return (
        <div className="playerCls">
            <img className="playerImgCls" src={image} alt="" srcset="" />
            <h3>{name}</h3>
            <h4>{about}</h4>
            <p>Salary:{salary}</p>
            <button className="addButton" onClick={() => props.countPlayer(props.players)}> <FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
        </div>
    );
};

export default Player;