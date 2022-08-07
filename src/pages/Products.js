import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import useRefine from '../hooks/useRefine';
import usePagination from '../hooks/usePagination';

import ProductCard from '../components/Products/ProductCard';

import productsData from '../data/productsData';
import SliderBanner from '../components/SliderBanner/SliderBanner';

const data = [...productsData];

const Products = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const filterParam = queryParams.get('filter');
  const sortParam = queryParams.get('sort');

  const { refinedProducts } = useRefine(data, {
    filter: filterParam,
    sort: sortParam,
  });

  const { currentPage, goToPage, totalPages, displayedData } = usePagination([
    ...refinedProducts,
  ]);

  let pagination = [];
  for (let i = 0; i < totalPages; i++) {
    pagination.push(
      <span
        className={`mr-10 ${
          currentPage === i + 1 ? 'bg-red-500' : 'cursor-pointer'
        }`}
        key={i}
        onClick={() => changePageHandler(i + 1)}
      >
        {i + 1}
      </span>
    );
  }

  const changeSortHandler = e => {
    let sortValue = e.target.value;

    if (sortValue || filterParam) {
      navigate(
        `?sort=${sortValue}${filterParam ? `&filter=${filterParam}` : ''}`,
        { replace: false }
      );
    } else {
      navigate('/products', { replace: false });
    }
  };

  const changeFilterHandler = e => {
    let filterValue = e.target.value;

    if (filterValue || sortParam) {
      navigate(
        `?filter=${filterValue}${sortParam ? `&sort=${sortParam}` : ''}`,
        { replace: false }
      );
    } else {
      navigate('/products', { replace: false });
    }
  };

  const changePageHandler = index => {
    goToPage(index);
  };

  return (
    <div>
      {/* banner */}
      <SliderBanner />

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
      {displayedData().map(product => {
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
      {pagination}
    </div>
  );
};

export default Products;

// helpers normal func
// custom hook functions with state
// firebase for signup and cart instead of LS
