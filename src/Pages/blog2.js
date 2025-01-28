import React from 'react';
import { Link } from 'react-router-dom';

function Blog1() {
    return (
        <div className="min-h-screen bg-white w-[80%] ml-[10%] text-gray-800">
            <div className="container p-8 bg-white rounded-lg shadow-lg mx-auto mt-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-center text-brown-700">
                        Our Sustainability Journey
                    </h1>
                    <p className="text-center text-gray-600 mt-2">
                        Learn about our commitment to ethical sourcing and the positive impact it has on farmers and the environment.
                    </p>
                </div>

                {/* Featured Image */}
                <div className="w-full max-w-4xl mx-auto mb-8">
                    <img
                        src="https://d1g9yur4m4naub.cloudfront.net/image-handler/picture/2020/4/shutterstock_560673883.jpg"
                        alt="Our Sustainability Journey"
                        className="w-1/2 ml-56 rounded-lg shadow-lg"
                    />
                </div>

                {/* Blog Content */}
                <div className="w-full max-w-3xl mx-auto bg-slate-50 p-6 rounded-lg shadow-md">
                    <p className="text-lg text-gray-700 mb-4">
                        At MsCafe, sustainability is at the heart of everything we do. We believe in making choices that not only serve our customers but also nurture the planet and empower the communities we work with.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Our coffee beans are ethically sourced from farmers who practice environmentally friendly and socially responsible farming. By supporting fair trade, we ensure that farmers receive fair compensation for their hard work.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Additionally, we are constantly innovating to reduce waste and promote eco-friendly practices. From recyclable packaging to energy-efficient brewing methods, every small step contributes to a larger goal.
                    </p>
                    <p className="text-lg text-gray-700">
                        Join us on this journey to create a better world, one cup of coffee at a time. Together, we can brew a brighter future.
                    </p>
                </div>

                {/* Back Button */}
                <div className="mt-8 text-center">
                    <Link to="/blog">
                        <button className="px-6 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 shadow-lg">
                            Back to Blog
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Blog1;
