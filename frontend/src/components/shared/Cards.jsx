import React from "react";

const Cards = () => {
  return (
    <div className="border w-full h-40 text-sm rounded-lg">
      <div className="flex justify-center">
        <div className="font-bold">Companyname</div>
        <div> Role</div>
      </div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, numquam.
        Reiciendis nam molestias enim dolor delectus sint incidunt, veniam
        facilis.
      </div>
      <div className="flex gap-2 justify-around">
        <span className="border rounded-full text-blue-600 px-2 font-bold shadow-md">
          10 openings
        </span>
        <span className="border rounded-full text-yellow-600 px-2 font-bold shadow-md">
          full- time
        </span>
        <span className="border rounded-full text-red-600 px-2 font-bold shadow-md">
          15LPA
        </span>
      </div>
    </div>
  );
};

export default Cards;
