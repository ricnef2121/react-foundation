export const BasicTypes = () => {
    const name: string = "Ricardo"
    const age: number = 33
    const isACtive: boolean = true;

    const powers: string[] = ["ReactJs", "React Native", "Angualr", "Vue"]
    return (
        <>
            <h3>Tipos basicos</h3>
            {name} {age} {isACtive ? "true" : "false"}

            <br />

            {powers.join(", ")}
        </>
    )
}