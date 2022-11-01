import React, { useState } from 'react';
import Board from './board.js';
import BoardI from './boardInspector.js';
import data from './data.json';
import './bootstrap.min.css';

export default function Menu() {
    const [nbPlayers, setNbPlayers] = useState('1');
    const [idPlayer, setIdPlayer] = useState('1');
    const [selectedCase, setSelectedCase] = useState('0201');
    const [isGameVisible, toggleGameVisible] = useState(false);
    const [isDetective, toggleIsDetective] = useState(false); 
    
    const handleChange = (event) => {
        toggleIsDetective(event.target.checked);
    };

    const cases = new Map (data.map(obj => [obj.key, obj]));

    return (
      <div>
        {isGameVisible ? (
            isDetective ? (
                <>
                <BoardI data={cases.get(selectedCase)} nbPlayers={nbPlayers} />
                <input type="button" className="btn btn-dark" onClick={()=>toggleGameVisible(false)} value="Terminer la partie" />
                </>
            ) : (
            <>
            <Board data={cases.get(selectedCase)} idPlayer={idPlayer} isDetective={isDetective}/>
            <input type="button" className="btn btn-dark" onClick={()=>toggleGameVisible(false)} value="Terminer la partie" />
            </>
            )
        ): (
            <>
            <div>Nombre de joueurs</div>
            <input type="number" className="form-control" onChange={e=>setNbPlayers(e.target.value)} min='0' value={nbPlayers}/>
            <div>Vous etes joueur n°</div>
            <input type="number" disabled={isDetective}className="form-control" onChange={e=>setIdPlayer(e.target.value)} min='0' value={idPlayer}/>
            <div>Detective</div>
            <div className="form-check form-switch">
            <input type="checkbox" className="form-check-input" checked={isDetective} onChange={handleChange}/>
            </div>
            <div>Affaire selectionnée</div>
            <select className="form-select" name="case" value={selectedCase} onChange={(e=>setSelectedCase(e.target.value))}>
                {[...cases.keys()].map(e=><option value={e}>{e}</option>)}  
            </select>
            <input type="button" className="btn btn-success" onClick={()=>toggleGameVisible(true)} value="Commencer la partie" />
            </>
        )}
      </div>
      )
  }
