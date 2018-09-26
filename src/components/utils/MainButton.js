import React from "react";
import Button from "@material-ui/core/Button";

const MainButton = props => {
  return (
    <div>
      <Button
        href={props.text}
        variant="contained"
        size="large"
        style={{
          color: props.color,
          background: props.background
        }}
      >
        {props.text}
      </Button>
    </div>
  );
};

export default MainButton;
