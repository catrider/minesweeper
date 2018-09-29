import React, { Component } from 'react';
import './App.css';
import generateBoard from './BoardGenerator';
import Board from './Board';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            board: generateBoard(10, 6, 20)
        };
    }
    
    render() {
        return (
	    <div>
              <Board board={this.state.board}/>
	    </div>
        );
    }
}

export default App;
