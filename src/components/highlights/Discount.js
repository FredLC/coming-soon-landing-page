import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

export class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 40
  };

  updatePercentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.updatePercentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.updatePercentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Pre-order now!</h3>
              <p>
                Get 40% off if you pre-order. Offer valid until November 11th at
                midnight ET.
              </p>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
