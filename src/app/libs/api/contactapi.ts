import axios from "axios";
import { CONTACT_API_ENDPOINT } from "../constants/constantcontact";

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