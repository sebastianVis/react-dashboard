import axios from "axios";

/**
 * Axios instance pre-configured for making API requests.
 *
 * - Base URL is set using the environment variable `NEXT_PUBLIC_API_BASE_URL`
 * - Includes default headers to accept JSON responses
 *
 * This instance can be used across the app to interact with backend services.
 * Ensure `NEXT_PUBLIC_API_BASE_URL` is defined in `.env.local` and Vercel env settings.
 *
 * @example
 * const response = await api.get("/tickets/get_data");
 */

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

export default api;
