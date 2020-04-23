import React from "react";
import styled, { css } from "styled-components";
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Blob } from "./components";
import { GoldenRectangle } from "./components";
import { Circle } from "./components";
import { Grid } from "./components";
import { Header } from "./components";

const BLOB_COLORS = ["aqua", "navy", "rebeccapurple"];

const FlexDiv = styled.div`
  display: flex;

  ${props => props.header && css`
  justify-content: space-evenly;
  grid-column: 1/5;
  grid-row: 2/3;
  flex-wrap: wrap;
  `}
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorOrder: {
        first: "aqua",
        second: "navy",
        third: "rebeccapurple",
      },
    };
  }

  handleBs = () => {
    this.setState({
      colorOrder: {
        first: BLOB_COLORS[Math.floor(Math.random() * 3)],
        second: BLOB_COLORS[Math.floor(Math.random() * 3)],
        third: BLOB_COLORS[Math.floor(Math.random() * 3)],
      },
    });
  };
  
    render() {
        return (
            <Grid>
                <Header />
                <FlexDiv header>
                    <FlexDiv> 
                        <Blob blobColor={this.state.colorOrder.first} onClick={this.handleBs} />
                        <Blob blobColor={this.state.colorOrder.second} onClick={this.handleBs} />
                        <Blob blobColor={this.state.colorOrder.third} onClick={this.handleBs} />
                    </FlexDiv>
                    <FlexDiv>
                        <Circle onClick={this.handleBs} />
                        <Circle onClick={this.handleBs} />
                        <Circle onClick={this.handleBs} />
                    </FlexDiv>
                    <FlexDiv>
                        <Circle onClick={this.handleBs} />
                        <Circle onClick={this.handleBs} />
                        <Circle onClick={this.handleBs} />
                    </FlexDiv>
                    <FlexDiv>
                        <Circle onClick={this.handleBs} />
                        <Circle onClick={this.handleBs} />
                        <Circle onClick={this.handleBs} />
                    </FlexDiv>
                </FlexDiv>
            </Grid>
        );
    }
}

export default App;
