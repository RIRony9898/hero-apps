import { Download, Star } from "lucide-react";
import React from "react";

const AppsCard = ({ app }) => {
  const { title, image, downloads, ratingAvg } = app;
  console.log(app);
  return (
    <div>
      <div className="card bg-base-100 shadow-sm border border-gray-200">
        <figure className="w-60 h-80 mx-auto">
          <img className="object-cover" src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-medium text-xl">{title}</h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline p-5">
              <Download />
              {downloads}
            </div>
            <div className="badge badge-outline p-5">
              <Star />
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;
