import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function useSideBar(window) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.setItem('user', JSON.stringify({}));
    navigate('/login');
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return {
    mobileOpen,
    handleDrawerToggle,
    container,
    pathname,
    handleLogout,
  };
}

export default useSideBar;
