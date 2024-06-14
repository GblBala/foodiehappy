import React from "react";

const ReviewwwCard = (props) => {
  return (
    <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
        <p className=" text-lightText">
        Exceptional dining experience! The chefs clearly put their heart into every dish, and it shows. The flavors were unique and delicious, and the service was top-notch. I appreciated the attention to detail and the friendly, welcoming staff. Can't wait to return and try more of the menu!      </p>
        </div>

      <div className=" flex flex-row justify-center items-center mt-4 gap-4">
        <img className=" rounded-full w-1/4" src={props.img} alt="img" />
        <h3 className=" font-semibold ">{props.name}</h3>
      </div>
    </div>
  );
};

export default ReviewwwCard;
