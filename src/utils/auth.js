import axios from "axios";

const LOGIN_API_ENDPOINT = "https://p4teamproj.onrender.com/token/login";

export const login = async ({ username, password }) => {
  try {
    const response = await axios.post(LOGIN_API_ENDPOINT, {
      email: username,
      password,
    });

    localStorage.setItem("token", response.data.auth_token);
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return Boolean(token);
};
