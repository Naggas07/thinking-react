import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }



  render() {
    
    return (
      <form>
        <div>
          <input type="text" placeholder="Search" value={this.props.filterText} name="search"></input>
        </div>
        <div>
          <input
            type="checkbox"
            className="form-check-input"
            name="stock"
            id="stock"
        
            checked={this.props.inStockOnly}
          ></input>
          <label>Only in stock</label>
        </div>
      </form>
    );
  }
}

export default SearchBar;
