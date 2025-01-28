import React from 'react';
import { Link } from 'react-router-dom';

function CoffeeBlog() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            <div className="blogContainer p-8">
                <h1 className="text-4xl font-bold text-center mb-8 text-brown-600">
                    Coffee Chronicles
                </h1>
                <div className="blogCards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
                        <h2 className="text-2xl font-semibold p-4 bg-brown-200 text-brown-800">
                            The Art of Brewing
                        </h2>
                        <div className="imageContainer">
                        <img
                            className="w-full h-48 px-5"
                            src="https://blog.mistobox.com/wp-content/uploads/2020/09/brewmethods.jpg"
                            alt="Art of Brewing"
                        />

                        </div>
                        <p className="p-4 text-gray-700">
                            Brewing coffee is an art that blends passion, technique, and quality beans. Discover the secrets behind perfect brews and learn why every cup at MsCafe is a masterpiece.
                        </p>
                        <Link
                            to="/blog1"
                            className="m-4 px-40 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
                        >
                            Read More
                        </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
                        <h2 className="text-2xl font-semibold p-4 bg-brown-200 text-brown-800">
                            Our Sustainability Journey
                        </h2>
                        <div className="imageContainer">
                            <img
                                className="w-full h-48 px-5  object-cover"
                                src="https://d1g9yur4m4naub.cloudfront.net/image-handler/picture/2020/4/shutterstock_560673883.jpg"
                                alt="Sustainability Journey"
                            />
                        </div>
                        <p className="p-4 text-gray-700">
                            At MsCafe, sustainability isn’t just a buzzword—it’s a way of life. Learn about our commitment to ethical sourcing and the positive impact it has on farmers and the environment.
                        </p>
                        <Link
                            to="/blog2"
                            className="m-4 px-40 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
                        >
                            Read More
                        </Link>
                    </div>

                    {/* Card 3 */}
                    <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
                        <h2 className="text-2xl font-semibold p-4 bg-brown-200 text-brown-800">
                            The Perfect Bean
                        </h2>
                        <div className="imageContainer">
                            <img
                                className="w-full h-48 px-5  object-cover"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcuIiY7YeF57cYcrlzNynVRZACaoSxR8ujJw&s"
                                alt="Perfect Bean"
                            />
                        </div>
                        <p className="p-4 text-gray-700">
                            Great coffee starts with the perfect bean. Explore our journey in selecting the finest beans from sustainable farms worldwide and how it creates a difference in every sip.
                        </p>
                        <Link
                            to="/blog3"
                            className="m-4 px-40 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoffeeBlog;