import axios from "axios";
import { OPENLIBRARY_BASE_URL } from "../config/env";

export const searchBooksOpenLibrary = async (
  query: string,
  page: number,
  limit: number
) => {
  const response = await axios.get(`${OPENLIBRARY_BASE_URL}/search.json`, {
    params: { q: query, page },
  });

  const docs = response.data.docs || [];
  const total = response.data.numFound || 0;
  const totalPages = Math.ceil(total / limit);
  const paginatedDocs = docs.slice(0, limit);

  return {
    results: paginatedDocs,
    pagination: {
      total,
      page,
      limit,
      totalPages,
    },
  };
};
