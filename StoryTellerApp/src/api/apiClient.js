const BASE_URL = "http://10.124.165.45:5000/api";

const apiClient = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    const data = await response.json();

    // HTTP error handling
    if (!response.ok) {
      const error = new Error(
        data.message || "Something went wrong"
      );

      error.status = response.status;
      error.data = data;

      throw error;
    }

    return {
      status: response.status,
      data,
    };
  } catch (error) {
    console.log("API Client Error:", error);
    throw error;
  }
};

export default apiClient;