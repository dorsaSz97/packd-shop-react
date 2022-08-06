import React, { useState, useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from '../components/Products/ProductCard';
import productsData from '../data/productsData';

// const filterProducts = (data, filter) => {
//   return data.filter(item => item.category === filter);
// };

// let filteredProducts = productsData;
// if (filterParam) {
//   filteredProducts = filterProducts(productsData, filterParam);
// }

// const [updatedProducts, setUpdatedProducts] = useState(
//   filterParam
//     ? productsData.filter(pro => pro.category === filterParam)
//     : productsData
// );

// // const newar = productsArr;
// const pagesCount = Math.ceil(
//   (filterParam && filterParam !== 'all'
//     ? productsData.filter(pro => pro.category === filterParam).length
//     : productsData.length) / 3
// );
// const paginations = [...Array(pagesCount)].map(x => 0);
// console.log(productsArr, productsData);

// const changePageHandler = useCallback(page => {
//   // console.log(productsData.slice(3, 5));
//   setProductsArr(productsData.slice(3 * (page - 1), 3 * (page - 1) + 3)); // 0, 4, 8
// }, []);

// useEffect(() => {
//   changePageHandler(1);
// }, [changePageHandler]);

// if (filter === 'all') {
//   filter = null;
//   setProductsArr(productsData.slice(0, 3));
// } else {
//     setUpdatedProducts(
//   productsData.filter(product => product.category.toLowerCase() === e.target.value.toLowerCase()).slice(0, 3)
// );
// }

const Products = () => {
  let products = [...productsData];
  const navigate = useNavigate();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const filterParam = queryParams.get('filter');
  const sortParam = queryParams.get('sort');

  console.log(sortParam, filterParam);

  const [updatedProducts, setUpdatedProducts] = useState([]);

  useEffect(() => {
    let productsArr = [...productsData];
    if (sortParam) {
      let products = [...productsData];

      switch (sortParam) {
        case 'AtoZ':
          products = products.sort((productA, productB) => {
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
          products = products.sort((productA, productB) => {
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
          products = products.sort(
            (productA, productB) => productA.price - productB.price
          );
          break;
        case 'HtoL':
          products = products.sort(
            (productA, productB) => productB.price - productA.price
          );
          break;
        default:
          break;
      }

      productsArr = [...products];
    }

    if (filterParam) {
      productsArr = productsArr.filter(
        product => product.category.toLowerCase() === filterParam.toLowerCase()
      );
    }

    setUpdatedProducts(productsArr);
  }, [sortParam, filterParam]);

  const changeSortHandler = e => {
    let sortValue = e.target.value;

    navigate(
      `?sort=${sortValue}${filterParam ? `&filter=${filterParam}` : ''}`,
      { replace: false }
    );
  };

  const changeFilterHandler = e => {
    let filterValue = e.target.value;

    if (filterValue) {
      navigate(
        `?filter=${filterValue}${sortParam ? `&sort=${sortParam}` : ''}`,
        { replace: false }
      );
    } else {
      navigate('/products', { replace: false });
    }
  };

  return (
    <div>
      {/* banner */}

      {/* filter select */}

      <select
        name="filter"
        id="filterSelection"
        defaultValue={filterParam || 'All'}
        onChange={changeFilterHandler}
      >
        <option value="">All</option>
        <option value="smoothie">Smoothies</option>
        <option value="fruit">Fruit</option>
        <option value="bundle">Bundles</option>
        <option value="vegetable">Organic Vetegables</option>
      </select>

      {/* sort select */}
      <select
        name="sort"
        id="sortSelection"
        defaultValue={sortParam || 'Not Set'}
        onChange={changeSortHandler}
      >
        <option value="">Not set</option>
        <option value="AtoZ">Alphabetically, A to Z</option>
        <option value="ZtoA">Alphabetically, Z to A</option>
        <option value="LtoH">Price, Low to High</option>
        <option value="HtoL">Price, High to Low</option>
      </select>

      {/* products gallery */}
      {updatedProducts.map(product => {
        return (
          <ProductCard
            key={Math.random() * 1000}
            id={product.id}
            name={product.name}
            price={product.price}
          />
        );
      })}

      {/* pagination */}
      {/* {paginations.map((page, index) => {
        return (
          <span
            className="mr-10"
            key={index}
            onClick={() => changePageHandler(index + 1)}
          >
            {index + 1}
          </span>
        );
      })} */}
    </div>
  );
};

export default Products;

// helpers normal func
// custom hook functions with state
// firebase for signup and cart instead of LS
