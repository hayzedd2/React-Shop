import React from "react";
import { useState, useEffect } from "react";

import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";
const Products = () => {
  const url = `http://127.0.0.1:8000/shopapp/products`;
  const [data, setData] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  interface Products {
    id: number;
    product_name: string;
    slug: string;
    price: number;
    image: string;
  }
  const getCategories = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setLoading(false);
        setData(data);
        console.log(data);
      } else {
        setError("Something went wrong.");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <section>
      <div className="products-grid">
        {loading && <Skeleton />}
        {error && <p>Error: {error}</p>}
        {data.length > 0 &&
          data.map((product, index) => {
            return (
              <div key={index}>
                {/* <Link to={`/${product.slug}`}> */}
                  <img src={`http://127.0.0.1:8000${product.image}`} alt="" />
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
    </section>
  );
};

export default Products;
