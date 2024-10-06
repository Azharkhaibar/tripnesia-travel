import axios from "axios";
import { CONTACT_API_ENDPOINT } from "../constants/constantcontact";
import { PRICING_PLAN_ENDPOINT } from "../constants/pricingservices";
import { PricingPlanInterface } from "@/app/interface/pricingplan";
export const sendContactMessage = async (firstname: string, email: string, typedestination: string, message: string) => {
    try {
        const getResponse = await axios.post(CONTACT_API_ENDPOINT, {
            firstname,
            email,
            typedestination,
            message
        })
        return getResponse.data
    } catch (error) {
        throw error;
    }
}

export const fetchPricingPlans = async (): Promise<PricingPlanInterface[]> => {
  try {
    const startTime = Date.now(); // Start time
    const response = await axios.get<PricingPlanInterface[]>(PRICING_PLAN_ENDPOINT);
    const duration = Date.now() - startTime; // Duration
    console.log(`Fetch time: ${duration}ms`); // Log fetch time
    return response.data;
  } catch (error) {
    console.error("Error fetching pricing plans:", error);
    throw error;
  }
};
