import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NavSearch from '../NavSearch/NavSearch';

const Layout = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <NavSearch onSearch={handleSearch} />
      <Sidebar />
      <div className="ml-16">
        {React.cloneElement(children, { searchTerm })}
      </div>
    </>
  );
};

export default Layout;
