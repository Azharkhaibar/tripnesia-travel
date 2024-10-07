import axios from "axios";
import { ENDPOINT_PAKET_DESTINASI } from "../constants/paketdestinasi";
import { PaketDestinasi } from "@/app/interface/destinationpackage";
export const GetDestinationServices = async (): Promise<PaketDestinasi[]> => {
    try {
        const getResponse = await axios.get<PaketDestinasi[]>(ENDPOINT_PAKET_DESTINASI);
        return getResponse.data;
    } catch (error) {
        console.error("Error fething data Paket: ", error);
        throw error
    }
}

//

