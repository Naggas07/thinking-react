import React from "react";

 const SearchBar = ({filterText , inStockOnly, handelChange, handelCheck}) => {

    
    return (
      <form>
        <div>
          <input type="text" placeholder="Search" value={filterText} onChange={handelChange} name="filterText"></input>
        </div>
        <div>
          <input
            type="checkbox"
            className="form-check-input"
            name="inStockOnly"
            id="stock"
            onChange={handelCheck}
            checked={inStockOnly}
          ></input>
          <label>Only in stock</label>
        </div>
      </form>
    );
  }

export default SearchBar;


