import React, { Component } from 'react';
import './App.css';
import generateBoard from './BoardGenerator';
import Board from './Board';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mineLayout: generateBoard(10, 6, 8),
        };
    }
    
    render() {
        return (
	    <div>
              <Board mineLayout={this.state.mineLayout}/>
	    </div>
        );
    }
}

export default App;
