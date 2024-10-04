import { POST_NEWSLETTER_ENDPOINT } from "../constants/subcribernewsletterendpoint";
import axios, { AxiosError, AxiosResponse } from "axios";
interface SubscribeResponse {
  message: string;
  data?: any; 
}

export const SubriberNewsletter = async (email: string): Promise<SubscribeResponse | undefined> => {
  try {
    console.log("POST to:", POST_NEWSLETTER_ENDPOINT, "with email:", email); // Debug log

    const response: AxiosResponse<SubscribeResponse> = await axios.post(
      POST_NEWSLETTER_ENDPOINT,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      console.log("Berhasil Kirim data");
      return response.data;
    } else {
      console.error("Gagal subcribe. Response status:", response.status);
      throw new Error("Gagal to subscribe. Please try again.");
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axios.isAxiosError(axiosError)) {
      console.error("Axios error:", axiosError.message);
      if (axiosError.response) {
        console.error("Response data:", axiosError.response.data);
        console.error("Response status:", axiosError.response.status);
        const errorData = axiosError.response.data as SubscribeResponse;
        console.error("Error message:", errorData.message || "Failed to subscribe.");
        throw new Error(errorData.message || "Failed to subscribe."); // Specific error message
      } else if (axiosError.request) {
        console.error("Request data:", axiosError.request);
        throw new Error("No response from the server. Please check your network connection.");
      }
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred. Please try again."); // General error message
    }
  }

  return undefined;
};
