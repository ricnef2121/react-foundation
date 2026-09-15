// import { BasicTypes } from "../react-native/01-bases/typescript/BasicTypes"
// import { ObjectLiterals } from "../react-native/01-bases/typescript/ObjectLiterals"
// import { BasicFunctions } from "../react-native/01-bases/typescript/BasicFunctions"
// import { CounterWithHook } from "./components/CounterWithHook"
// import { Counter } from "./components"; 
// import { BasicTypes, ObjectLiterals, BasicFunctions } from "./typescript";
import { Counter } from "../react-native/01-bases/components/Counter";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-svh">
      <h1 className="text-xl mb-5">
        React + TypeScript
      </h1>
      {/* <BasicTypes /> */}
      {/* <ObjectLiterals /> */}
      {/* <BasicFunctions /> */}
      { /*<CounterWithHook /> */}
      {/* <BasicTypes /> */}
      {/* <ObjectLiterals /> */}
      {/* <BasicFunctions /> */}
      <Counter />
    </div>
  )
}

export default App
