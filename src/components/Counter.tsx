import { useState } from "react";

export const Counter = () => {

// we use agenerc typ to define the type of usesate
    const [count, setCount] = useState<number>(10);

    const incrementBy = (value: number) => {
        setCount(count + value);
    }

    return (
        <>
            <h3>Contador: <small>{count}</small></h3>
            <div>
                <button onClick={() => incrementBy(+1)}>+1</button>
                &nbsp;
                <button onClick={() => incrementBy(-1)}>-1</button>

            </div>

        </>

    );
}