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
  description : string;
}
const SingleProductPage: React.FC<SingleProductPageProps> = ({ data }) => {
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
        </div>
      </section>
    </>
  );
};

export default SingleProductPage;
