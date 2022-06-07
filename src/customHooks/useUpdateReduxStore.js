const useUpdateReduxStore = (setLoad, dispatch, action, data, localStorageItem) => {
  setLoad(true);
  return new Promise((res) => {
    dispatch(action(data));
    if (localStorageItem) {
      localStorage.setItem(localStorageItem, JSON.stringify(data));
    }
    setLoad(false);
    res('ready');
  });
};

export default useUpdateReduxStore;
