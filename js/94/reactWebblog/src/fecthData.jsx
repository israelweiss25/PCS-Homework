import { useState, useEffect } from "react";
const useFetch = (url, change) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null);
    const [isLoading , setIsLoading] = useState(true);
    console.log(isLoading);
    useEffect(() => async function fetchData() {
        try {
            const r = await fetch(url)
            if (!r.ok) {
                throw new Error(`${r.status} - ${'page not found'}`);
            }
            const data = await r.json();
            setData(data);
            setIsLoading(false);
            console.log(isLoading)
        } catch (e) {
            console.log(e)
            setError(e.message)
        }

    }, [url, change]);
    return { data, error, isLoading }
}
export default useFetch;
