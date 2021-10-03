import { useEffect } from "react";
import { useState } from "react";

function useBlogs() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./fakeBlog.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return [blogs];
}
export default useBlogs;