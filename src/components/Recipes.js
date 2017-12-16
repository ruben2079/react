import React, { Component } from 'react';
import Rating from './Rating';
import Favorites from './Favorites';
import recipeData from './../recipes.json';
import './Recipes.css';
import './Favorites.css';

const ratingStyles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  cssFloat: "left",
  clear: "both"
};

class Recipes extends Component {

  constructor(){
    super();
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    this.setState({ recipes: recipeData });
  }

  render() {
    return (
      <div className="recipe-wrapper">
       { this.state.recipes.map((recipe, i)=>{
         return (
            <div className="meal" key={i}>
              <header>
                <h3>
                  { recipe.name }
                </h3>
              </header>
              <p>{ recipe.headline }</p>
              <img alt={ recipe.name } src={ recipe.image } />
              <p className="info">
		            <svg width="35" height="35" viewBox="0 0 35 35" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" data-reactid="502"><g fill="none" fillRule="evenodd" data-reactid="503"><path d="M0 0h35v35H0z" data-reactid="504"></path><path fill="#c8c8c8" fillRule="nonzero" d="M11.636 8v.91H8V28h20V8.91h-3.636V8h-4.546v.91h-3.636V8h-4.546zm-1.818 2.727h16.364v3.637H9.818v-3.637zm2.727.91a.91.91 0 0 0-.909.908c0 .501.409.91.91.91.5 0 .909-.409.909-.91a.91.91 0 0 0-.91-.909zm2.728 0a.91.91 0 0 0-.91.908c0 .501.409.91.91.91.5 0 .909-.409.909-.91a.91.91 0 0 0-.91-.909zm2.727 0a.91.91 0 0 0-.91.908c0 .501.41.91.91.91s.91-.409.91-.91a.91.91 0 0 0-.91-.909zm5.455 0a.91.91 0 0 0-.91.908c0 .501.409.91.91.91.5 0 .909-.409.909-.91a.91.91 0 0 0-.91-.909zM9.818 16.181h16.364v10H9.818v-10zM11.636 18v6.364h12.728V18H11.636zm1.819 1.818h9.09v2.727h-9.09v-2.727z" data-reactid="505"></path></g></svg><span>{ recipe.time.replace('PT','').replace('M',' min') }</span>
	            </p>
              <Favorites />

              <div style={ ratingStyles }>
                <Rating rating={5} />
              </div>
            </div>
         )
       })}
      </div>
    );
  }
}

export default Recipes;
