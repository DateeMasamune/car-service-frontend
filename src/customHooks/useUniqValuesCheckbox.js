const useUniqValuesCheckbox = (event, state, setState) => {
  if (!event.target.checked) {
    const newState = state.filter((element) => element !== event.target.name);
    setState(newState);
  } else {
    if (!state.includes(event.target.name)) {
      setState((prevState) => [...prevState, event.target.name]);
    }
    setState((prevState) => prevState);
  }
};

export default useUniqValuesCheckbox;
