interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    country: string;
    houseNo: number
}



export const ObjectLiterals = () => {

    // objetos literales o simplemente objeto en javascript

    const persona: Person = {
        age: 33,
        firstName: "Ric",
        lastName: "Nef",
        address: {
            country: "Mexico",
            houseNo: 0
        }
    }
    return (
        <>
            <h3>Object Literals</h3>
            {JSON.stringify(persona)}
        </>
    )

}