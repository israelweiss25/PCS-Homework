import { useState, useEffect } from "react";
const useFetch = (url, change) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null);
    useEffect(() => async function fetchData() {
        try {
            const r = await fetch(url)
            console.log(r)
            if (!r.ok) {
                throw new Error(`${r.status} - ${'page not found'}`);
            }
            const data = await r.json();
            console.log(data);
            setData(data);
        } catch (e) {
            console.log(e)
            setError(e.message)
        }

    }, [url, change]);
    return { data, error }
}
export default useFetch;
