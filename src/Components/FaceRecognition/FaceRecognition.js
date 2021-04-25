import React, { Component } from "react";
import './FaceRecognition.css'
export class FaceRecognition extends Component {
  render() {
    return (
      <div className="center ma">
        <div className="absolute mt2">
            <img
              id="inputimage"
              src={this.props.imageUrl}
              width="500px"
              height="auto"
              alt="alt"
            />
            <div
              className="bounding-box"
              style={{
                top: this.props.box.topRow,
                left: this.props.box.leftCol,
                right: this.props.box.rightCol,
                bottom: this.props.box.bottomRow,
              }}
            ></div>
        </div>
      </div>
    );
  }
}

export default FaceRecognition;
