import React, { Component } from "react";

class TabNav extends Component {
  render() {
    var JSX = [<h2>TABS</h2>];

    this.props.tabs.map((tab, index) => {
      JSX.push(tab.component);
    });

    return JSX;
  }
}

export default TabNav;
