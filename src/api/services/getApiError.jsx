import axios from "axios";

export const getApiErrorMessage = (
  error,
  fallback = "Something went wrong."
) => {
  if (axios.isAxiosError(error)) {
    const detail = error.response?.data?.detail;

    if (typeof detail === "string") {
      return detail;
    }

    if (detail?.message) {
      return detail.message;
    }

    if (error.response?.data?.message) {
      return error.response.data.message;
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallback;
};