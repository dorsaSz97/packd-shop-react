import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MainBanner from '../components/MainBanner/MainBanner';
import FeaturesSlider from '../components/FeaturesSlider/FeaturesSlider';
import SelectionBox from '../components/SelectionBox/SelectionBox';
import ProductCard from '../components/Products/ProductCard';
import NotFound from './NotFound';
import productsData from '../data/productsData';
import { productsActions } from '../store/productsSlice';
import usePagination from '../hooks/usePagination';

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const filterParam = queryParams.get('filter');
  const sortParam = queryParams.get('sort');

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const currCategory = useSelector(state => state.products.currProduct);
  const refinedProducts = useSelector(state => state.products.refinedProducts);

  const { currentPage, totalPages, displayedData, goToPage } = usePagination([
    ...refinedProducts,
  ]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
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
  }, [filterParam, sortParam, dispatch]);

  useEffect(() => {
    if (currCategory === '') {
      setIsError(true);
      setIsLoading(false);
    } else if (currCategory === null) {
      setIsLoading(true);
      setIsError(false);
    } else {
      setIsError(false);
      setIsLoading(false);
    }
  }, [currCategory]);

  let pagination = [];
  for (let i = 0; i < totalPages; i++) {
    pagination.push(
      <span
        key={i}
        className={`p-3 py-1 ${
          currentPage === i + 1
            ? 'bg-dark text-white'
            : 'bg-transparent text-dark cursor-pointer'
        }`}
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

  const changePageHandler = pageNumber => {
    goToPage(pageNumber);
  };

  return (
    <>
      {!isLoading && !isError && (
        <div>
          <MainBanner currCategory={currCategory} />

          <FeaturesSlider />

          <div className="py-10 px-4 md:px-8 lg:px-12">
            <div className="flex justify-between">
              <span className="text-[1rem] uppercase font-bold">
                {displayedData.length} products
              </span>
              <div className="flex flex-col items-end gap-2">
                <SelectionBox
                  kind="filter"
                  selected={filterParam}
                  changeValueHandler={changeFilterHandler}
                />
                <SelectionBox
                  kind="sort"
                  selected={sortParam}
                  changeValueHandler={changeSortHandler}
                />
              </div>
            </div>

            <div className="flex flex-wrap mb-4">
              {displayedData.map((product, index) => {
                return <ProductCard key={index} product={product} />;
              })}
            </div>

            <div>
              <ul className="flex w-full items-center justify-center gap-6">
                {pagination}
              </ul>
            </div>
          </div>
        </div>
      )}
      {!isLoading && isError && <NotFound />}
      {isLoading && !isError && (
        <div className="flex items-center justify-center w-[100%] min-h-[80vh]">
          <p>Loading....</p>
        </div>
      )}
    </>
  );
};

export default Products;
