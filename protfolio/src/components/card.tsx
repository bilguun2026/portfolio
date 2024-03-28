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
    <Link to={url} className="max-w-sm w-full h-96 lg:max-w-full lg:flex ">
      <div className="flex flex-col lg:flex-row">
        <div className="relative group h-48 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden rounded-l-2xl">
          <img
            src={imageUrl}
            alt="Image"
            className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
            <button className="text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
              Quiz бөглөх
            </button>
          </div>
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-r-2xl p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardComponent;
