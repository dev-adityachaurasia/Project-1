import React from "react";

const SideList = ({ name, img, onClick }) => {
  return (
    <li onClick={onClick} className="flex cursor-pointer items-center px-2 py-3 my-1 font-bold hover:bg-gray-300 rounded-lg ">
      <img src={img} width="24px" alt="" className="mr-2" />
      {name}
    </li>
  );
};

export default SideList;
