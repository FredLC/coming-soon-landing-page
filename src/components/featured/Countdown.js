import React, { Component } from "react";

export class Countdown extends Component {
  state = {};
  render() {
    return (
      <div className="countdown_wrapper">
        <div className="countdown_top">New product coming in</div>
        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time">11</div>
            <div className="countdown_tag">Days</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">5</div>
            <div className="countdown_tag">Hours</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">27</div>
            <div className="countdown_tag">Min</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">45</div>
            <div className="countdown_tag">Sec</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Countdown;
