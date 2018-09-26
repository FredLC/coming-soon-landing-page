import React from "react";
import Zoom from "react-reveal/Zoom";

const Info = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="info_wrapper">
          <Zoom>
            <div className="info_item">
              <div className="info_outer">
                <div className="info_inner">
                  <div className="info_title">Lorem Ipsum</div>
                  <div className="info_desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
            </div>

            <div className="info_item">
              <div className="info_outer">
                <div className="info_inner">
                  <div className="info_title">Lorem Ipsum</div>
                  <div className="info_desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Info;
