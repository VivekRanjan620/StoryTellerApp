import apiClient from "./apiClient";

export const signupUser = async (name, email, password) => {
  return apiClient("/auth/signup", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });
};

export const loginUser = async (email, password) => {
  return apiClient("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });
};