import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Skeleton from "../components/Skeleton";
import Error from "../components/Error";
const SingleCategory = () => {
  const { category_id } = useParams();
  const url = `http://127.0.0.1:8000/shopapp/productsbycategory/${category_id}`;
  const [data, setData] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  interface Category {
    id: number;
    product_name: string;
    slug: string;
    price: number;
    image: string;
    description: string;
  }

  const singleCategory = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const productData = await response.json();
        setLoading(false);
        setData(productData);
        console.log(productData);
      } else {
        const errorMessage = await response.text();
        setError(`Error: ${errorMessage}`);
      }
    } catch (err: any) {
      setError(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    singleCategory();
  }, [category_id]);

  return (
    <div>
      {loading && <Skeleton />}
      {error && <Error/>}
      {data && (
        <div className="products-grid basis-[80%]">
          {data.length > 0 &&
            data.map((product, index) => {
              return (
                <div key={index}>
                  {/* <Link to={`/${product.slug}`}> */}
                  <img src={`http://127.0.0.1:8000${product.image}`} className="w-[18rem] h-[18rem] object-contain" alt="" />
                  <div className="mt-2.5">
                    <p> {product.product_name}</p>
                    <h1 className="text-[1.45rem] font-[700]">
                      ${product.price}
                    </h1>
                    <a href={`/${product.slug}`}>View</a>
                  </div>
                  {/* </Link> */}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default SingleCategory;
