import { createContext, useState } from "react";
import productdata from '../productdata';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState(productdata);
console.log(productdata)
  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};
