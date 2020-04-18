import React from "react";
import styled from "styled-components";
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Blob } from "./components";
import { GoldenRectangle } from "./components";
import { Circle } from "./components";

const BLOB_COLORS = ["aqua", "navy", "rebeccapurple"];

const FlexDiv = styled.div`
  width: 500px;
  display: flex;
  justify-content: ${(props) => props.jc};
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
      <div>
        <FlexDiv jc="space-around">
          <Blob
            blobColor={this.state.colorOrder.first}
            onClick={this.handleBs}
          />
          <Blob
            blobColor={this.state.colorOrder.second}
            onClick={this.handleBs}
          />
          <Blob
            blobColor={this.state.colorOrder.third}
            onClick={this.handleBs}
          />
        </FlexDiv>
        <GoldenRectangle onClick={this.handleBs} />
        <FlexDiv jc="flex-end">
          <Circle onClick={this.handleBs} />
          <Circle onClick={this.handleBs} />
          <Circle onClick={this.handleBs} />
        </FlexDiv>
      </div>
    );
  }
}

export default App;
