function useWriteReduxAndLocalStorage(dispatch, action, data, key) {
  dispatch(action(data));
  localStorage.setItem(key, JSON.stringify(data));
}

export default useWriteReduxAndLocalStorage;
