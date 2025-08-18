export function BasicFunctions() {


    const addTwoNumbers = (a: number, b: number): number => {
        return a + b
    }

    return (<>
        <h3>Basci Functions</h3>

        <span>El resultado de la suma es: {addTwoNumbers(5, 8)}</span>

    </>);
}