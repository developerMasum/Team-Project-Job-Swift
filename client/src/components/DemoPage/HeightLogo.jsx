import React from "react";
import img1 from "../../../public/heartimage1.png";
import img2 from "../../../public/heartimage2.png";
import img3 from "../../../public/heartimage3.png";
import img4 from "../../../public/heartimage4.png";
import img5 from "../../../public/heartimage5.png";
import img6 from "../../../public/heartimage6.png";
import img7 from "../../../public/heartimage7.png";
const images = [img1, img2, img3, img4, img5, img6, img7];

const HeightLogo = () => {
  return (
    <div className="bg-gradient-to-bl from-[#e0f99c] to-[#e0f99c]">
      <div className="max-w-[1100px] mx-auto p-10  ">
        <div className="grid sm:grid-cols-2 ml-12 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20">
          {images.map((image) => (
            <img md:width={150} src={image} alt="logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeightLogo;
