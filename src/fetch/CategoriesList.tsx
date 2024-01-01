import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const url = "http://127.0.0.1:8000/categoryapi/";

const CategoriesList = () => {
  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [listOpen, setListOpen] = useState(true);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: number) => {
    navigate(`/categories/${categoryId}`);
  };
  interface Category {
    id: number;
    category_name: string;
  }
  const accordion = () => {
    setListOpen(!listOpen);
  };
  const getCategories = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setLoading(false);
        setData(data);
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
    <div>
      <p
        className="text-[1.3rem] font-[500] mb-2.5 flex items-center cursor-pointer justify-between uppercase"
        onClick={accordion}
      >
        Categories{" "}
        <FaAngleDown
          className={`text-[1.1rem] ${
            listOpen ? "angle-rotate-up" : "angle-rotate-down"
          } `}
        />
      </p>
      <ul className="text-[1.3rem] leading-[1.95]">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data.length > 0 &&
          (listOpen ? (
            <ul>
              <li><Link to={'/'}>All products</Link></li>
              {data.map((category, index) => (
                <li key={index}>
                  <Link
                  to={`/categories/${category.id}`}
                    // onClick={() => handleCategoryClick(category.id)}
                    className=" capitalize"
                  >
                    {category.category_name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null)}
      </ul>
    </div>
  );
};

export default CategoriesList;
