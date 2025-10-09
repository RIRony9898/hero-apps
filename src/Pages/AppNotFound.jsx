import React from 'react';
import { useNavigate } from 'react-router';
import AppNotFoundImg from '../assets/App-Not-Found.png';
import Container from '../Components/Container';

const AppNotFound = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <div className="flex flex-col items-center justify-center min-h-screen text-center">
                <img src={AppNotFoundImg} alt="App Not Found" className="w-1/2 md:w-1/3 lg:w-1/4" />
                <h1 className="text-4xl font-bold text-gray-800 mt-8">App Not Found</h1>
                <p className="text-lg text-gray-600 mt-4">Sorry, we couldn't find the app you're looking for.</p>
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

export default AppNotFound;
