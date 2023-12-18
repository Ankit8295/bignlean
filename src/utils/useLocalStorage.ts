export const useLocalStorage = () => {
  if (window) {
    return localStorage;
  } else {
    return null;
  }
};
