import apiClient from "../apiClient";

export const getOrganization = async () => {
  const res = await apiClient.get("/organization");
  return res.data.data;
};