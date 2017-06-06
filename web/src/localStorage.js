export const loadState = () => {
  try {
    const serializedData = localStorage.getItem('state');

    if (null === serializedData) {
      return undefined;
    }

    return JSON.parse(serializedData);
  } catch (err) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error('saveState', err);
  }
}
