import React from "react";
import { Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  url: string;
}

const CardComponent: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  url,
}) => {
  return (
    <Link to={url} className="max-w-sm w-full h-96 lg:max-w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden rounded-l-2xl"
        style={{ backgroundImage: `url(${imageUrl})` }}
        title="Image"
      ></div>
      <div className="border border-gray-400 lg:border-gray-400 bg-white rounded-r-2xl p-4 flex flex-col justify-between leading-normal">
        <div className="mb-4">
          <p className="text-sm text-gray-600 flex items-center">
            <AiFillLock className="fill-current text-gray-500 w-3 h-3 mr-2" />
            Members only
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardComponent;
