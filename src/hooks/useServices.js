import { useState } from "react";
import { useEffect } from "react";

function useServices() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return [services];
}
export default useServices;