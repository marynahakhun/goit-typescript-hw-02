import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhotos = async <T>(
  searchQuery: string,
  currentPage: number
): Promise<T> => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "EQCHJOvDbQ96Gv0obCRXfBXjIJG0Cc7Fl1V9Zl1MWOs",
      query: searchQuery,
      per_page: 12,
      page: currentPage,
    },
  });
  return response.data.results as T;
};
