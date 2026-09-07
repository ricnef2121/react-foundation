import React from 'react'

let name: string = "Ric";
const age: number = 33;
const isActive: boolean = false;
const power: string[] = ["react","electron"]

export const BasicTypes = () => {
  return (
    <>
      <h1>Basic Types</h1>
      {name} - {age} - {isActive ? 'Active' : 'Inactive'}
      <p>{power.join(", ")}</p>
    </>
  )
}
