import React from "react";

const ReviewwCard = (props) => {
  return (
    <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
        <p className=" text-lightText">
        I was blown away by the quality and creativity of the menu. Every bite was a delightful surprise, and the wine pairing was spot on. The atmosphere is cozy yet sophisticated, making it an ideal place for a romantic dinner or a night out with friends. Highly recommend!        </p>
      </div>

      <div className=" flex flex-row justify-center items-center mt-4 gap-4">
        <img className=" rounded-full w-1/4" src={props.img} alt="img" />
        <h3 className=" font-semibold ">{props.name}</h3>
      </div>
    </div>
  );
};

export default ReviewwCard;
