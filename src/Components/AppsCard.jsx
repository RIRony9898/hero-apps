import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const AppsCard = ({ app }) => {
  const { title, image, downloads, ratingAvg } = app;
  return (
    <Link to={`/apps/${app.id}`}>
      <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden transform hover:scale-105">
        <figure className="h-48 w-full bg-gray-100 flex items-center justify-center p-4">
          <img className="max-h-full max-w-full object-contain" src={image} alt={title} />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-2xl font-bold text-gray-800 truncate">
            {title}
          </h2>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center text-blue-600 font-semibold">
              <Download className="w-5 h-5 mr-1" />
              <span>{downloads}</span>
            </div>
            <div className="flex items-center text-yellow-500 font-semibold">
              <Star className="w-5 h-5 mr-1 fill-current" />
              <span>{ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
