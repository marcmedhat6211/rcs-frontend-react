// we need to configure a send request function:
// -path should be dynamic
// -method should be dynamic
// -data sent in the request body(in case of Only POST,PATCH,PUT) should be dynamic
// -request should have some headers(Content-Type:"application/json",
// Authorization:"Bearer tokenstring"which is added only if the request needed )

import QueryString from "qs";

const Base_URL = "https://3e5f-156-194-221-200.ngrok-free.app/api/";
const sendRequest = async (
  path,
  method,
  requestBody = {},
  queryParams = {},
  access = "protected"
) => {
  const response = await fetch(
    Base_URL +
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
