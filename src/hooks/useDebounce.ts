import {useEffect, useMemo, useRef} from "react";
import {debounce} from "lodash";

type Callback = () => void;

const useDebounce = (callback: Callback, wait: number = 300) => {
    const ref = useRef<Callback>();

    useEffect(() => {
        ref.current = callback;
    }, [callback]);

    return useMemo(() => {
        const func = () => {
            ref.current?.();
        };

        return debounce(func, wait);
    }, []);
};

export default useDebounce;