import { signUpUrl, logInUrl } from "../config";
export const signUp = async (userName, email, password, phoneNumber) => {
  const data = {
    user: userName,
    phone_number: phoneNumber,
    password,
    email: email,
  };
  return await (
    await fetch(signUpUrl, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();
};
export const login = async (userName, password) => {
  const data = {
    username: userName,
    password,
  };

  return await (
    await fetch(logInUrl, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();
};
