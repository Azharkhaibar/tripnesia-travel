"use client";
import { useEffect, useState } from "react";
import { GetHighRatingReviews } from "../api/reviews";
import { ReviewsInterface } from "@/app/interface/reviews";

export const useReviews = () => {
  const [HighRatingReviews, setHighRatingReviews] = useState<ReviewsInterface[]>([]);
  const [err, setError] = useState<string | null>(null);

  useEffect(() => {
    const FetchReviewsData = async () => {
      try {
        const response = await GetHighRatingReviews();
        console.log("Fetched Reviews:", response); 
        if (response.success) {
          setHighRatingReviews(response.data); 
        } else {
          setError("Failed to fetch reviews.");
        }
      } catch (err) {
        setError("Failed to fetch data for Reviews");
      }
    };
    FetchReviewsData();
  }, []);

  return {
    HighRatingReviews,
    err,
  };
};
