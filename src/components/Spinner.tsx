import React from "react";
import { ColorRing } from "react-loader-spinner";

const Spinner = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#000000", "#000000", "#000000", "#000000", "#000000"]}
      />
    </section>
  );
};

export default Spinner;
