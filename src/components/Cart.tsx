import React from "react";
// @ts-ignore
import product from "../images/product-8.jpg";
import { FaTimes } from "react-icons/fa";
interface CartProps {
  data: CartProduct[];
}

interface CartProduct {
  id: number;
  product_name: string;
  price: number;
  image: string;
}
const Cart: React.FC<CartProps> = ({ data }) => {
  return (
    <section>
      <div className="flex xl:flex-nowrap sm:flex-wrap max-w-[75rem] mx-auto px-4 mt-14 gap-[6rem]">
        <div className="cart xl:basis-[65%] sm:basis-[100%]">
          <div className="heading xl:flex sm:hidden pb-5 font-afacad text-[1.2rem] font-[500]">
            <div className="basis-[50%]">
              <p>PRODUCT</p>
            </div>
            <div className="basis-[50%] flex">
              <p className="basis-[50%]">QUANTITY</p>
              <p className="basis-[50%]">TOTAL</p>
            </div>
          </div>
          <div>
            <div className="cart-body flex xl:flex-nowrap sm:flex-wrap mt-10">
              <div className="xl:basis-[50%] sm:basis-[100%] flex xl:flex-nowrap sm:flex-wrap xl:gap-6 sm:gap-3 items-center">
                <img src={product} className="w-24 h-24" alt="" />
                <div className=" font-afacad ">
                  <h3 className="text-[1.2rem] font-[500]">
                  {/* {data[0].product_name} */}
                  </h3>
                  <p className="text-[1.25rem] font-[700]">${data[0].price}</p>
                </div>
              </div>
              <div className="xl:basis-[50%] sm:basis-[100%] flex items-center">
                <p className="basis-[50%]">QUANTITY</p>
                <div className="basis-[50%] items-center font-afacad text-[1.4rem] font-[600] flex justify-between">
                  <p>$21</p>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#f3f2ee]">
                    <button>
                      <FaTimes className="w-[0.8rem]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="continue">continue shopping</button>
          </div>
        </div>
        <div className="cart-total xl:basis-[35%] sm:basis-[100%]">
          <div className="discount">
            <p className="font-afacad text-[1.2rem] font-[500] pb-5">
              DISCOUNT CODES
            </p>
            <form action="" className="flex">
              <input type="text" name="" id="" placeholder="Coupon code" />
              <button>APPLY</button>
            </form>
          </div>
          <div className="total font-afacad mt-10 px-8 py-10 bg-[#f3f2ee]">
            <div className="total-heading mb-5">
              <h3 className="text-[1.2rem] font-[500]">CART TOTAL</h3>
            </div>
            <div className="total-body flex flex-col gap-4">
              <div className="flex justify-between items-center w-full">
                <h5 className="text-[1.2rem]">Total Price</h5>
                <p className="text-[1.25rem] text-red-600 font-[600] ">$21</p>
              </div>
              <div className="flex justify-between items-center w-full">
                <h5 className="text-[1.2rem]">Tax</h5>
                <p className="text-[1.25rem] text-red-600 font-[600] ">$0.41</p>
              </div>
              <div className="flex justify-between items-center w-full">
                <h5 className="text-[1.2rem]">Grand Total</h5>
                <p className="text-[1.25rem] text-red-600 font-[600] ">
                  $21.41
                </p>
              </div>
              <div className="mt-5">
                <button>Proceed to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
