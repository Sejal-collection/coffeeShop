import React from 'react';
import { Link } from 'react-router-dom';

function Blog1() {
    return (
        <div className="min-h-screen bg-white w-[80%] ml-[10%] text-gray-800">
            <div className="container p-8 bg-white rounded-lg shadow-lg mx-auto mt-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-center text-brown-700">
                    The Perfect Bean
                    </h1>
                    <p className="text-center text-gray-600 mt-2">
                        Discover the secrets behind the perfect coffee bean and the art of brewing the perfect cup.
                    </p>
                </div>

                {/* Featured Image */}
                <div className="w-full max-w-4xl mx-auto mb-8">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcuIiY7YeF57cYcrlzNynVRZACaoSxR8ujJw&s"
                        alt="Art of Brewing"
                        className="w-1/2 h-[80%] ml-56 rounded-lg shadow-lg"
                    />
                </div>

                 {/* Blog Content */}
                 <div className="w-full max-w-3xl mx-auto bg-slate-50 p-6 rounded-lg shadow-md">
                    <p className="text-lg text-gray-700 mb-4">
                        At MsCafe, every cup of coffee starts with the perfect bean. We believe that quality begins at the source, which is why we work closely with farmers around the world to ensure only the finest beans make it into your cup.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Our beans are grown in the most ideal climates, handpicked at peak ripeness, and carefully processed to retain their natural flavor and aroma. We prioritize sustainable farming methods to protect the environment and support local communities.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Once the beans reach our roastery, they undergo a meticulous roasting process. Each batch is roasted to perfection, unlocking its unique profile and bringing out notes of chocolate, caramel, citrus, or floral undertones, depending on the bean's origin.
                    </p>
                    <p className="text-lg text-gray-700">
                        Finally, the brewing process brings it all together. Whether you prefer a classic espresso, a smooth pour-over, or a rich French press, the journey of the perfect bean culminates in a cup that delights the senses and invigorates the soul.
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
