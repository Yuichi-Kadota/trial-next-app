import useSWR from "swr";
import fetcher from "../api/api"


export default function Msg() {
    const { data, error } = useSWR('api/msg', fetcher)

    if (error) return (
        <div>faild to Load.</div>
    )
    if (!data) return (
        <div>loading...</div>
    )
    return (
        <div>{data.msg}</div>
    )
}


