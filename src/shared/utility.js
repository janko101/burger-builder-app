export const UpdateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const checkValidity = (value, rules) => {
  let isValid = false;
  if (!rules) {
    return true;
  }
  if (rules.required) {
    isValid = value.trim() !== "";
  }
  if (rules.length) {
    isValid = value.length === rules.length;
  }
  if (rules.hasEmailFormat) {
    isValid = value.includes("@" && ".");
  }
  return isValid;
};
