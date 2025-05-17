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

export async function fetchOpenTickets() {
  const response = await api.get("/open_tickets/fetch");
  return response.data;
}

export async function fetchAmmountOpenTickets() {
  const response = await api.get("/open_tickets/count");
  return response.data;
}
  
export async function fetchAvgResponseTime() {
  const response = await api.get("/closed_tickets/average_response_time");
  return response.data;
}
  