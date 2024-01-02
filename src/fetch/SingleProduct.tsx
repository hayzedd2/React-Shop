import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleProductPage from "../pages/SingleProductPage";
import Spinner from "../components/Spinner";
import Error from "../components/Error";

const SingleProduct = () => {
  const { slug } = useParams();
  const url = `http://127.0.0.1:8000/shopapp/singleproduct/${slug}`;
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  interface Product {
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
      } else {
        console.log(response.status);
        setLoading(false)
      }
    } catch (err: any) {
      setError(`Error: ${err.message}`);
      setLoading(false)
    }
  };

  useEffect(() => {
    singleCategory();
  }, [slug]);

  return (
    <div>
      {loading && <Spinner />}
      {error && <p>{error}</p>}
      {data && <SingleProductPage data={data} />}
    </div>
  );
};

export default SingleProduct;
