import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = "24097500-b1b25815474c0bcb76303e859";

export const fetchImg = async (searchQuery = "", page) => {
  const url = `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(url);
  return response;
};
