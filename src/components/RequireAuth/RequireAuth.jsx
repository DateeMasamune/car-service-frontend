/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function RequireAuth({ children }) {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  if (!user.token) {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <Navigate to="/registration" state={{ from: location }} replace />;
  }
  return (
    children
  );
}

export default RequireAuth;
