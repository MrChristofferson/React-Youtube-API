import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  handleInputChange(term) {
    this.setState({term});
    this.props.handleSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={e => this.handleInputChange(e.target.value)}
        />
      </div>
    );
  }
};

export default SearchBar;
