import axios from "axios";
import { OPENLIBRARY_BASE_URL } from '../config/env';

export const searchBooksOpenLibrary = async (query: string) => {
  const url = `${OPENLIBRARY_BASE_URL}/search.json?q=${encodeURIComponent(
    query
  )}`;
  const response = await axios.get(url);
  return response.data;
};
