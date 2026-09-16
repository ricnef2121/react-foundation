import { useState } from "react"

export const Counter = () => {

    const [count, setCount] = useState<number>(10)

    // avoid get or achive negative numbers 
    const increaseBy = (value: number)=>{
        setCount(Math.max(value + count, 0))
    }

    return (
        <>
            <h3>Contador: <small className="font-bold">{count}</small></h3>
            <div>
                <button 
                className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700" onClick={() => increaseBy(+1)}>
                    +1
                </button>
                <button 
                className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700" onClick={() => increaseBy(-1)}>
                    -1
                </button>
            </div>
        </>
    )
}
