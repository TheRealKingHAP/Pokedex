import { useEffect, useState } from "react";

function useDebounce(value, time){
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebounceValue(value)
        }, time)
        return () => {
            clearTimeout(timeOut)
        }
    }, [value, time])

    return debounceValue
}

export default useDebounce