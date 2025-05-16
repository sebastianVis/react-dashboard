import api from "@/lib/api";

/**
 * Fetches ticket data from the backend API.
 *
 * Uses the configured Axios instance from `@/lib/api` to call:
 *   GET /tickets/get_data
 *
 * @returns {Promise<any>} Resolves with the response data (array of tickets).
 *
 * @example
 * const tickets = await fetchTickets();
 */

export async function fetchTickets() {
  console.log("Fetching:", api.defaults.baseURL + "/tickets/get_data");
  const response = await api.get("/tickets/get_data");
  return response.data;
}
  