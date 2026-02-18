import apiClient from "../apiClient";

export const getNavigation = () => {
  return apiClient.get("/navigation");
};
