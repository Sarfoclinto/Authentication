import React from "react";
import { Link } from "react-router-dom";

function Sidelinks({ name, img, to }) {
  return (
    <li>
      <Link
        to={`${to}`}
        className="flex items-center py-2 gap-x-2 cursor-pointer"
      >
        <img src={`src/assets/${img}.png`} alt="" className="w-2/12" />
        <p className="text-purple-700 font-semibold text-base hover:text-black">
          {name}
        </p>
      </Link>
    </li>
  );
}

export default Sidelinks;
