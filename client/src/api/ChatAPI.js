// client/src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000", // FastAPI backend
});

// function to send user message to backend chat route
export const sendMessage = async (message) => {
  const response = await API.post("/api/chat", { message });
  return response.data; // { response: "..." }
};


export const predictDisease = async (symptoms, threshold = 20) => {
  const response = await API.post("/api/predict", {
    symptoms,
    threshold,
  });
  return response.data;
};