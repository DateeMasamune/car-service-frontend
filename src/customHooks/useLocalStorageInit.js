const useLocalStorageInit = (key, data) => {
  if (key && data && !localStorage.getItem(key)) localStorage.setItem(key, JSON.stringify(data));
};

export default useLocalStorageInit;
