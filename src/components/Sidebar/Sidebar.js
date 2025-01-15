import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faUserGroup, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return (
        <aside className="h-screen w-16 bg-white border-r border-gray-300 flex flex-col items-center py-4">
            {/* Logo Section */}
            <NavLink to="/" className="mb-8">
                <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faLaptopCode} className="text-gray-700 text-lg" />
                </div>
            </NavLink>

            {/* Divider */}
            <hr className="w-full border-gray-300 mb-8" />

            {/* Sidebar Menu */}
            <nav className="flex flex-col items-center gap-6">
                {/* Message Icon */}
                <NavLink to="/messages" className="hover:text-blue-500">
                    <FontAwesomeIcon icon={faMessage} className="text-gray-700 text-2xl" />
                </NavLink>

                {/* User Group Icon */}
                <NavLink to="/user-group" className="hover:text-blue-500">
                    <FontAwesomeIcon icon={faUserGroup} className="text-gray-700 text-2xl" />
                </NavLink>
            </nav>
        </aside>
    );
}

export default Sidebar;
