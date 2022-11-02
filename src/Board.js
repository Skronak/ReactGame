import React from 'react';

function Board(props) {
    const {data} = props;

    return (
        <div>
            <div className="Date">{data.date}</div>
            <div>{data.label}</div>
            {this.props.children}
        </div>
    );
}

export default Board;
