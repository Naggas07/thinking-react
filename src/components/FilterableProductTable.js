import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import Products from "../data.json";

class FilterableProductTable extends Component {
  state = {
    products: [],
    filterText: "",
    inStockOnly: false
  };

  handelChange = event => {
    const { name, value } = event.target;
    this.setState({
        ...this.state,
        [name]: value
    })
  };

  handelCheck = event => {
      const {name} = event.target
      const value = this.state[name]
      this.setState({
          ...this.state,
          [name]: !value
      })
  }

  componentDidMount() {
    this.setState({ products: Products });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          handelChange={this.handelChange}
          handelCheck={this.handelCheck}
        />
        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
