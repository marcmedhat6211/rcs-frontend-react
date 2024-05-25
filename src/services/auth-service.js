import { jwtDecode } from "jwt-decode";

const isAuthenticated = () => {
  if (!localStorage.getItem("token")) {
    return false;
  }
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp < Date.now() / 1000) {
    return false;
  }
  return true;
};
export { isAuthenticated };
