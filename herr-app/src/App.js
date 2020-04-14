import React from 'react';
import './App.css';
import Blob from "./Blob";
import GoldenRectangle from './GoldenRectangle';
import Circle from './Circle';

const BLOB_CLASSES = ['repubDivs', 'demDivs', 'marlboroDivs'];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorOrder: {
                first: "repubDivs",
                second: "demDivs",
                third: "repubDivs",
            }
        };
    }

    handleBs = () => {
        this.setState(
            {
                colorOrder: {
                    first: BLOB_CLASSES[Math.floor(Math.random() * 3)],
                    second: BLOB_CLASSES[Math.floor(Math.random() * 3)],
                    third: BLOB_CLASSES[Math.floor(Math.random() * 3)],
                }
            }
        );
        console.log('don\'t think I\'ll see you');
    }

    render() {
        return (
            <>
                <div className="flexMe someSpace">
                    <Blob className={this.state.colorOrder.first} onClick={this.handleBs} />
                    <Blob className={this.state.colorOrder.second} onClick={this.handleBs} />
                    <Blob className={this.state.colorOrder.third} onClick={this.handleBs} />
                </div>
                <GoldenRectangle onClick={this.handleBs} />
                <div className="flexMe rightPushed">
                    <Circle onClick={this.handleBs} />
                    <Circle onClick={this.handleBs} />
                    <Circle onClick={this.handleBs} />
                </div>
            </>

        );
    }

}

export default App;