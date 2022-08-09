import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import usePagination from '../hooks/usePagination';

import ProductCard from '../components/Products/ProductCard';

import productsData from '../data/productsData';
import FeaturesSlider from '../components/FeaturesSlider/FeaturesSlider';
import MainBanner from '../components/MainBanner/MainBanner';

import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../store/productsSlice';
import SelectionBox from '../components/SelectionBox/SelectionBox';

const Products = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const filterParam = queryParams.get('filter');
  const sortParam = queryParams.get('sort');

  const refinedProducts = useSelector(state => state.products.refinedProducts);

  useEffect(() => {
    console.log(filterParam);
    if (filterParam) {
      dispatch(
        productsActions.setProducts(
          productsData.filter(
            product =>
              product.category.toLowerCase() === filterParam.toLowerCase()
          )
        )
      );
    } else {
      dispatch(productsActions.setProducts(productsData.slice()));
    }
    dispatch(
      productsActions.refineData({
        filterTerm: filterParam,
        sortTerm: sortParam,
      })
    );
    dispatch(productsActions.setCurrProduct(filterParam));
  }, [filterParam, dispatch, sortParam]);

  const { currentPage, goToPage, totalPages, displayedData } = usePagination([
    ...refinedProducts,
  ]);

  let pagination = [];
  for (let i = 0; i < totalPages; i++) {
    pagination.push(
      <span
        className={`p-3 py-1 ${
          currentPage === i + 1
            ? 'bg-black text-white'
            : 'text-black cursor-pointer'
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

    dispatch(
      productsActions.refineData({
        filterTerm: filterParam,
        sortTerm: sortValue,
      })
    );

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
    goToPage(1);

    dispatch(
      productsActions.refineData({
        filterTerm: filterValue,
        sortTerm: sortParam,
      })
    );

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
    window.scrollTo(0, 0);
    goToPage(index);
  };

  return (
    <div>
      {/* banner */}
      <MainBanner />
      {/* features */}
      <FeaturesSlider />

      {/* filter and sort options */}
      <div className="flex justify-between items-center p-4">
        <span className="uppercase text-sm">
          {displayedData.length} products
        </span>
        <div className="flex flex-col items-end gap-2">
          <SelectionBox
            changeValueHandler={changeFilterHandler}
            kind="filter"
            selected={filterParam}
          />
          <SelectionBox
            changeValueHandler={changeSortHandler}
            kind="sort"
            selected={sortParam}
          />
        </div>
      </div>

      {/* products */}
      <div className="flex flex-wrap ">
        {displayedData.map(product => {
          return <ProductCard key={Math.random() * 1000} product={product} />;
        })}
      </div>

      {/* pagination */}
      <div>
        <ul className="w-full p-4 flex items-center justify-center gap-6">
          {pagination}
        </ul>
      </div>
    </div>
  );
};

export default Products;

// helpers normal func
// custom hook functions with state
// firebase for signup and cart instead of LS
