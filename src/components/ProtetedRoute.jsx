import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProtetedRoute = ({ children, permiso }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.permisos?.includes(permiso)) {
      navigate('/');
    }
  }, [user, permiso, navigate]);

  //   if (!user?.permisos?.includes(permiso)) {
  //     return null;
  //   }

  return <>{children}</>;
};

export default ProtetedRoute;
