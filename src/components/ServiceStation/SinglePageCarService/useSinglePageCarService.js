import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import deleteQ from '../../../api/delete';
import endPoint from '../../../api/endPoint';

function useSinglePageCarService() {
  const [load, setLoad] = useState(false);
  const location = useLocation().pathname.split('/');
  const pageId = location[location.length - 1];
  const navigate = useNavigate();
  const reduxStore = useSelector((store) => store.serviceStation);
  const user = useSelector((store) => store.user);
  const currentService = useMemo(() => (
    // eslint-disable-next-line no-underscore-dangle
    reduxStore.find((service) => service._id === pageId)
  ), [reduxStore]);

  const backPage = () => (navigate(-1));

  const handleRemoveService = () => {
    setLoad(true);
    // eslint-disable-next-line no-underscore-dangle
    deleteQ(`${endPoint}/api/autoService/remove/${currentService._id}`, user.token)
      .then((res) => {
        if (res) {
          navigate('/');
        }
      })
      .finally(() => setLoad(false));
  };

  return {
    currentService,
    backPage,
    handleRemoveService,
    user,
    load,
  };
}

export default useSinglePageCarService;
