import React, { Component }  from "react";
import './Favorites.css';

class Favorites extends Component {

  constructor(props) {
    super(props);
    this.state = {
      condition: false
    };
  }

  handleClick = () => {
    this.setState({
      condition: !this.state.condition
    });
  }

  render() {
    return <div onClick={ this.handleClick } className= { this.state.condition ? "heart toggled" : "heart"}></div>;
  }
}

export default Favorites;
