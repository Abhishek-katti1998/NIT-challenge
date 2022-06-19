const validator = (curLocation, values) => {
  console.log(curLocation);
  const errors = {};
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  let mailformat =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  const passwordReg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if ((curLocation === "/signUp" || curLocation === "/login") && !values.name) {
    errors.name = "Required";
  }
  if (curLocation === "/signUp" && !values.email) {
    errors.email = "Required";
    // console.log(errors.email);
  }
  if (values.email && !mailformat.test(values.email)) {
    errors.email = "Invalid email ID";
  }
  if (curLocation === "/signUp" && !values.phoneNumber) {
    errors.phoneNumber = "Required";
  }
  if (
    curLocation === "/signUp" &&
    values.phoneNumber &&
    // !phoneRegex.test(values.phoneNumber)
    `${values.phoneNumber}`.length >= 10
  ) {
    errors.phoneNumber = "Enter valid phone number";
  }
  if (
    (curLocation === "/signUp" || curLocation === "/login") &&
    !values.password
  ) {
    errors.password = "Required";
  }
  if (values.password && !passwordReg.test(values.password)) {
    errors.password = "Enter valid password";
  }

  return errors;
};
export default validator;
