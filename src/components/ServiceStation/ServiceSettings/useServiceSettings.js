import { useEffect, useState } from 'react';

import useUniqValuesCheckbox from '../../../customHooks/useUniqValuesCheckbox';

function useServiceSettings(setAllCarBrands) {
  const [openCheckbox, setOpenCheckbox] = useState(false);
  const [carBrand, setCarBrand] = useState('');
  const [selectDetail, setSelectDetail] = useState([]);

  const handlerSetCarBrand = (event) => {
    setCarBrand(event.target.value);
  };

  const handleChangeCheckbox = (event) => {
    useUniqValuesCheckbox(event, selectDetail, setSelectDetail);
  };

  const handleClick = () => {
    setOpenCheckbox((prevState) => !prevState);
  };

  useEffect(() => {
    const carAndSettings = {
      [carBrand]: {
        spareParts: selectDetail,
      },
    };

    if (!!carAndSettings[carBrand]
      && !!selectDetail.length) {
      setAllCarBrands((prevState) => ({
        ...prevState,
        ...carAndSettings,
      }));
    }
  }, [selectDetail, carBrand]);

  return {
    carBrand,
    openCheckbox,
    handlerSetCarBrand,
    handleClick,
    handleChangeCheckbox,
  };
}

export default useServiceSettings;
