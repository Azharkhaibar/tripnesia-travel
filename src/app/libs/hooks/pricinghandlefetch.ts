"use client";
import { useState, useEffect } from "react";
import { PricingPlanInterface } from "@/app/interface/pricingplan";
import { fetchPricingPlans } from "../api/contactapi";

export const HooksPricingPlans = () => {
  const [PricingPlans, setPricingPlans] = useState<PricingPlanInterface[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const FetchPlanPricing = async () => {
      try {
        const data = await fetchPricingPlans();
        console.log("Fetched Pricing Plans:", data); 
        setPricingPlans(data);
      } catch (err) {
        setError("Failed to fetch pricing plans");
        console.error("Error fetching pricing plans:", err);
      }
    };
    FetchPlanPricing();
  }, []);

  return {
    PricingPlans,
    error,
  };
};

