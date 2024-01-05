import React from "react";
import { FaAngleRight } from "react-icons/fa6";
const Checkout = () => {
  return (
    <section className="pb-20">
      <div className=" bg-[#f3f2ee]">
        <div className=" py-7 max-w-[75rem] mx-auto px-4 font-afacad">
          <h1 className="text-[1.85rem] font-[500] mb-2">Check Out</h1>
          <p className="text-[1.3rem] font-[400] flex gap-2 items-center">
            <a href="">Home</a>
            <FaAngleRight className="text-[1rem]" />
            <a href="">Shop</a>
            <FaAngleRight className="text-[1rem]" />
            <span className="text-[1.3rem] font-[400] text-[#b7b7b7]">
              <a href="">Check Out</a>
            </span>
          </p>
        </div>
      </div>
      <div className="flex xl:flex-nowrap sm:flex-wrap-reverse max-w-[75rem] mx-auto px-4 xl:mt-14 sm:mt-5 gap-[3rem]">
        <div className="checkout xl:basis-[65%] sm:basis-[100%]">
          <div className="checkout-body flex flex-col ">
            <div className="checkout-heading">
              <h1>BILLING DETAILS</h1>
            </div>
            <div className="mt-3">
              <form action="">
                <div className="row">
                  <div>
                    <label htmlFor="first-name">
                      First Name <span>*</span>
                    </label>
                    <input type="text" name="first-name" required />
                  </div>
                  <div>
                    <label htmlFor="last-name">
                      Last Name <span>*</span>
                    </label>
                    <input type="text" name="last-name" required />
                  </div>
                </div>
                <div className="row">
                  <div>
                    <label htmlFor="country">
                      Country<span>*</span>
                    </label>
                    <input type="text" name="country" required />
                  </div>
                  <div>
                    <label htmlFor="town">
                      Town/City<span>*</span>
                    </label>
                    <input type="text" name="town" required />
                  </div>
                </div>
                <div className="row">
                  <div className="full">
                    <label htmlFor="address">
                      Address<span>*</span>
                    </label>
                    <input type="text" name="address" required />
                  </div>
                </div>
                <div className="row">
                  <div>
                    <label htmlFor="email">
                      Email<span>*</span>
                    </label>
                    <input type="text" name="email" required />
                  </div>
                  <div>
                    <label htmlFor="phone">
                      Phone Number<span>*</span>
                    </label>
                    <input type="text" name="phone" required />
                  </div>
                </div>
                <div className="checkout-text">
                  <div className="flex gap-3 items-center">
                    <input type="checkbox" className=" cursor-pointer" />
                    <p>Create an account?</p>
                  </div>
                  <p className="mt-3">
                    Create an account by entering the information below. If you
                    are a returning customer please login at the top of the page
                  </p>
                </div>
                <div className="row">
                  <div className="full">
                    <label htmlFor="password">
                      Account Password
                    </label>
                    <input type="password" name="password" required />
                  </div>
                </div>
                <div className="row-btn mt-4 w-full">
                  <button>Place order</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="checkout-total xl:basis-[35%] sm:basis-[100%]">
          <div className="total font-afacad mt-10 px-4 py-8 bg-[#f3f2ee]">
            <div className="total-heading mb-5">
              <h3
                className="xl:text-[1.6rem] sm:text-[1.3rem] font-[500] pb-5"
                style={{ borderBottom: "1px solid #e1e1e1" }}
              >
                YOUR ORDER
              </h3>
            </div>
            <div className="total-body flex flex-col gap-4">
              <div className="py-4 flex flex-col gap-4">
                <div className="flex justify-between items-center w-full">
                  <h5 className="text-[1.1rem] uppercase font-[700] font-crimson ">Products</h5>
                  <p className="text-[1.1rem] uppercase font-[700] font-crimson ">Total</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <h5 className="text-[1.2rem]">Baggy jeans</h5>
                  <p className="text-[1.2rem] font-[700] font-crimson ">$21</p>
                </div>

                <div className="flex justify-between items-center w-full">
                  <h5 className="text-[1.2rem]">Red Shirt</h5>
                  <p className="text-[1.2rem] font-[700]  font-crimson">$21</p>
                </div>
              </div>

              <div
                style={{ borderBlock: "1px solid #d7d7d7" }}
                className="py-4"
              >
                <div className="flex justify-between items-center w-full">
                  <h5 className="text-[1.1rem] uppercase font-[700] font-crimson">Total</h5>
                  <p className="text-[1.2rem]  text-red-600 font-[700] font-crimson ">$42</p>
                </div>
              </div>

              {/* <div className="mt-5">
                <button>Place Order</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
