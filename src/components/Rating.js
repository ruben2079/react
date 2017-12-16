import React from "react";
import './Rating.css';

class Rating extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating || null,
      temp_rating: null
    };
  }

  handleMouseover(rating) {
    this.setState(prev => ({
      rating,
      temp_rating: prev.rating
    }));
  }

  handleMouseout() {
    this.setState(prev => ({
      rating: prev.temp_rating
    }));
  }

  rate(rating) {
    this.setState({
      rating,
      temp_rating: rating
    });
  }

  render() {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      let klass = "solid-star";
      if (this.state.rating >= i && this.state.rating !== null) {
        klass = "empty-star";
      }
      stars.push(
        <span key={ i }
          style={{ display: "inline-block", width: "16px", overflow: "hidden", direction: (i%2===0) ? "ltr" : "rtl"}}
          className={ klass }
          onMouseOver={ () => this.handleMouseover(i) }
          onClick={ () => this.rate(i) }
          onMouseOut={ () => this.handleMouseout() }
        />
      );
    }
    return (
      <div className="rating">
        { stars }
      </div>
    );
  }
}

export default Rating;
