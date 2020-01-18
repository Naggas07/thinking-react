import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({products, inStockOnly, filterText}) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductCategoryRow />
        {products.filter(product => product.name.includes(filterText) )
        .map((product, i) => 
          <ProductRow product={product}
          inStockOnly={inStockOnly}
          key={i}/>)}
      </tbody>
    </table>
  );
};

export default ProductTable;
