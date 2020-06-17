import React, { Component } from "react";
import zoom_in from "assets/img/zoom-in.png";
import zoom_out from "assets/img/zoom-out.png";
import zoom_reset from "assets/img/zoom-reset.png";
import zoom_image from "assets/img/banner.jpg";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

class Zoom extends Component {
  render() {
    return (
      <TransformWrapper
        defaultScale={1}
        defaultPositionX={200}
        defaultPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <TransformComponent>
              <img className="Zoom" src={zoom_image} alt="test" />
              {/* <div>Text</div> */}
            </TransformComponent>
            <div className="tools">
              <button className="btn-gradient cyan small" onClick={zoomIn}><img src={zoom_in} alt="" /></button>
              <button className="btn-gradient blue small" onClick={zoomOut}><img src={zoom_out} alt="" /></button>
              <button className="btn-gradient purple small" onClick={resetTransform} data-testid="reset-button"><img src={zoom_reset} alt="" /></button>
            </div>
            
          </React.Fragment>
        )}
      </TransformWrapper>
    );
  }
}

export default Zoom;