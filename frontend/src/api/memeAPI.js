import axios from "axios";

const API_URL = "http://localhost:5000/api/memes"; // Change this if your backend URL is different

const memeAPI = {
  // Fetch all memes from backend
  fetchMemes: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching memes:", error);
      return [];
    }
  },

  // Create a new meme
  createMeme: async (memeData) => {
    try {
      const response = await axios.post(API_URL, memeData);
      return response.data;
    } catch (error) {
      console.error("Error creating meme:", error);
      throw error;
    }
  },

  // Delete a meme by ID
  deleteMeme: async (memeId) => {
    try {
      const response = await axios.delete(`${API_URL}/${memeId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting meme:", error);
      throw error;
    }
  },
};

export default memeAPI;
