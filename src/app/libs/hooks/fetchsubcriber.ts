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
    if (!email) {
      setError("Please enter a valid email address.");
      return; 
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true); 

    try {
      await SubriberNewsletter(email); 
      alert("Successfully subscribed to the newsletter!"); 
    } catch (err) {
      console.error("Subscription failed:", err);
      if (err instanceof Error) {
        setError(err.message); 
      } else {
        setError("An unexpected error occurred. Please try again."); 
      }
    } finally {
      setLoading(false); 
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
