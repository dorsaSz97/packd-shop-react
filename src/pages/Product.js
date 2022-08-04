import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import productsData from '../data/productsData';
import { cartActions } from '../store/cartSlice';

const Product = () => {
  const { id } = useParams();
  console.log(id);
  console.log(productsData);
  const [currProduct, setCurrProduct] = useState({});

  console.log(currProduct);
  useEffect(() => {
    const currIndex = productsData.findIndex(product => product.id === id);
    const currProduct = productsData[currIndex];
    console.log(currProduct);
    setCurrProduct(currProduct);
  }, [id]);

  const dispatch = useDispatch();
  const addItemHandler = food => {
    console.log(food);
    dispatch(
      cartActions.addItem({
        id: food.id,
        name: food.name,
        price: food.price,
      })
    );
  };

  return (
    <div>
      <h1 className="text-8xl">{currProduct?.name}</h1>
      <button onClick={addItemHandler.bind(null, currProduct)}>+</button>
    </div>
  );
};

export default Product;
