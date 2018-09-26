import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";
import Headroom from "react-headroom";

class Header extends Component {
  state = {
    drawerOpen: false
  };

  togggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };

  render() {
    return (
      <div>
        <Headroom>
          <AppBar
            position="fixed"
            style={{
              background: "#3d4c63",
              padding: "10px",
              boxShadow: "none"
            }}
          >
            <Toolbar className="toolbar">
              <div className="header font_poppins">
                <div className="header_logo">Company Name</div>
              </div>
              <IconButton
                aria-label="Menu"
                color="inherit"
                onClick={() => this.togggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>

              <SideDrawer
                open={this.state.drawerOpen}
                onClose={value => this.togggleDrawer(value)}
              />
            </Toolbar>
          </AppBar>
        </Headroom>
      </div>
    );
  }
}

export default Header;
