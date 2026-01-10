import { useState } from "react";
import { fetchInstagramData } from "../api/instagram";

export function useInstagram() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getData(url) {
        setLoading(true);
        try {
            const result = await fetchInstagramData(url);
            setData(result);
        } finally {
            setLoading(false);
        }
    }

    return { data, loading, getData };
}