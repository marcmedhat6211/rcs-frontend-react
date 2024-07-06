// const errorsTest = {
//   name: ["This value should not be blank."],
//   description: ["This value should not be blank."],
// };

const setErrorOnResource = (errorsObj, setError) => {
  for (let fieldName in errorsObj) {
    for (let errorMessage of errorsObj[fieldName]) {
      setError(fieldName, { type: "custom", message: errorMessage });
    }
  }
};

export { setErrorOnResource };
