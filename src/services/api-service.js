// we need to configure a send request function:
// -path should be dynamic
// -method should be dynamic
// -data sent in the request body(in case of Only POST,PATCH,PUT) should be dynamic
// -request should have some headers(Content-Type:"application/json",
// Authorization:"Bearer tokenstring"which is added only if the request needed )

import QueryString from "qs";

// const Base_URL = "https://2f2a-154-180-173-104.ngrok-free.app/api/";

const sendRequest = async (
  path,
  method,
  requestBody = {},
  platform = "fe",
  queryParams = {},
  access = "protected"
) => {
  let BASE_URL = "";
  if (platform === "admin") {
    BASE_URL = process.env.REACT_APP_API_BASE_URL;
  } else {
    BASE_URL = process.env.REACT_APP_FE_API_BASE_URL;
  }

  const response = await fetch(
    BASE_URL +
      (Object.keys(queryParams).length > 0
        ? path + "?" + QueryString.stringify(queryParams)
        : path),
    {
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...(access === "protected"
          ? { Authorization: "Bearer " + localStorage.getItem("token") }
          : {}),
      },
      ...(["POST", "PUT", "PATCH"].includes(method)
        ? { body: JSON.stringify(requestBody) }
        : {}),
    }
  );

  if (!response.ok) {
    throw new Error("An Error Occurred!");
  }

  const responseData = await response.json();
  return responseData;
};
export { sendRequest };
