import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <button
        onClick={() => navigate(-1)}
        className="text-white text-lg"
      >
        &larr; Previous Page
      </button>
      <h1 className="text-white text-2xl">Holiday Manager</h1>
    </nav>
  );
};

export default Navbar;
