 "use client"
import { useState, useEffect } from "react";
import { GetDestinationServices } from "../api/paketdestinasi";
import { PaketDestinasi } from "@/app/interface/destinationpackage";
export const HooksPaketDestinasi = () => {
    const [paketDestinasi, setPaketDestinasi] = useState<PaketDestinasi[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPaketDestinasi = async () => {
            try {
                const data = await GetDestinationServices();
                setPaketDestinasi(data);
            } catch (err) {
                setError("Failed to fetch data for paket destinasi");
            }
        };

        fetchPaketDestinasi();
    }, []);
    return {
        paketDestinasi,
        setPaketDestinasi,
        error,
        setError,
    };
};
