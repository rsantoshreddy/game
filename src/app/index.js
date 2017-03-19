import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Grids from './components/Grids/Grids';
import Control from './components/Grids/Control';
import '../resources/css/page.css'; //Webpack can import CSS files too!

export default class Page extends App {

    constructor(props) {
        super(props);
        this.state = {
            grids: null,
            control: {
                life: 3,
                btntext: "START",
                inprogress: false,
                duration: 5
            },
            activeGrids: 5
        };
        this.gridSize = 5;
        this.handleGridSelection = this.handleGridSelection.bind(this);
        this.clearTime = null;
        this.startGame = this.startGame.bind(this);
        this.updateGame = this.updateGame.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    handleGridSelection(gridType, pidx, index) {
        if(gridType){
            this.state.grids[pidx][index]=0;
            this.state.activeGrids--;
            this.setState(this.state.grids);
        };
        
    }

    resetGame(){
        const grids = new Array(this.gridSize).fill(new Array(this.gridSize).fill(0));
        this.state.activeGrids= this.gridSize;
        this.state.control.duration=5;
        this.setState({ grids });
    }

    componentDidMount() {
        this.resetGame();
    }


    startGame(){
        this.state.control.inprogress = true;
        const grid = new Array(this.gridSize).fill(0);
        const newGrid = grid.map((currentValue, index, arr)=>{
                let x = Math.floor((Math.random() * 4) + 1);
                let row = new Array(this.gridSize).fill(0);
                row[x]=1;
               return row;
        })
        this.setState({ grids:newGrid });
        this.clearGame = setInterval(this.updateGame, 1000);
    }

    updateGame(){
        if(this.state.control.duration){
            const duration=--this.state.control.duration;
            this.setState({duration});
        }else{
            clearInterval(this.clearGame);
            this.state.control.inprogress = false;
            if(this.state.activeGrids){
                if(this.state.control.life){
                    alert("Sorry :( Try again!");
                    this.state.control.life--;
                }else{
                    alert("Game Over");
                    this.state.control.life=3;
                }
            }else{
                alert("Congratulations!! You won the Game!")
            }
            this.resetGame()
        }
    }
    

    
    createBody() {
        const { grids, control } = this.state;
        const handleGridSelection = this.handleGridSelection;
        const startGame = this.startGame;

        return (<div className="main-container">
                <div className="game-container">
                    < Grids grids={grids} handleGridSelection = { handleGridSelection } />  
                    <Control {...control} startGame={startGame} /> 
                </div>
            </div>);
    }
}

render( < Page / > , document.getElementById("app"));
