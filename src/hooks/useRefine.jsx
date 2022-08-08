import { useCallback, useEffect, useState } from 'react';

const useRefine = (products, terms) => {
  const [refinedProducts, setRefinedProducts] = useState([...products]);

  const sortData = useCallback(() => {
    if (terms.sort) {
    }
  }, [terms.sort]);

  const refineData = useCallback(() => {
    if (terms.filter) {
      setRefinedProducts(() =>
        products.filter(
          product =>
            product.category.toLowerCase() === terms.filter.toLowerCase()
        )
      );
    } else {
      setRefinedProducts(products);
    }
    sortData();
  }, [terms.filter, products, sortData]);

  useEffect(() => {
    refineData();
  }, [refineData]);

  return {
    refinedProducts,
  };
};

export default useRefine;
