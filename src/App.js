import React, { Component } from "react";

import { Button } from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
  }

  render() {
    return (
      <div className="main_div">
        <div className="counter">
          Current count: <span className="count_number">{this.state.count}</span>
          </div>
          <br />
          <div className="buttons">
          <Button
            sign="+"
            count={this.state.count}
            updateCount={this.handleCount.bind(this)}
          />
          <span className="gap"> </span>
          <Button
            sign="-"
            count={this.state.count}
            updateCount={this.handleCount.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
