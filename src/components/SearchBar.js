import React, { Component } from 'react';
import '../index.css';

class SearchBar extends Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="search">Search image...</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
            id="search"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
