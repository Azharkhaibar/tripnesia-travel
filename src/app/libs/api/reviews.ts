import { ReviewsInterface } from "@/app/interface/reviews";
import axios from "axios";
import { HIGH_RATING_REVIEWS } from "../constants/highreviews";
import { REVIEWS_ENDPOINT } from "../constants/reviews";

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export const GetReviewsData = async (): Promise<ApiResponse<ReviewsInterface[]>> => {
  try {
    const response = await axios.get<ApiResponse<ReviewsInterface[]>>(REVIEWS_ENDPOINT);
    return response.data; 
  } catch (error) {
    console.error("Error when fetching reviews:", error);
    throw error;
  }
};

export const GetHighRatingReviews = async (): Promise<ApiResponse<ReviewsInterface[]>> => {
  try {
    const response = await axios.get<ApiResponse<ReviewsInterface[]>>(HIGH_RATING_REVIEWS);
    return response.data; 
  } catch (error) {
    console.error("Unable to fetch High Rating reviews:", error);
    throw error;
  }
};
