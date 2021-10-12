import React, { createContext, useState, useEffect } from "react";
import { ProductService } from "services/product";
import PropTypes from 'prop-types'

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const productService = new ProductService();

  const [products, setProducts] = useState([]);
  const [productsDo, setProductDo] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    updateProducts()
  }, []);

  const updateProducts = () => {
    productService.readAll().then(data => setProducts(data));
  }

  const createProduct = product => {
    productService
      .create(product)
      .then(data => setProducts([...products, data]));
  };

  const deleteProduct = id => {
    productService
      .delete(id)
      .then(() => setProducts(products.filter(p => p.id_product !== id)));
  };

  const findProduct = id => {
    console.log(id)
    const product = products.find(p => p.id_product === id);
    
    setEditProduct(product);
  };

  const updateProduct = product => {
    productService
      .update(product)
      .then(data =>
        setProducts(
          products.map(p => (p.id_product === product.id_product ? data : product))
        )
      );

    setEditProduct(null);
  };

  const findProductDo = id => {  
    const product = productsDo.find(p => p.key === id);  
    setEditProduct(product);
  };

  const updateProductDo = product => {
    setProductDo(
      productsDo.map(p => (p.key === product.key ? product: p))
    )

    setEditProduct(null);
  };

  
  const deleteProductDo = id => {
    setProductDo(productsDo.filter(p => p.key !== id))
  }

  return (
    <ProductContext.Provider
      value={{
        createProduct,
        updateProducts,
        deleteProduct,
        findProduct,
        updateProduct,
        deleteProductDo,
        updateProductDo,
        productsDo,
        findProductDo,
        setProductDo,
        setEditProduct,
        editProduct,
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductContextProvider.propTypes = {
  children: PropTypes.node
}

export default ProductContextProvider;