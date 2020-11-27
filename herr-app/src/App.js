import React from "react";
//import styled, { css } from "styled-components";
import styled from "styled-components";
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Blob } from "./components";
import { Circle } from "./components";
import { Grid } from "./components";
import { Header } from "./components";
import { Ruby } from "./components";
import { TwoDeeCanvas } from "./components";
import { InputField } from "./components";

const BLOB_COLORS = ["aqua", "navy", "rebeccapurple"];

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const WrapperDiv = styled.div`
  grid-column: 1/5;
`;
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  margin: 0 20% 0 20%;
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
      makeBlack: {
        first: false,
        second: false,
        third: false,
        fourth: false,
      }
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

  handleInput = event => {
    this.setState({
      makeBlack: {
        first: (event.target.value.length >= 1),
        second: (event.target.value.length >= 2),
        third: (event.target.value.length >= 3),
        fourth: (event.target.value.length >= 4),
      },
    });
    // console.log(event.target.value);
    // console.log(event.target.value.length);
  };

  
    render() {
        return (
          <Grid onInput={this.handleInput}>
            <Header />
            <InputField />
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
            <WrapperDiv><CardGrid>
              <Ruby name="Crime"/>
              <Ruby name="Romance"/>
              <Ruby name="Travel"/>
              <Ruby name="Spiritual"/>
            </CardGrid></WrapperDiv>
            <TwoDeeCanvas amBlack={this.state.makeBlack.first} imgNumber="4"/>
            <TwoDeeCanvas amBlack={this.state.makeBlack.second} imgNumber="4"/>
            <TwoDeeCanvas amBlack={this.state.makeBlack.third} imgNumber="4"/>
            <TwoDeeCanvas amBlack={this.state.makeBlack.fourth} imgNumber="4"/>
            <TwoDeeCanvas imgNumber="3"/>
            <TwoDeeCanvas/>
            <TwoDeeCanvas imgNumber="2"/>
            <TwoDeeCanvas/>
          </Grid>
        );
    }
}

export default App;