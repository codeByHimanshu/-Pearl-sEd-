import React from 'react';
import { useUser, UserButton } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between bg-white shadow-md px-6 py-4">
      
      <img
        src="/src/assets/loggo.svg"
        alt="Logo"
        className="h-10 cursor-pointer"
        onClick={() => navigate('/')}
      />


      <div className="flex items-center gap-4">
        <p className="text-gray-700 font-medium">
          {user ? user.firstName : 'Anonymous'}
        </p>
        {user ? <UserButton afterSignOutUrl="/" /> : <span className="text-sm text-red-500">Not Signed In</span>}
      </div>
    </div>
  );
}

export default Navbar;
