import React, {Component} from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import Products from '../data.json'

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: [],
            filterText: 'ball', 
            inStockOnly: true
         }
    }

    componentDidMount(){
        this.setState({products: Products})
    }

    render() { 
        return ( 
            <div>
                <SearchBar 
                filterText={this.state.filterText} 
                inStockOnly={this.state.inStockOnly}/>
                <ProductTable 
                products={this.state.products}
                filterText={this.state.filterText} 
                inStockOnly={this.state.inStockOnly}/>
            </div>
         );
    }
}
 
export default FilterableProductTable;