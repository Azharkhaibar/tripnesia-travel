import { useState } from "react";

export const useContactForm = () => {
  const [firstnameClient, setFirstNameClient] = useState("");
  const [email, setEmail] = useState("");
  const [typedestination, setTypeDestination] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setFirstNameClient("");
    setEmail("");
    setTypeDestination("");
    setMessage("");
  };

  return {
    firstnameClient,
    setFirstNameClient,
    email,
    setEmail,
    typedestination,
    setTypeDestination,
    message,
    setMessage,
    resetForm,
  };
};
