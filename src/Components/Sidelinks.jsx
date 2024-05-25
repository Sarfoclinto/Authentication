import React from "react";
import { Link } from "react-router-dom";

function Sidelinks({ name, img, href }) {
  return (
    <li>
      <a
        href={`/${href}`}
        className="flex items-center py-2 gap-x-2 cursor-pointer hover:border-2 hover:px-3 hover:border-r-0 hover:border-l-0"
      >
        <img src={`src/assets/${img}.png`} alt="" className="w-2/12" />
        <p className="text-purple-700 font-semibold text-base hover:text-black">
          {name}
        </p>
      </a>
    </li>
  );
}

export default Sidelinks;
