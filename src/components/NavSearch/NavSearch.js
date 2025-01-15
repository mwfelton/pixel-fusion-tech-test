import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import UserOne from '../../images/MA-6.webp';

function NavSearch() {
    return (
        <header className="sticky top-0 z-40 bg-white border-b border-gray-300 shadow-sm" style={{ marginLeft: '4rem' }}>
            <div className="flex items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
                {/* Left: Feed Heading */}
                <h1 className="text-lg font-bold text-gray-700">Feed</h1>

                {/* Center: Search Form */}
                <div className="flex-grow flex justify-center">
                    <form action="https://formbold.com/s/unique_form_id" method="POST">
                        <div className="relative flex items-center w-full max-w-md border border-gray-300 rounded-lg bg-white">
                            {/* Search Icon */}
                            <span className="pl-3 text-gray-500">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </span>
                            {/* Input Field */}
                            <input
                                type="text"
                                placeholder="Search:"
                                className="flex-grow bg-transparent pl-3 pr-3 text-black focus:outline-none dark:text-white"
                            />
                            {/* Close Icon */}
                            <button type="button" className="pr-3 text-gray-500 hover:text-red-500">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right: User Avatar */}
                <div className="flex items-center gap-3 2xsm:gap-7">
                    <span className="h-12 w-12 rounded-full">
                        <img src={UserOne} alt="User" />
                    </span>
                </div>
            </div>
        </header>
    );
}

export default NavSearch;
