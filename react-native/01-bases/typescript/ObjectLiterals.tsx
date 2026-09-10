interface IPerson {
  age: number;
  firstName: string;
  lastName: string;
  address: IAddress;
}

interface IAddress {
  country: string;
  street: string;
  houseNumber?: number; 
}
export const ObjectLiterals = () => {
  const person: IPerson = {
    age: 30,
    firstName: 'Ric',
    lastName: 'Path',
    address: {
      country: 'Mexico', 
      street: ''
    }

  }

  return (
    <>
      <div>ObjectLiterals</div>
      <p>
        {JSON.stringify(person, null, 2)}
      </p>
    </>
  )
}
