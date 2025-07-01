import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { token, userData, setToken, setUserData } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken('');
    setUserData(false);
    navigate('/login');
  };

  return (
    <nav className="flex justify-between py-4 items-center">
      <Link to="/" className="text-2xl font-bold text-blue-700">Prescripto</Link>
      <ul className="flex gap-6 items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/doctors">All Doctors</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {token ? (
          <>
            <li>
              <Link to="/my-profile" className="text-white bg-primary px-4 py-2 rounded">
                My Profile
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="text-red-600">Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register" className="bg-primary text-white px-4 py-2 rounded">
                Create Account
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
