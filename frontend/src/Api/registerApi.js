import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/register";

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(API_BASE_URL, formData);
    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getAllRegistrations = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching registrations:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getRegistrationById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching registration:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const updateRegistration = async (id, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(
      "Error updating registration:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const deleteRegistration = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting registration:",
      error.response?.data || error.message
    );
    throw error;
  }
};
