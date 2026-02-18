import apiClient from "../apiClient";

export const getHomeLayout = () => {
  return apiClient.get("/layout/home");
};
