import {useEffect, useMemo, useRef} from "react";
import {debounce} from "lodash";

type Callback = () => void;

const useDebounce = (callback: Callback) => {
    const ref = useRef<Callback>();

    useEffect(() => {
        ref.current = callback;
    }, [callback]);

    return useMemo(() => {
        const func = () => {
            ref.current?.();
        };

        return debounce(func, 1000);
    }, []);
};

export default useDebounce;