import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks"; // Cambia la URL según tu backend.

const getAllTasks = () => axios.get(API_URL);

const getTaskById = (id) => axios.get(`${API_URL}/${id}`);

const createTask = (task) => axios.post(API_URL, task);

const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);

const taskService = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
};

export default taskService;
