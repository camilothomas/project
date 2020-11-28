import React from 'react';
import styled from 'styled-components';
import maus from './maus.jpg';
import maus2 from './maus-2.jpg';
import maus3 from './maus-3.jpg';
import penguin from './Card_back_12.svg';

const ChildCanvas = styled.canvas`
`;

const Image = styled.img`
    display: none;
`

class TwoDeeCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    drawStuff() {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        let img;
        if (this.props.imgNumber === "2") {
            img = this.refs.image2;
        } else if (this.props.imgNumber === "3") {
            img = this.refs.image3;
        } else if (this.props.imgNumber === "4") {
            img = this.refs.image4;    
        } else {
            img = this.refs.image;
        }
        if (this.props.amBlack) {
            ctx.fillStyle = '#EF6C00';
            ctx.fillRect(0, 0, 250, 250);
        } else {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, 250, 250);
            ctx.drawImage(img, 0, 0, 250, 250)
            ctx.font = '40px Courier'
            ctx.fillText("Nachbarn", 0, 0)
        }
        img.onload = () => {
                ctx.drawImage(img, 0, 0, 250, 250)
                ctx.font = "40px Courier"
                ctx.fillText("Nachbarn", 0, 0)
        }
    }

    componentDidMount() {
        this.drawStuff();
    }
    componentDidUpdate() {
        this.drawStuff();
    }
    render() {
        return (
            <div>
                <ChildCanvas
                    width="250"
                    height="250"
                    ref={this.canvasRef}
                />
                <Image ref="image" src={maus} />
                <Image ref="image2" src={maus2} />
                <Image ref="image3" src={maus3} />
                <Image ref="image4" src={penguin}/>
            </div>
        );
    }
}

export default TwoDeeCanvas;