import React from "react";
import { useRouteError, useNavigate } from "react-router";
import error404Img from "../assets/error-404.png";
import Container from "../Components/Container";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <img src={error404Img} alt="Error 404" className="w-1/2 md:w-1/3 lg:w-1/4" />
        <h1 className="text-4xl font-bold text-gray-800 mt-8">Oops! Something went wrong.</h1>
        <p className="text-lg text-gray-600 mt-4">
          {error.statusText || error.message || "An unexpected error has occurred."}
        </p>
        <button
          onClick={() => navigate(-1)}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Go Back
        </button>
      </div>
    </Container>
  );
};

export default ErrorPage;
