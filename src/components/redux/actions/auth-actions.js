import { sendRequest } from "../../../services/api-service";
import { authReduxActions } from "../auth-Slice";

const login = (loginData) => {
  return async function (dispatch) {
    const response = await sendRequest(
      "login_check",
      "POST",
      { username: loginData.email, password: loginData.password },
      "admin",
      {},
      "public"
    );
    if (!response?.token) {
      return false;
    }
    localStorage.setItem("token", response.token);
    dispatch(
      authReduxActions.login({ email: response.email, roles: response.roles })
    );
    return true;
  };
};

export { login };
