import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import productsData from '../data/productsData';
import ImagesCol from '../components/Products/ImagesCol';
import { cartActions } from '../store/cartSlice';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const currIndex = productsData.findIndex(product => product.id === id);
  const currProduct = productsData[currIndex];
  const [currImg, setCurrImg] = useState(currProduct.thumbnail);

  const addItemHandler = food => {
    dispatch(
      cartActions.addItem({
        id: food.id,
        name: food.name,
        price: food.price,
      })
    );
  };

  const changeSliderPrevHandler = useCallback(
    id => {
      setCurrImg(currProduct.images[id]);
    },
    [currProduct.images]
  );

  return (
    <div>
      <div className="flex gap-4 items-center">
        <ImagesCol
          images={currProduct.images}
          changeSliderPrevHandler={changeSliderPrevHandler}
        />
        <figure>
          <img src={currImg} alt="" />
        </figure>
      </div>
      <h1 className="text-8xl">{currProduct?.name}</h1>
      <button onClick={addItemHandler.bind(null, currProduct)}>+</button>
    </div>
  );
};

export default Product;
