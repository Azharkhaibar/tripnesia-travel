import { useState } from "react";
import { SubriberNewsletter } from "../api/subcribernewsletter";

export const useNewsletterSubscription = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); 
  const [error, setError] = useState<string | null>(null); 


  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailPattern.test(email); 
  };

  const handleSubscribeNewsletter = async () => {
    setError(null); 

    // Check if email is valid
    if (!email) {
      setError("Please enter a valid email address.");
      return; // Exit the function if the email is empty
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return; // Exit if the email format is invalid
    }

    setLoading(true); // Set loading state to true

    try {
      await SubriberNewsletter(email); // Attempt to subscribe
      alert("Successfully subscribed to the newsletter!"); // Alert success
    } catch (err) {
      console.error("Subscription failed:", err);
      if (err instanceof Error) {
        setError(err.message); // Set specific error message from the server response
      } else {
        setError("An unexpected error occurred. Please try again."); // General error message
      }
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return {
    email,
    setEmail,
    loading,
    error,
    handleSubscribeNewsletter, // Ensure consistent naming
  };
};
