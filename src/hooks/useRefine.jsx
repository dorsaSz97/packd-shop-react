import { useCallback, useEffect, useState } from 'react';

const useRefine = (products, terms) => {
  const [refinedProducts, setRefinedProducts] = useState([...products]);

  const sortData = useCallback(() => {
    if (terms.sort) {
      setRefinedProducts(prev => {
        let productsArr = [...prev];
        switch (terms.sort) {
          case 'AtoZ':
            productsArr.sort((productA, productB) => {
              if (productA.name < productB.name) {
                return -1;
              }
              if (productA.name > productB.name) {
                return 1;
              }
              return 0;
            });
            break;
          case 'ZtoA':
            productsArr.sort((productA, productB) => {
              if (productA.name > productB.name) {
                return -1;
              }
              if (productA.name < productB.name) {
                return 1;
              }
              return 0;
            });
            break;
          case 'LtoH':
            productsArr.sort(
              (productA, productB) => productA.price - productB.price
            );
            break;
          case 'HtoL':
            productsArr.sort(
              (productA, productB) => productB.price - productA.price
            );
            break;
          default:
            break;
        }
        return productsArr;
      });
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
