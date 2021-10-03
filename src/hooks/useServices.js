import { useEffect } from "react";

function useServices() {
    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])
}