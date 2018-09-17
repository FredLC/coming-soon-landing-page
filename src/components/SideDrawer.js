import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("First Item")}>
          First Item
        </ListItem>
        <ListItem button onClick={() => console.log("Second Item")}>
          Second Item
        </ListItem>
        <ListItem button onClick={() => console.log("Third Item")}>
          Third Item
        </ListItem>
        <ListItem button onClick={() => console.log("Fourth Item")}>
          Fourth Item
        </ListItem>
        <ListItem button onClick={() => console.log("Fifth Item")}>
          Fifth Item
        </ListItem>
      </List>
    </Drawer>
  );
};
