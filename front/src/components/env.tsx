export default function Env(){
    const host = process.env.BE_HOST
    return (
        <p>{host}</p>
    )
}