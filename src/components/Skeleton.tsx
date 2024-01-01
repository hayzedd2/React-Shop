import React from "react";

const Skeleton = () => {
  return (
    <section>
      <div className="products-grid">
        {[...Array(6)].map((_, index) => (
          <div key={index}>
            <div className="box w-full h-[12rem]"></div>
            <div className="box w-full h-[1rem] mt-2"></div>
            <div className="box w-[85%] h-[1rem] mt-2"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skeleton;
