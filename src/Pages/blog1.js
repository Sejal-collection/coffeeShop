import React from 'react';
import { Link } from 'react-router-dom';

function Blog1() {
    return (
        <div className="min-h-screen bg-white w-[80%] ml-[10%] text-gray-800">
            <div className="container p-8 bg-white rounded-lg shadow-lg mx-auto mt-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-center text-brown-700">
                        The Art of Brewing
                    </h1>
                    <p className="text-center text-gray-600 mt-2">
                        A journey through the techniques and passion of perfect coffee brewing.
                    </p>
                </div>

                {/* Featured Image */}
                <div className="w-full max-w-4xl mx-auto mb-8">
                    <img
                        src="https://blog.mistobox.com/wp-content/uploads/2020/09/brewmethods.jpg"
                        alt="Art of Brewing"
                        className="w-1/2 ml-56 rounded-lg shadow-lg"
                    />
                </div>

                {/* Blog Content */}
                <div className="w-full max-w-3xl mx-auto bg-slate-50 p-6 rounded-lg shadow-md">
                    <p className="text-lg text-gray-700 mb-4">
                        Brewing coffee is an art that blends passion, technique, and the finest quality beans. At MsCafe, we believe every cup of coffee should be a masterpiece, a perfect balance of flavor and aroma.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        From choosing the right beans to mastering the brewing methods, there's a lot to explore. Whether you’re a fan of pour-over, French press, or espresso, each method has its unique charm and technique.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Our baristas dedicate time and effort to ensure that each cup served brings out the full potential of the beans, offering you an unparalleled experience with every sip.
                    </p>
                    <p className="text-lg text-gray-700">
                        Come visit us at MsCafe and embark on a flavorful journey of coffee brewing excellence. Your perfect cup awaits!
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
