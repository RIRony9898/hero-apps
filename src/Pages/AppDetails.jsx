import React from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import { Download, Star, UserStar } from "lucide-react";
import Container from "../Components/Container";
import RatingChart from "../Components/RatingChart";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  // console.log(id, apps);
  const app = apps.find((app) => app.id === parseInt(id));
  // console.log(app);

  if (loading) return <p>Loading.......</p>;

  const { title, image, downloads, ratingAvg, description, reviews, size, companyName } =
    app || {};
  return (
    <div>
      <Container>
        {/* app banner section */}
        <div className="flex flex-col md:flex-row gap-30 my-10">
          <div className="w-72 h-72 flex items-center justify-center">
            <img
              className="object-contain w-full h-full"
              src={image}
              alt={title}
            />
          </div>
          <div>
            <div className="pb-5 border-b border-gray-300">
              <h2 className="text-4xl font-bold my-5">{title}</h2>
              <p>Developed by <span className="text-primary">{companyName}</span></p>
            </div>
            <div className="flex gap-30 my-5 pt-5">
              <div className="flex flex-col gap-2">
                <Download />
                <p>Downloads</p>
                <h5 className="font-extrabold text-4xl">{downloads}</h5>
              </div>
              <div className="flex flex-col gap-2">
                <Star />
                <p>Average Ratings</p>
                <h5 className="font-extrabold text-4xl">{ratingAvg}</h5>
              </div>
              <div className="flex flex-col gap-2">
                <UserStar />
                <p>Total Reviews</p>
                <h5 className="font-extrabold text-4xl">{reviews}</h5>
              </div>
            </div>
            <button className="btn btn-primary mt-10">Install Now {'('}{size}{')'}</button>
          </div>
        </div>
        {/* ratings graph */}
        <div>
          <h3 className="text-3xl font-bold mb-5">Ratings</h3>
          <div>
            <RatingChart/>
          </div>
        </div>
        {/* description */}
        <div>
          <h3 className="text-3xl font-bold my-5">Description</h3>
          <p className="text-xl my-5 text-gray-500">{description}</p>
        </div>
      </Container>
    </div>
  );
};

export default AppDetails;
