export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:9000"
    : "https://learn-arabic-alphabet-backend.herokuapp.com";
};
