import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NavSearch from '../NavSearch/NavSearch';

const Layout = ({ children }) => {
    return (
        <>
            <NavSearch />
            <Sidebar />
            <div className="ml-16 pt-16"> 
                {children}
            </div>
        </>
    );
};

export default Layout;
