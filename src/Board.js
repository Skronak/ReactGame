import React from 'react';

function Board(props) {

    return (
        <div>
            <div className="Date">{props.date}</div>
            <div>{props.label}</div>
            {props.children}
        </div>
    );
}

export default Board;
