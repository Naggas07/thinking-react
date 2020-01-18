import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({products, inStockOnly, filterText}) => {
    console.info('Products => ', products)
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
        {products.map(product => <ProductRow product={product}/>)}
      </tbody>
    </table>
  );
};

export default ProductTable;
