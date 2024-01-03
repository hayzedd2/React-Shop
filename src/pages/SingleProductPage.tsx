import React from "react";
interface SingleProductPageProps {
  data: SingleProduct[];
}

interface SingleProduct {
  id: number;
  product_name: string;
  slug: string;
  price: number;
  image: string;
  description: string;
}
const SingleProductPage: React.FC<SingleProductPageProps> = ({ data }) => {
  const radios = document.querySelectorAll("size-radio");
  radios.forEach((radio: any) => {
    console.log(radios);
    if (radio.checked === true) {
      // radio.classList.add("active")
      console.log("check");
    }
  });
  return (
    <>
      <section>
        <div className="w-full py-8 px-3 flex flex-col items-center bg-[#f3f2ee] h-auto">
          <div className="flex gap-3 font-afacad text-[1.15rem]">
            <a href="">Home</a>
            <a href="/">Shop</a>
            <a href="">Product Details</a>
          </div>
          <div className="mt-8">
            <img
              src={`http://127.0.0.1:8000${data[0].image}`}
              className="w-[25rem] h-[25rem] object-contain"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <div className="mt-8 text-center">
            <h3 className="font-afacad text-[1.85rem] font-[700]">
              {data[0].product_name}
            </h3>
            <h2 className="font-afacad text-[1.65rem] mt-1 font-[600]">$21</h2>
            <p className=" font-afacad text-[1.3rem]">{data[0].description}</p>
          </div>
          <div className="mt-5 mb-20">
            <form action="">
             <div className="flex gap-[6rem]">
             <div className="size">
                <div className="flex gap-4 items-center justify-center">
                  <div className=" font-afacad text-[1.45rem] font-[400]">
                    <p>Size: </p>
                  </div>
                  <div className="flex gap-3">
                    <label htmlFor="xxl" className="size-label">
                      <input
                        type="radio"
                        name="size"
                        className="size-radio"
                        id="xxl"
                      />
                      <div className="size-div"> XXL</div>
                    </label>
                    <label htmlFor="xl" className="size-label">
                      <input
                        type="radio"
                        name="size"
                        className="size-radio"
                        id="xl"
                      />
                      <div className="size-div"> XL</div>
                    </label>
                    <label htmlFor="l" className="size-label">
                      <input
                        type="radio"
                        name="size"
                        className="size-radio"
                        id="l"
                      />
                      <div className="size-div"> L</div>
                    </label>
                    <label htmlFor="s" className="size-label">
                      <input
                        type="radio"
                        name="size"
                        className="size-radio"
                        id="s"
                      />
                      <div className="size-div">S</div>
                    </label>
                   
                  </div>
                </div>
              </div>
              <div className="color flex items-center justify-center gap-4">
                <div>
                  <p>Color: </p>
                </div>
                <div>
                  <select name="" id="">
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                  </select>
                </div>
              </div>
             </div>
             <div className="text-center mt-8">
              <button className="btn-cart"><a href="/cart">Add to Cart</a></button>
             </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProductPage;
