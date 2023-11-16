import React, { createContext, useState, type HTMLAttributes, useContext } from "react";

export interface IProductContext {
  section: number;
  setSection: React.Dispatch<React.SetStateAction<number>>;
}

export const ProductsContext = createContext<IProductContext>({
  section: 0,
  setSection: () => {},
});

export const useProductsSection = () => useContext(ProductsContext)

export const ProductsProvider = (props: HTMLAttributes<HTMLDivElement>) => {
  const [section, setSection] = useState(0);
  return (
    <ProductsContext.Provider value={{section ,setSection}}>
      {props.children}
    </ProductsContext.Provider>
  );
};
