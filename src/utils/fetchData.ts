import axios from "axios";

export const getAPI = async (url: string, options = "") => {
  const res = await axios.get(`https://api.tvmaze.com/${url}${options}`);
  return res;
};
