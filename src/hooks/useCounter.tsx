import { useState } from "react";

interface IOptions {
    initialValue?: number
}

export const useCounter = ({ initialValue = 0 }: IOptions) => {
    // we use ageneric type to define the type of usesate
    const [count, setCount] = useState<number>(initialValue);

    const incrementBy = (value: number) => {
        const newValue = count + value;
        if (newValue < 0) return;
        setCount(count + value);
    }

    return {
        count,
        incrementBy
    }

}

