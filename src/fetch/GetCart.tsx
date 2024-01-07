import React from "react";
import { useEffect, useState } from "react";
import Cart from "../components/Cart";
const GetCart = () => {
  interface Cart {
    id: number;
    quantity: number;
    is_active: boolean;
    product: number;
    cart: number;
  }
  interface CartProduct{
    id:number;
    product_name : string;
    price : number;
    image :string
  }
  const [cartItems, setCartItems] = useState<Cart[]>([]);
  const product : CartProduct []= []
  const cartId: string = "4ohl5iq49qghjig4n5dg0ll2r5oy1is9";
  const fetchCartObj = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/cart/api/cart_detail/${cartId}`);
      const data = await response.json();
      setCartItems(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartObj();
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      const productId = cartItems[0].product;
      const fetchProductData = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/shopapp/singleproductbyid/${productId}/`);
          const data = await response.json();
          product.push(data)
          console.log(product[0].id);
        } catch (error) {
          console.error(error);
        }
      };

      fetchProductData();
    }
  }, []);

  return (
    <>
      <Cart data={product} />
    </>
  );
};

export default GetCart;
