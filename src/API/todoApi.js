import axios from "axios";

const BaseUrl = "http://localhost:5040/task";

const getAllTasksData = async () => {
  const result = await axios.get(BaseUrl);
  return result.data;
};

const getOneTaskData = async (id) => {
  const result = await axios.get(`${BaseUrl}/${id}`);
  return result.data;
};

const createNewTask = async (data) => {
  const result = await axios.post(BaseUrl, data);
  return result.data;
};

const updateTaskData = async (id, data) => {
  const result = await axios.patch(`${BaseUrl}/${id}`, data);
  return result.data;
};

const deleteTaskData = async (id) => {
  const result = await axios.delete(`${BaseUrl}/${id}`);
  return result.data;
};

export { getAllTasksData, getOneTaskData, createNewTask, updateTaskData, deleteTaskData };
