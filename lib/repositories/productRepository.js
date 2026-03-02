import apiClient from "../apiClient";

export const getProductLayout = async (slug) => {
  return apiClient.get(`/layout/product?url=${slug}`);
};